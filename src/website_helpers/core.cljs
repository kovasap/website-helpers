(ns website-helpers.core
  (:require
    [cljs.reader]
    [clojure.string :refer [replace join]]
    [clojure.set :refer [union intersection]]
    [reagent.core :as r]
    [reagent.dom :as d]
    [markdown-to-hiccup.core :refer [md->hiccup component]]
    [malli.dev.cljs :as dev]
    [malli.dev.pretty :as pretty]))

(def Hiccup [:vector :any])
(def ReagentComponent [:or [:=> [:cat :any] Hiccup]
                           Hiccup])

(defn my-md->hiccup
  [string]
  (last (last (component (md->hiccup string)))))

(my-md->hiccup "[Slipways](https://slipways.net/)")

(defn get-raw-string
  "Removes links or other hiccup wrappers from a string."
  [string]
  (prn string (string? string))
  (if (string? string)
    string
    (last string)))

(defn anchor
  [item-name]
  [:a {:class "anchor" :href (str "#" (replace (get-raw-string item-name) " " "-"))} "#"])

(defn ^:export to-js
  "Useful for debugging when trying to call functions in this file from js."
  [thing]
  (clj->js thing))

(defn ^:export read-edn-string
  [string]
  (let [unescaped-str (-> string
                          (replace "&#34;" "\"")
                          (replace "&#39;" "'"))]
    (cljs.reader/read-string unescaped-str)))

; (read-edn-string "\n\n[[&#34;Comparing prices&#34;\n  &#34;When buying a good or service, comparing many alternatives to find the\n  best price. For example, looking at the price per pound of various grocery\n  items and picking the one with the lowest price.&#34;\n  [&#34;habit&#34;]\n  [[&#34;Saves some money&#34;\n    &#34;&#34;\n    [&#34;positive&#34;]]\n   [&#34;Optimization problem&#34;\n    &#34;Involves constantly scanning many options and determining the best one.&#34;\n    [&#34;engaging&#34;]]]]\n [&#34;Slipways&#34;\n  &#34;A video game about colonizing planets and connecting them with trade\n  routes.&#34;\n  [&#34;game&#34; &#34;solitary&#34;]\n  [[&#34;Optimization problem&#34;]]]]\n\n\n")

(defn ^:export render-to-element
  [component element-id]
  (d/render [component] (.getElementById js/document element-id)))

(defn ^:export list-to-hiccup
  "Converts a sequence of string to hiccup. "
  {:malli/schema [:=> [:cat [:or [:sequential :string]
                                 [:set :string]]]
                  Hiccup]}
  [strings]
  [:ul
   (for [s strings
         :let [hiccup (my-md->hiccup s)]]
     [:li {:key s}
      (into (anchor hiccup) hiccup)])])
; (meta #'list-to-hiccup)

(def Name :string)
(def Details
  "A more detailed description of a specific experience or outcome." :string)
(def Tag :string)
(def Experiences
  "A syntax for writing experiences, to be parsed into maps for easier coding.
  Experiences are on the outer layer."
  [:vector [:tuple
            Name
            Details
            [:vector Tag]
            [:vector [:or
                      [:tuple Name] 
                      [:tuple Name Details] 
                      [:tuple Name Details [:vector Tag]]]]]])

(def Info
  [:map [:details Details]
        [:tags [:set Tag]]
        [:children [:set Name]]])
(def DataMap
  [:map-of Name Info])


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
   ["[Slipways](https://slipways.net/)"
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
  {:malli/schema [:=> [:cat Experiences] DataMap]}
  [raw-experiences]
  (into {} (for [[experience-name details tags outcomes] raw-experiences]
             [experience-name {:details (clean details)
                               :tags (set tags)
                               :children
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
  {:malli/schema [:=> [:cat DataMap [:tuple Name Info]]
                  DataMap]}
  [data-map [name {:keys [details children tags]}]]
  (let [{existing-details :details
         existing-tags :tags
         existing-children :children}
        (get data-map name {:details ""
                            :tags #{}
                            :children #{}})]
    (assoc data-map name
           {:details     (str existing-details details)
            :tags        (accrete-set existing-tags tags)
            :children    (accrete-set existing-children children)})))

(defn make-outcome-map
  {:malli/schema [:=> [:cat Experiences] DataMap]}
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
                                   :children    #{experience-name}}]))))))

; (make-outcome-map example-experiences)

(defn dropdown-check-list
  {:malli/schema [:=> [:cat :any] ; Actually an atom containing [:map-of Tag :boolean]
                  ReagentComponent]}
  [tags]
  (let [opened (r/atom false)]
    (fn []
      [:div {:id "tag-list"
             :class ["dropdown-check-list" (if @opened "visible" nil)]
             :tabIndex "100"}
       [:span {:class "anchor" :on-click #(reset! opened (not @opened))}
        "Select Tags"]
       (into [:ul {:class "items"}]
             (for [tag (sort (keys @tags))]
               [:li {:key tag}
                [:input {:type "checkbox"
                         :checked (if (get @tags tag) "checked" "")
                         :on-change (fn [_]
                                      (swap! tags assoc tag
                                             (not (get @tags tag))))}]
                tag]))])))

(defn get-tag-selections
  {:malli/schema [:=> [:cat DataMap] [:map-of Tag :boolean]]}
  [data-map]
  (into {} (map (fn [tag] [tag true])
                (reduce union (map :tags (vals data-map))))))

(defn get-selected-tags
  {:malli/schema [:=> [:cat [:map-of Tag :boolean] [:set Tag]]
                  [:set Tag]]}
  [tag-selections tags]
  (into #{} (filter #(get tag-selections %) tags)))

(defn make-tag-hiccup
  {:malli/schema [:=> [:cat [:set Tag] [:set Tag]]
                  Hiccup]}
  [tags selected-tags]
  [:p "Tags: "
    (interpose ", " (map #(if (selected-tags %)
                            [:strong {:key %} %]
                            [:span {:key %} %])
                         (sort tags)))])
  

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

  Or

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
  "
  {:malli/schema [:=> [:cat :string :string DataMap] ReagentComponent]}
  [data-name other-name data-map]
  (let [tag-selections (r/atom (get-tag-selections data-map))]
    (fn [data-name other-name data-map]
      ; This extra into is necessary since we are dereferencing @swapped
      ; See https://github.com/reagent-project/reagent/issues/18
      (into [:div
             [:h2 data-name]
             [:div [dropdown-check-list tag-selections]]] 
            (for [[item-name {:keys [details tags children]}]
                  data-map
                  :let [selected-tags (get-selected-tags @tag-selections tags)]
                  :when (not (empty? (intersection selected-tags tags)))]
              [:div {:key item-name}
               [:h3 (my-md->hiccup item-name) (anchor item-name)] 
               (make-tag-hiccup tags selected-tags)
               [:p (my-md->hiccup details) " " other-name ":"]
               (list-to-hiccup children)])))))

(defn ^:export make-aggregated-items
  {:malli/schema [:=> [:cat Experiences] ReagentComponent]}
  [raw-experiences]
  (fn []
    [:div
      [aggregated-items "Experiences" "Outcomes"
                        (make-experience-map raw-experiences)]
      [aggregated-items "Outcomes" "Experiences"
                        (make-outcome-map raw-experiences)]]))

(defn home-page []
  (fn []
    [make-aggregated-items example-experiences]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:dev/after-load refresh []
  (prn "Hot code Remount")
  (dev/start! {:report (pretty/reporter)})
  (mount-root))

(defn ^:export init! []
  (dev/start! {:report (pretty/reporter)})
  (mount-root))
