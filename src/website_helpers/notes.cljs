(ns website-helpers.notes
  (:require
    [clojure.set :refer [union difference intersection]]
    [clojure.string :refer [split capitalize join replace replace-first
                            includes? ends-with?]]))

(def Note
  [:map [:categories [:set :string]]
        [:markdown :string]
        [:links [:sequential :string]]
        [:path :string]
        [:name :string]])

(def Hiccup [:vector :any])


(def example-notes
  [{:name "1" :path "content/docs/one.md" :title "one" :categories #{"a" "b"}}
   {:name "2" :path "content/docs/two.md" :title "two" :categories #{"a"}}
   {:name "3" :path "content/docs/thr.md" :title "thr" :categories #{"c"}}])


(defn get-notes-by-category
  "Returns a map of categories to all notes with that category."
  ; {:malli/schema [:=> [:cat [:sequential Note]]
  ;                 [:map-of :keyword [:sequential Note]]]
  [notes]
  (apply merge-with (partial merge-with union) {}
         (for [note notes
               category (:categories note)]
           {category {:notes #{note}}})))


(get-notes-by-category example-notes)


(defn get-largest-category
  ([notes] (get-largest-category #{}))
  ([notes categories-to-ignore]
   (first
     (reverse
       (sort-by (fn [[_ v]] (count v))
                (for [[category notes-map] (get-notes-by-category notes)
                      :when (not (contains? categories-to-ignore category))]
                  [category (:notes notes-map)]))))))


(get-largest-category example-notes #{})


(defn get-notes-by-largest-category
  ([notes] (get-notes-by-largest-category notes #{}))
  ([notes categories-to-ignore]
   (if (<= (count notes) 1)
     {:notes notes}
     (let [[largest-category largest-notes]
           (get-largest-category notes categories-to-ignore)
           other-notes (difference notes largest-notes)]
       (prn largest-category)
       (prn largest-notes)
       (prn (count largest-notes))
       (prn other-notes)
       (merge
         {largest-category (get-notes-by-largest-category
                             largest-notes (conj categories-to-ignore
                                                 largest-category))}
         (get-notes-by-largest-category other-notes categories-to-ignore))))))

(get-notes-by-largest-category (set example-notes))


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
  [notes category-selections]
  (let [categories-to-include
        (set (for [[category selected?] category-selections
                   :when selected?]
               category))]
    (filter #(not (empty? (intersection categories-to-include (:categories %))))
            notes)))

(get-notes-for-categories example-notes {"a" true})

(defn make-category-menu
  [notes category-selections organization-fn]
  (make-subtree (organization-fn (get-notes-for-categories
                                   notes category-selections))))


(defn make-flat-category-menu
  "Every category gets its own place in the top-level menu, meaning that notes   
  with multiple categories will appear in multiple places."
  ; {:malli/schema [:=> [:cat [:sequential Note]]
  ;                 Hiccup
  [notes category-selections]
  (make-category-menu notes category-selections get-notes-by-category))
                               

(make-flat-category-menu example-notes {"a" true "b" true "c" true})


(defn make-completely-nested-category-menu
  [notes]
  [])

(defn make-largest-cat-nested-category-menu
  [notes]
  [])
