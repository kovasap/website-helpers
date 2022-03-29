(ns website-helpers.core
  (:require
    [cljs.reader]
    [clojure.string :refer [replace join]]
    [clojure.set :refer [union]]
    [reagent.core :as r]
    [reagent.dom :as d]
    [malli.core :as m]
    [malli.instrument.cljs]
    [malli.dev.cljs]
    [malli.dev.pretty :as pretty]))


(def Hiccup [:vector :any])
(def ReagentComponent [:or [:=> [:cat :any] Hiccup]
                           Hiccup])

(defn ^:export to-js
  "Useful for debugging when trying to call functions in this file from js."
  [thing]
  (clj->js thing))

(defn ^:export read-edn-string
  [string]
  (let [unescaped-str (replace string "&#34;" "\"")]
    (cljs.reader/read-string unescaped-str)))

; (read-edn-string "\n\n[[&#34;Comparing prices&#34;\n  &#34;When buying a good or service, comparing many alternatives to find the\n  best price. For example, looking at the price per pound of various grocery\n  items and picking the one with the lowest price.&#34;\n  [&#34;habit&#34;]\n  [[&#34;Saves some money&#34;\n    &#34;&#34;\n    [&#34;positive&#34;]]\n   [&#34;Optimization problem&#34;\n    &#34;Involves constantly scanning many options and determining the best one.&#34;\n    [&#34;engaging&#34;]]]]\n [&#34;Slipways&#34;\n  &#34;A video game about colonizing planets and connecting them with trade\n  routes.&#34;\n  [&#34;game&#34; &#34;solitary&#34;]\n  [[&#34;Optimization problem&#34;]]]]\n\n\n")

(defn ^:export render-to-element
  [component element-id]
  (d/render [component] (.getElementById js/document element-id)))

(defn ^:export list-to-hiccup
  "Converts a sequence of string to hiccup."
  {:malli/schema [:=> [:cat [:or [:sequential :string] [:set :string]]]
                  Hiccup]}
  [strings]
  [:ul
   (for [s strings]
     [:li {:key s} s])])
; (meta #'list-to-hiccup)

(def ExperienceName :string)
(def OutcomeName :string)
(def Details
  "A more detailed description of a specific experience or outcome." :string)
(def Tag :string)
(def Experiences
  "A syntax for writing experiences, to be parsed into maps for easier coding."
  [:vector [:tuple
            ExperienceName
            Details
            [:vector Tag]
            [:vector [:or
                      [:tuple OutcomeName] 
                      [:tuple OutcomeName Details] 
                      [:tuple OutcomeName Details [:vector Tag]]]]]])

(def ExperienceInfo
  [:map [:details Details]
        [:tags [:set Tag]]
        [:outcomes [:set OutcomeName]]])
(def ExperienceMap
  [:map-of ExperienceName ExperienceInfo])

(def OutcomeInfo
  [:map [:details Details]
        [:tags [:set Tag]]
        [:experiences [:set ExperienceName]]])
(def OutcomeMap
  [:map-of OutcomeName OutcomeInfo])


(def example-experiences
  [["Comparing prices"
    "When buying a good or service, comparing many alternatives to find the
    best price. For example, looking at the price per pound of various grocery
    items and picking the one with the lowest price."
    ["habit"]
    [["Saves some money"
      ""
      ["positive"]]
     ["Optimization problem"
      "Involves constantly scanning many options and determining the best one."
      ["engaging"]]]]
   ["Slipways"
    "A video game about colonizing planets and connecting them with trade
    routes."
    ["game" "solitary"]
    [["Optimization problem"]]]])
               

(defn clean
  "Cleans newlines and other stuff out of strings."
  [string]
  (if (nil? string)
    ""
    (replace string #"\n +" " ")))

(defn make-experience-map
  {:malli/schema [:=> [:cat Experiences] ExperienceMap]}
  [raw-experiences]
  (into {} (for [[experience-name details tags outcomes] raw-experiences]
             [experience-name {:details (clean details)
                               :tags (set tags)
                               :outcomes
                               (into #{} (for [[outcome-name _] outcomes]
                                           outcome-name))}])))
                                                    
; (make-experience-map example-experiences)

(defn accrete-set
  "Combines two sets, filtering out any nil or empty string values from the
  second set."
  {:malli/schema [:=> [:cat [:set :any] [:set :any]] [:set :any]]}
  [existing new]
  (union existing
         (set (filter #(not (contains? #{nil ""} %)) new))))

(defn -accrete-outcomes
  "Adds a single [OutcomeName OutcomeInfo] pair to an OutcomeMap, merging it
  with an existing entry if need be."
  {:malli/schema [:=> [:cat OutcomeMap [:tuple OutcomeName OutcomeInfo]]
                  OutcomeMap]}
  [outcome-map [outcome-name {:keys [details experiences tags]}]]
  (let [{existing-details :details
         existing-tags :tags
         existing-experiences :experiences}
        (get outcome-map outcome-name {:details ""
                                       :tags #{}
                                       :experiences #{}})]
    (assoc outcome-map outcome-name
           {:details     (str existing-details details)
            :tags        (accrete-set existing-tags tags)
            :experiences (accrete-set existing-experiences experiences)})))

(defn make-outcome-map
  {:malli/schema [:=> [:cat Experiences] OutcomeMap]}
  [raw-experiences]
  (reduce
    -accrete-outcomes
    {}
    ; Build up pairs of [OutcomeName data] with duplicate OutcomeName keys.
    (reduce
      concat
      (for [[experience-name _ _ outcomes] raw-experiences]
         (into {} (for [[outcome-name outcome-details outcome-tags] outcomes]
                    [outcome-name {:details     (clean outcome-details)
                                   :tags        (set outcome-tags)
                                   :experiences #{experience-name}}]))))))

; (make-outcome-map example-experiences)

; TODO animate the swapping!
(defn ^:export aggregated-items
  "Example:
  
  ```
  Recipe 1:
   - Ingredient 1
   - Ingredient 2

  Recipe 2:
   - Ingredient 2
   - Ingredient 3
   ...
  ...
  ```

  Swaps to

  ```
  Ingredient 1:
   - Recipe 1
   - Recipe 3

  Ingredient 2:
   - Recipe 1
   - Recipe 2
   ...
  ...
  ```

  when clicking the 'swap' button."
  {:malli/schema [:=> [:cat ExperienceMap OutcomeMap] ReagentComponent]}
  [experience-map outcome-map]
  (let [swapped (r/atom false)]
    (fn []
      ; This extra into is necessary since we are dereferencing @swapped
      ; See https://github.com/reagent-project/reagent/issues/18
      (into [:div
             [:h2 (if @swapped "Outcomes" "Experiences")]
             [:button {:on-click #(reset! swapped (not @swapped))}
              "Swap!"]]
            (for [[item-name {:keys [details tags outcomes experiences]}]
                  (if @swapped outcome-map experience-map)]
              [:div {:key item-name}
               [:h3 item-name]
               [:p "Tags: " (join ", " (sort tags))]
               [:p details " " (if @swapped "Experiences: " "Outcomes: ")]
               (list-to-hiccup (if @swapped experiences outcomes))])))))

(defn ^:export make-aggregated-items
  {:malli/schema [:=> [:cat Experiences] ReagentComponent]}
  [raw-experiences]
  (aggregated-items (make-experience-map raw-experiences)
                    (make-outcome-map raw-experiences)))

(defn home-page []
  (fn []
    [make-aggregated-items example-experiences]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:dev/after-load refresh []
  (prn "Hot code Remount")
  ; Check all malli function "specs"
  ; Uncomment when https://github.com/metosin/malli/issues/675 is fixed
  ; (malli.dev.cljs/start!) ; {:report (pretty/reporter)})
  (malli.dev.cljs/collect-all!)
  (malli.instrument.cljs/instrument!)
  (mount-root))

(defn ^:export init! []
  ; Check all malli function "specs"
  ; Uncomment when https://github.com/metosin/malli/issues/675 is fixed
  ; (malli.dev.cljs/start!) ; 
  (malli.dev.cljs/collect-all!)
  (malli.instrument.cljs/instrument!)
  (mount-root))
