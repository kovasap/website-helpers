(ns website-helpers.core
  (:require
    [website-helpers.graph :as g]
    [cljs.reader]
    [clojure.string :refer [split replace join includes? capitalize]]
    [clojure.set :refer [union intersection subset?]]
    [clojure.walk :refer [postwalk]]
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
  (rest (rest (last (component (md->hiccup string))))))

(my-md->hiccup "[Slipways](https://slipways.net/)")

(my-md->hiccup   "This includes watching videos from channels like
  [Veritasium](https://www.youtube.com/user/1veritasium), 
  [CGP Grey](https://www.youtube.com/user/CGPGrey),
  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).")

(defn get-raw-string
  "Removes links or other hiccup wrappers from a string."
  [string]
  (if (string? string)
    string
    (get-raw-string (last string))))

(defn anchor-string
  [item-name]
  (replace (get-raw-string item-name) " " "-"))

(defn anchor
  [item-name]
  [:a {:class "anchor" :href (str "#" (anchor-string item-name))} "#"])

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
         :let [hiccup (first (my-md->hiccup s))]]
     [:li {:key s}
      (into (anchor hiccup) hiccup)])])
; (meta #'list-to-hiccup)

(def Name :string)
(def Details
  "A more detailed description of a specific experience or mental-state." :string)
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


(def example-experiences-orig
  [["Comparing prices"
    "When buying a good or service, comparing many alternatives to find the
    best price. For example, looking at the price per pound of various grocery
    items and picking the one with the lowest price."
    ["habit"]
    [["Financial Control"
      "A sense that you are living within or below your means."
      ["positive"]]
     ["Optimization problem"
      "Involves constantly scanning many options and determining the best one."
      ["engaging"]]]]
   ["[Slipways](https://slipways.net/)"
    "A video game about colonizing planets and connecting them with trade
    routes."
    ["game" "solitary"]
    [["Optimization problem"]]]
   ["Weights" "" ["exercise"] []]
   ["Drugs" "" ["habit"] []]
   ["Running" "" ["exercise"] []]])
               

(def example-experiences
  [["Comparing prices"
    "When buying a good or service, comparing many alternatives to find the
  best price. For example, looking at the price per pound of various grocery
  items and picking the one with the lowest price."
    ["habit"]
    [["Financial Control"
      "A feeling that you understand and are in control of your finances."
      ["positive"]]
     ["Scanning through possibilities"
      "Constantly examining many options and determining the best one by some
    usually simple criteria."
      ["engaging"]]]]
   ["Lead Climbing in a Gym" 
    "Clipping quickdraws on the way up a climbing route in a gym."
    ["climbing" "exercise" "⭐top10"]
    [["Thrill of Committment"
      "Doing something with a penalty for failure that you can't turn back from."]
     ["Triumph over Exposure"
      "Putting yourself in a stressful situation and showing yourself that you
    can survive in it. I think this is a feeling Marc-André Leclerc was chasing
    in the movie 'The Alpinist'."]
     ["Being in the Zone"]]]
   ["Redditing"
    "This includes watching videos from channels like
  [Veritasium](https://www.youtube.com/user/1veritasium), 
  [CGP Grey](https://www.youtube.com/user/CGPGrey),
  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt)."
    ["habit"]
    [["Easy to do"
      "Requires little to no difficult decision making, so is therefore easy to
    pick up and do."]
     ["Contains hidden gems"
      "Most of the time this activity is monotonous and/or forgettable, but
    occasionally it will yield an extremely memorable or life-changing
    experience."]]]
   ["Browsing Hacker News"
    "Like browsing reddit."
    ["habit"]
    [["Easy to do"]
     ["Contains hidden gems"]]]
   ["Watching GothamChess"
    "Watching the GothamChess YouTube channel."
    []
    [["Easy to do"]
     ["False Understanding"
      "A state of mind where something seems to make sense emotionally, but if
    you were to try to explain it in your own words or otherwise apply the
    knowledge you would fail."]]]
   ["Yo-Yoing"
    "Playing with a yo-yo, and learning new tricks for it."
    []
    [["Skill clicking into place"
      "The feeling when something that you thought was impossible, or otherwise
    had no idea how to even approach doing, you can suddenly do effortlessly."]]]
   ["Beat Saber"
    "Playing the VR rhythm game beat saber."
    []
    [["Skill clicking into place"]
     ["Being in the Zone"
      "Being in a state of mind where all your attention must be focused on a
    single thing to avoid failure, leading to an emptiness of other thoughts."]]]
   ["Making Small Web Apps in ClojureScript with Reagent"
    "See title :)"
    ["programming"]
    [["Pride of Construction"
      "Feeling proud or even in awe of something you made that is now a (semi)
    permenant thing in the world. "
      ["positive"]]
     ["Chaos to Solution"
      "The feeling when you have no idea how to fix something but suddenly a
    solution appears out of nowhere. You may or may not understand how the
    solution works or where it came from."]]]
   ["Apex Legends"
    "A fast-paced first person shooter video game. Has extremely good art
  direction, smooth gameplay, and balanced mechanics."
    ["game" "multiplayer" "competitive"]
    [["Constructive regret"
      "The feeling when you step out of a test and think 'I knew that answer!!'
    in a way that makes you want to walk right back into the testing hall and
    fix your mistake."]]]
   ["[Wordle](https://www.nytimes.com/games/wordle/index.html)"
    "A fun word game."
    ["game" "social"]
    [["Scanning through possibilities"]]]
   ["Slipways"
    "A video game about colonizing planets and connecting them with trade
  routes."
    ["game" "solitary"]
    [["Scanning through possibilities"]]]])
  

(defn clean
  "Cleans newlines and other stuff out of strings."
  [string]
  (if (nil? string)
    ""
    (replace string #"\n +" " ")))

(defn make-experience-map
  {:malli/schema [:=> [:cat Experiences] DataMap]}
  [raw-experiences]
  (into {} (for [[experience-name details tags mental-states] raw-experiences]
             [experience-name {:details (clean details)
                               :tags (set tags)
                               :children
                               (into #{} (for [[mental-state-name _] mental-states]
                                           mental-state-name))}])))
                                                    
; (make-experience-map example-experiences)

(defn accrete-set
  "Combines two sets, filtering out any nil or empty string values from the
  second set."
  {:malli/schema [:=> [:cat [:set :any] [:set :any]] [:set :any]]}
  [existing new]
  (union existing
         (set (filter #(not (contains? #{nil ""} %)) new))))

(defn -accrete-mental-states
  "Adds a single [Name Info] pair to an DataMap, merging it with an existing
  entry if need be."
  {:malli/schema [:=> [:cat DataMap [:tuple Name Info]]
                  DataMap]}
  [data-map [name {:keys [details children tags]}]]
  (let [{existing-details :details
         existing-tags :tags
         existing-children :children
         :or {existing-details ""
              existing-tags #{}
              existing-children #{}}}
        (get data-map name)]
    (assoc data-map name
           {:details     (str existing-details details)
            :tags        (accrete-set existing-tags tags)
            :children    (accrete-set existing-children children)})))

(defn make-mental-state-map
  {:malli/schema [:=> [:cat Experiences] DataMap]}
  [raw-experiences]
  (reduce
    -accrete-mental-states
    {}
    ; Build up pairs of [Name data] with duplicate Name keys.
    (reduce
      concat
      (for [[experience-name _ _ mental-states] raw-experiences]
         (into {} (for [[mental-state-name mental-state-details mental-state-tags]
                        mental-states]
                    [mental-state-name
                     {:details     (clean mental-state-details)
                      :tags        (if (nil? mental-state-tags)
                                     #{} (set mental-state-tags))
                      :children    #{experience-name}}]))))))

(make-mental-state-map example-experiences)

(defn parse-params
  "Parse URL parameters into a hashmap"
  []
  (let [url (.-location js/window)
        param-strs (-> url (split #"\?") last (split #"\&"))]
    (if (includes? (str url) "?")
      (into {} (map #(split % #"=") param-strs))
      {})))

(defn sync-url-tag-params!
  {:malli/schema [:=> [:cat [:map-of Tag :boolean]] :nil]}
  [tags]
  (let [url (js/URL. (. js/window -location))]
    (doseq [[tag value] tags]
      (if value
        (.. url -searchParams (set tag value))
        (.. url -searchParams (delete tag)))
      (.. js/window -history (pushState nil "" (.toString url))))))

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
                                             (not (get @tags tag)))
                                      (sync-url-tag-params! @tags))}]
                tag]))])))

(defn get-tag-selections
  {:malli/schema [:=> [:cat DataMap] [:map-of Tag :boolean]]}
  [data-map]
  (let [url-params (parse-params)]
    (into {} (for [tag (reduce union (map :tags (vals data-map)))]
                [tag (contains? url-params tag)]))))

(defn get-selected-tags
  "If no tags are selected, all are!"
  {:malli/schema [:=> [:cat [:map-of Tag :boolean]]
                  [:set Tag]]}
  [tag-selections]
  (if (every? #(not %) (vals tag-selections))
    (set (keys tag-selections))
    (set (for [[tag selected] tag-selections
               :when selected]
           tag))))

(defn make-tag-hiccup
  {:malli/schema [:=> [:cat [:set Tag] [:set Tag]]
                  Hiccup]}
  [tags selected-tags]
  [:p "Tags: "
    (interpose ", " (map #(if (selected-tags %)
                            [:strong {:key %} %]
                            [:span {:key %} %])
                         (sort tags)))])

; ---------------- Similarity Sorting -----------------------------------

(defn calc-similarity
  {:malli/schema [:=> [:cat Info Info] :int]}
  [info1 info2]
  (count (intersection (:tags info1) (:tags info2))))

(def Similarities
  [:map-of Name [:map-of Name :int]])

(defn get-all-similarities
  {:malli/schema [:=> [:cat DataMap] Similarities]}
  [data-map]
  (into {} (for [[name1 info1] data-map]
             [name1 (into {} (for [[name2 info2] data-map]
                               [name2 (calc-similarity info1 info2)]))])))

(defn get-closest-name
  {:malli/schema [:=> [:cat Name Similarities] Name]}
  [name similarities]
  (let [distances (dissoc (get similarities name) name)]
    (first (reverse (sort-by #(get distances %) (keys distances))))))

(defn prune-similarities
  "Remove the given name from the similarities map."
  {:malli/schema [:=> [:cat Name Similarities] Similarities]}
  [name-to-prune similarities]
  (postwalk #(if (map? %) (dissoc % name-to-prune) %) similarities))

; (prune-similarities "b" {"a" {"b" 1 "a" 0} "b" {"a" 1 "b" 0}})

(defn -get-rest
  [last-name similarities]
  (cond
    (= 1 (count similarities)) [last-name]
    :else (let [cur-name (get-closest-name last-name similarities)
                pruned-similarities (prune-similarities last-name similarities)]
            ; (prn last-name cur-name similarities)
            (concat [last-name] (-get-rest cur-name pruned-similarities)))))

(defn sort-by-tags
  "Sort the input data map by tag similarity.
  
  This is done by computing a similarity score between every pair of items,
  then solving the travelling salesman problem given these pairs."
  [data-map]
  (let [similarities (get-all-similarities data-map)
        start-name (first (sort (keys data-map)))
        sorted-names (-get-rest start-name similarities)]
    (into (sorted-map) (for [name sorted-names]
                        [name (get data-map name)]))))

; (def example-experience-map (make-experience-map example-experiences))
; (identity example-experience-map)
; (prune-similarities "Drugs" (get-all-similarities example-experience-map))
; (sort-by-tags example-experience-map)
  
; ----------------------------------------------------------------------

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
      ; This extra into is necessary since we are dereferencing @tag-selections
      ; See https://github.com/reagent-project/reagent/issues/18
      (into [:div
             [:h2 data-name]
             [:div [dropdown-check-list tag-selections]]] 
            (for [[item-name {:keys [details tags children]}]
                  (sort-by-tags data-map)
                  :let [selected-tags (get-selected-tags @tag-selections)
                        hiccup-name (my-md->hiccup item-name)]
                  :when (or (= (count selected-tags) (count @tag-selections))
                            (subset? selected-tags tags))]
              [:div {:key item-name}
               [:h3 {:id (anchor-string hiccup-name)} hiccup-name
                (anchor hiccup-name)] 
               (make-tag-hiccup tags selected-tags)
               [:p (my-md->hiccup details) " " other-name ":"]
               (list-to-hiccup children)])))))

(defn ^:export make-aggregated-items
  {:malli/schema [:=> [:cat Experiences] ReagentComponent]}
  [raw-experiences]
  (fn []
    [:div
      [aggregated-items "Experiences" "States of Mind"
                        (make-experience-map raw-experiences)]
      [aggregated-items "States of Mind" "Experiences"
                        (make-mental-state-map raw-experiences)]]))

(def example-page-tree
  [{:name "manifesto.md", :size 10074}
   {:name "climbing", :size 4096,
    :children [{:name "media.md", :size 592}
               {:name "safety-checklist.md", :size 3276}
               {:name "event-reports", :size 4096,
                :children [{:name "2019-10-7-namaste-wall-zion.md", :size 1899}
                           {:name "2020-8-10-lake-erie.md", :size 1225}
                           {:name "2020-8-12-mile-high-club.md", :size 10662}
                           {:name "first-512.md", :size 214}
                           {:name "mcmahon-hall.md", :size 928}]}]}
   {:name "datavis", :size 4096,
    :children [{:name "reddit-tree.md", :size 551}
               {:name "seattle-rain.md", :size 2105}]}
   {:name "gamedev", :size 4096,
    :children [{:name "common-patterns.md", :size 2276}
               {:name "gamedev-context.md", :size 246}
               {:name "my-projects.md", :size 1131}
               {:name "game-ideas", :size 4096,
                :children [{:name "farming-video-game.md", :size 786}
                           {:name "roguelike-base-builder.md", :size 2019}
                           {:name "safe-building-designer.md", :size 507}]}
               {:name "mechanic-ideas", :size 4096,
                :children [{:name "character-alignment.md", :size 436}
                           {:name "low-friction-turn-based-tactics.md", :size 3187}]}]}
   {:name "gaming", :size 4096,
    :children [{:name "buying-games.md", :size 912}
               {:name "chess.md", :size 297}
               {:name "fps-principles.md", :size 6329}
               {:name "oxygen-not-included.md", :size 472}
               {:name "recommendations.md", :size 326}]}
   {:name "health-and-longevity", :size 4096,
    :children [{:name "aging-science.md", :size 94}
               {:name "avoiding-accidents.md", :size 244}
               {:name "biomarker-correlator.md", :size 188}
               {:name "causes-of-death.md", :size 703}
               {:name "chronic-stress.md", :size 26}
               {:name "circadian-rhythm.md", :size 72}
               {:name "continuous-glucose-monitoring.md", :size 1384}
               {:name "cooking.md", :size 9101}
               {:name "dental-health.md", :size 135}
               {:name "dna-testing.md", :size 670}
               {:name "exercise.md", :size 29}
               {:name "fasting.md", :size 4493}
               {:name "finding-care.md", :size 275}
               {:name "food.md", :size 16612}
               {:name "influences.md", :size 8329}
               {:name "misc-research.md", :size 409}
               {:name "my-physiological-states.md", :size 636}
               {:name "sleep.md", :size 4462}
               {:name "tracking-health.md", :size 4196}]}
   {:name "hydroponics", :size 4096,
    :children [{:name "journal.md", :size 1525}
               {:name "my-setup.md", :size 4052}]}
   {:name "investing-and-finances", :size 4096,
    :children [{:name "comprehensive-housing-return-estimator.md", :size 11714}
               {:name "financial-independence.md", :size 745}
               {:name "housing.md", :size 1515}
               {:name "influences.md", :size 1368}
               {:name "monthly-costs-of-car-ownership.md", :size 475}
               {:name "strategies.md", :size 1243}
               {:name "taxes.md", :size 2727}]}
   {:name "lifelogging", :size 4096,
    :children [{:name "camera.md", :size 869}
               {:name "influences.md", :size 250}
               {:name "what-and-why.md", :size 8752}]}])

(defn tree-seq-adding-path
  "Like tree-seq, but takes in a tree of maps and a unique :path key to each map.
  
  See https://clojuredocs.org/clojure.core/tree-seq#example-62780fc7e4b0b1e3652d75ea"
  [branch? children root]
  (let [walk (fn walk [path node]
               (lazy-seq
                (cons (assoc node :path (str path "/" (:name node)))
                 (when (branch? node)
                   (mapcat (partial walk (str path "/" (:name node)))
                           (children node))))))]
    (walk nil root)))

(defn get-idxed-nodes
  [tree]
  (let [idxed-nodes
        (map-indexed
           (fn [i n] (assoc n :idx i))
           (tree-seq-adding-path associative? :children
                                 {:name "home" :children tree}))
        idxes-by-path (into {} (for [node idxed-nodes]
                                 [(:path node) (:idx node)]))]
    ; Now we update the one level deep children with the indicies
    (for [n idxed-nodes]
      (update n :children
              (fn [children]
                (into [] (for [c children]
                           (assoc c :idx (get idxes-by-path
                                              (str (:path n) "/" (:name c)))))))))))

(defn get-links
  [tree]
  (reduce concat
    (for [subtree (get-idxed-nodes tree)]
      (into [] (for [child (:children subtree)]
                 {:source (:idx child)
                  :target (:idx subtree)
                  :value 6})))))


(defn update-nodes
  [nodes & update-fns]
  (into [] (for [n nodes]
             ((apply comp update-fns) n))))

(defn scale-size
  [node]
  (update node :size #(Math/sqrt (/ % 10))))

(defn assign-group
  [node]
  (assoc node :group (cond
                       (nil? (:children node)) 1
                       (= 0 (count (:children node))) 2
                       (<= 0 (count (:children node))) 3)))

(defn strip-extension
  [node]
  (-> node
      (update :name #(first (split % #"\.")))
      (update :path #(first (split % #"\.")))))

(defn fix-path
  [node]
  (update node :path #(replace % #"/home" "docs/")))

(defn capitalize-words 
  "Capitalize every word in a string"
  [s]
  (->> (split (str s) #"\b") 
       (map capitalize)
       (join)))

(defn prettify-name
  [node]
  (update node :name #(-> %
                         (replace #"-" " ")
                         (capitalize-words))))
                       

(defn page-tree-to-graph
  [page-tree]
  {:nodes (update-nodes (get-idxed-nodes page-tree)
                        prettify-name fix-path strip-extension scale-size
                        assign-group)
   :links (get-links page-tree)})


(def page-graph-data-simple
  (r/atom {:nodes [{:name "Home" :size 5 :id "Home"}
                   {:name "Mind" :size 5 :id "Mind"}]
           :links [{:source 0 :target 1 :value 2}]}))

(def example-page-graph-data
  (r/atom (page-tree-to-graph example-page-tree)))


(defn page-graph
  [page-tree-string]
  (let [page-tree (read-edn-string page-tree-string)
        page-graph-data (r/atom (page-tree-to-graph page-tree))]
    [:div
      [g/viz (r/track g/prechew page-graph-data) "https://kovasap.github.io/"]]))

(defn home-page []
  (fn []
    [:div
      [:p "hi"]
      [g/viz (r/track g/prechew example-page-graph-data)
       "https://kovasap.github.io/"]
      [make-aggregated-items example-experiences]]))

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
