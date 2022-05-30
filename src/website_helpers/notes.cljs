(ns website-helpers.notes
  (:require
    [website-helpers.common-components :refer [dropdown-check-list]]
    [website-helpers.utils :refer [get-selected-vars get-url-param-selections]]
    [website-helpers.schemas :refer [Hiccup ReagentComponent]]
    [clojure.set :refer [union difference intersection]]
    [clojure.string :refer [capitalize replace replace-first]]
    [reagent.core :as r]))

(def Note
  [:map [:categories [:set :string]]
        [:markdown :string]
        [:links [:sequential :string]]
        [:path :string]
        [:name :string]])

(def example-notes
  [{:name "1" :markdown "text 1" :path "content/docs/one.md" :title "one"
    :categories #{"a 1" "b"}}
   {:name "2" :markdown "text 1" :path "content/docs/two.md" :title "two"
    :categories #{"a 1"}}
   {:name "3" :markdown "text 1" :path "content/docs/thr.md" :title "thr"
    :categories #{"c"}}])


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
  (filter #(not (empty? (intersection selected-categories (:categories %))))
          notes))

; (get-notes-for-categories example-notes {"a" true})

(defn make-category-menu
  [notes selected-categories organization-fn]
  (-> (get-notes-for-categories notes selected-categories)
    set
    organization-fn
    make-subtree))

(def example-selected-categories #{"a 1" "b" "c"})

; Every category gets its own place in the top-level menu, meaning that notes   
; with multiple categories will appear in multiple places."
; (make-category-menu
;   example-notes example-selected-categories get-notes-by-category)

; Every note has a unique spot, as determined by nested categories (based on
; the category's size).
; (make-category-menu
;   example-notes example-selected-categories get-notes-by-largest-category)

(defn ^:export make-index-menu
  ; {:malli/schema [:=> [:cat [:sequential Note] ReagentComponent]]}
  [notes]
  (let [category-selections (r/atom (get-url-param-selections
                                      (keys (get-notes-by-category notes))))]
    (fn []
      (let [selected-categories (get-selected-vars @category-selections)]
        [:div
          [:div [dropdown-check-list category-selections "Select Categories"]] 
          (make-category-menu
            notes selected-categories get-notes-by-largest-category)]))))


