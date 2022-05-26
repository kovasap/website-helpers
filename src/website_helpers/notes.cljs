(ns website-helpers.notes
  (:require
    [clojure.set :refer [union]]
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
  [{:name "1" :path "content/docs/one.md" :title "one" :categories ["a" "b"]}
   {:name "2" :path "content/docs/two.md" :title "two" :categories ["a"]}
   {:name "3" :path "content/docs/thr.md" :title "thr" :categories ["c"]}])


(defn get-notes-by-category
  "Returns a map of categories to all notes with that category."
  ; {:malli/schema [:=> [:cat [:sequential Note]]
  ;                 ; This function will never return CategoryBranches, but other
  ;                 ; similar ones will
  ;                 [:map-of :keyword [:sequential [:or CategoryBranch Note]]]
  [notes]
  (apply merge-with (partial merge-with into) {}
         (for [note notes
               category (:categories note)]
           {category {:notes [note]}})))


(get-notes-by-category example-notes)


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
  

(defn make-flat-category-menu
  "Every category gets its own place in the top-level menu, meaning that notes   
  with multiple categories will appear in multiple places."
  ; {:malli/schema [:=> [:cat [:sequential Note]]
  ;                 Hiccup
  [notes category-selections]
  (make-subtree (select-keys (get-notes-by-category notes)
                             (for [[category selected?] category-selections
                                   :when selected?]
                               category))))
                               

(make-flat-category-menu example-notes {})


(defn make-completely-nested-category-menu
  [notes]
  [])

(defn make-largest-cat-nested-category-menu
  [notes]
  [])
