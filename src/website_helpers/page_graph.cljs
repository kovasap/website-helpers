(ns website-helpers.page-graph
  (:require
    [website-helpers.graph :as g]
    [clojure.string :refer [split replace join capitalize]]
    [reagent.core :as r]))

(def PageTree
  [:map [:name :string]
        [:size :int]
        [:sequential PageTree]])

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
  "Like tree-seq, but takes in a tree of maps and a unique :tree-path key to
  each map.
  
  See https://clojuredocs.org/clojure.core/tree-seq#example-62780fc7e4b0b1e3652d75ea"
  [branch? children root]
  (let [walk (fn walk [path node]
               (lazy-seq
                (cons (assoc node :tree-path (str path "/" (:name node)))
                 (when (branch? node)
                   (mapcat (partial walk (str path "/" (:name node)))
                           (children node))))))]
    (walk nil root)))


(tree-seq-adding-path associative? :children
                      {:name "home" :children example-page-tree})

(defn get-idxed-nodes
  [tree]
  (let [idxed-nodes
        (map-indexed
           (fn [i n] (assoc n :idx i))
           (tree-seq-adding-path associative? :children
                                 {:name "home" :children tree}))
        idxes-by-path (into {} (for [node idxed-nodes]
                                 [(:tree-path node) (:idx node)]))]
    ; Now we update the one level deep children with the indicies
    (for [n idxed-nodes]
      (update n :children
              (fn [children]
                (into [] (for [c children]
                           (assoc c :idx (get idxes-by-path
                                              (str (:tree-path n)
                                                   "/" (:name c)))))))))))

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
      (update :tree-path #(first (split % #"\.")))))

(defn fix-path
  [node]
  (update node :tree-path #(replace % #"/home" "docs/")))

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


(defn ^:export page-graph
  [page-tree options]
  (let [page-graph-data (r/atom (page-tree-to-graph page-tree))]
    (fn []
      [:div
        [g/viz (r/track g/prechew page-graph-data) "https://kovasap.github.io/"
         (js->clj options :keywordize-keys true)]])))

