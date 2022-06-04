(ns website-helpers.notes
  (:require
    [website-helpers.common-components :refer [dropdown-check-list]]
    [website-helpers.utils :refer [get-selected-vars get-url-param-selections]]
    [website-helpers.schemas :refer [Hiccup ReagentComponent]]
    [clojure.set :refer [union difference intersection]]
    [clojure.string :refer [capitalize replace replace-first]]
    [cljs.test :refer (deftest is)]
    [reagent.core :as r]))

(def Note
  [:map [:categories [:set :string]]
        [:markdown :string]
        [:links [:sequential :string]]
        [:path :string]
        [:name :string]])

(defn ex-note
  [n categories]
  {:name n :markdown (str "text " n) :path (str "content/docs/" n ".md")
   :title (str "t-" n) :categories categories})

(def example-notes
  [(ex-note "1" #{"a 1" "b"})
   (ex-note "2" #{"a 1"})
   (ex-note "3" #{"c"})
   (ex-note "4" #{"a 1" "c"})])


(defn get-notes-by-category
  "Returns a map of categories to all notes with that category."
  ; {:malli/schema [:=> [:cat [:sequential Note]]
  ;                 [:map-of :keyword [:sequential Note]]]
  [notes]
  (apply merge-with (partial merge-with union) {}
         (for [note notes
               category (:categories note)]
           {category {:notes #{note}}})))


; (get-notes-by-category example-notes)


(defn get-largest-category
  ([notes] (get-largest-category #{}))
  ([notes categories-to-ignore]
   (first
     (reverse
       (sort-by (fn [[_ v]] (count v))
                (for [[category notes-map] (get-notes-by-category notes)
                      :when (not (contains? categories-to-ignore category))]
                  [category (:notes notes-map)]))))))


; (get-largest-category example-notes #{})


(defn get-notes-by-largest-category
  ([notes] (get-notes-by-largest-category notes #{}))
  ([notes categories-to-ignore]
   (if (<= (count notes) 1)
     {:notes notes}
     (let [[largest-category largest-notes]
           (get-largest-category notes categories-to-ignore)
           other-notes (difference notes largest-notes)]
       (merge
         {largest-category (get-notes-by-largest-category
                             largest-notes (conj categories-to-ignore
                                                 largest-category))}
         (get-notes-by-largest-category other-notes categories-to-ignore))))))

; (get-notes-by-largest-category (set example-notes))


(defn note-to-li
  [note]
  [:li {:key (:name note)}
   [:a {:href (-> note
                  :path
                  (replace-first "content" "")
                  (replace #".md" "/"))}
    (:title note)]])

   
(defn make-subtree
  [notes-by-category]
  (into [:ul] (reduce concat
                      (for [[category subtree] notes-by-category]
                        (if (= category :notes)
                          (into [] (for [note subtree]
                                     (note-to-li note)))
                          [[:li {:key category}
                            [:details {:id category}
                             [:summary [:strong (capitalize category)]]
                             (make-subtree subtree)]]])))))


(defn get-notes-for-categories
  [notes selected-categories]
  (set (filter #(not (empty? (intersection selected-categories
                                           (:categories %))))
               notes)))

(defn notes-by-category-to-children-tree
  "Converts a map produced by get-notes-by-category to a PageTree
  readable by page_graph.cljs logic."
  [notes-by-category categories-to-idx]
  (into []
    (reduce concat
      (for [[k v] notes-by-category]
        (if (= :notes k)
          (vec v)
          [{:name k
            :idx (get categories-to-idx k)
            :children (notes-by-category-to-children-tree
                        v categories-to-idx)}])))))

(defn organize-notes-by-category
  [notes selected-categories]
  (get-notes-by-largest-category ; Change this for different organization!
  ; (get-notes-by-category ; Change this for different organization!
    (get-notes-for-categories notes selected-categories)))

(defn index-categories
  [categories num-notes]
  (into {} (for [[i c] (map-indexed vector categories)]
             [c (+ num-notes i)])))


(deftest to-tree
  (def example-categories #{"a 1" "c"})
  (is (= (notes-by-category-to-children-tree
          (organize-notes-by-category example-notes example-categories)
          (index-categories example-categories (count example-notes)))
         [{:name "a 1", :idx 5,
           :children
           [{:name "c", :idx 4,
             :children
             [{:name "4", :markdown "text 4", :path "content/docs/4.md",
               :title "t-4", :categories #{"c" "a 1"}}]}
            {:name "b", :idx nil,
             :children
             [{:name "1", :markdown "text 1", :path "content/docs/1.md",
               :title "t-1", :categories #{"b" "a 1"}}]}
            {:name "2", :markdown "text 2", :path "content/docs/2.md",
             :title "t-2", :categories #{"a 1"}}]}
          {:name "3", :markdown "text 3", :path "content/docs/3.md",
           :title "t-3", :categories #{"c"}}])))

(defn make-category-menu
  [notes selected-categories]
  (make-subtree (organize-notes-by-category notes selected-categories)))

(defn get-category-selections
  [notes]
  (r/atom (get-url-param-selections
            (set (keys (get-notes-by-category notes))))))

; Every category gets its own place in the top-level menu, meaning that notes   
; with multiple categories will appear in multiple places.")
; (make-category-menu
;   example-notes example-selected-categories get-notes-by-category)

; Every note has a unique spot, as determined by nested categories (based on
; the category's size).
; (make-category-menu
;   example-notes example-selected-categories get-notes-by-largest-category)

(defn ^:export make-index-menu
  ; {:malli/schema [:=> [:cat [:sequential Note] ReagentComponent]]}
  [notes]
  (let [category-selections (get-category-selections notes)]
    (fn []
      [:div
        [:div [dropdown-check-list category-selections "Select Categories"]] 
        (make-category-menu
          notes (get-selected-vars @category-selections))])))
