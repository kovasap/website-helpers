(ns website-helpers.notes
  (:require
    [website-helpers.common-components :refer [dropdown-check-list]]
    [website-helpers.utils :refer [get-url-param-selections get-selected-vars]]
    [website-helpers.schemas :refer [Hiccup ReagentComponent]]
    [website-helpers.all-data :as ad]
    [website-helpers.global :refer [url-params]]
    [clojure.set :refer [union difference intersection subset?]]
    [clojure.string :refer [capitalize replace replace-first join]]
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

(defn get-notes-by-directory
  "Returns a map of path categories (derived from directories) to all notes
  with that category."
  [notes]
  (apply merge-with
    (partial merge-with union)
    {}
    (for [note     notes
          category (:path-categories note)]
      {category {:notes #{note}}})))


; (get-notes-by-category example-notes)


(defn get-largest-category
  ([notes] (get-largest-category notes #{}))
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
   (if (or (nil? notes) (<= (count notes) 1))
     {:notes notes}
     (let [[largest-category largest-notes]
           (get-largest-category notes categories-to-ignore)
           other-notes (difference notes largest-notes)]
       ; I don't really understand why this if works
       (if (nil? largest-notes)
         {:notes notes}
         (merge
           {largest-category (get-notes-by-largest-category
                               largest-notes (conj categories-to-ignore
                                                   largest-category))}
           (get-notes-by-largest-category other-notes categories-to-ignore)))))))

(get-notes-by-largest-category (set ad/notes))


(defn path->url
  [path]
  (-> path
      (replace-first "content" "")
      (replace #".md" "/")))


(defn note->link
  [note cur-page-note]
  [:a
   (let [attrs {:href (path->url (:path note))}]
     (if (= cur-page-note note)
       (assoc attrs :style {:font-style "italic"})
       attrs))
   (:title note)])

(defn note-to-li
  [note cur-page-note]
  [:li {:key (:name note)}
   (note->link note cur-page-note)])


(defn get-cur-page-note
  [possible-notes]
  (let [url (.. js/window -location -pathname)]
    (first (filter #(= (path->url (:path %)) url) possible-notes))))

   
(defn make-subtree
  [notes-by-category cur-page]
  (into [:ul]
        (reduce concat
          (for [[category subtree] (sort-by #(let [k (first %)]
                                               (if (string? k) k (name k)))
                                            notes-by-category)]
            (if (= category :notes)
              (into [] (for [note subtree] (note-to-li note cur-page)))
              [[:li {:key category}
                [:details {:id   category
                           :open (or
                                   ; Expand all menus for the current page.
                                   (contains? (:categories cur-page) category)
                                   ; Expand all menus if there are few enough
                                   ; items
                                   (> 5
                                      (count (reduce concat
                                               (vals notes-by-category)))))}
                 [:summary [:strong (capitalize category)]]
                 (make-subtree subtree cur-page)]]])))))


(defn overlap?
  [set1 set2]
  (not (empty? (intersection set1 set2))))


(defn get-notes-for-categories
  [notes selected-categories]
  (if (= 0 (count selected-categories))
    (set notes)
    (set (filter ; #(overlap? selected-categories (:categories %))
           #(subset? selected-categories (:categories %))
           notes))))

(defn notes-by-category-to-children-tree
  "Converts a map produced by get-notes-by-category to a PageTree)
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

(defn index-categories
  [categories num-notes]
  (into {} (for [[i c] (map-indexed vector categories)]
             [c (+ num-notes i)])))


(defn make-category-menu
  [notes selected-categories organization-fn]
  (make-subtree (organization-fn
                 (get-notes-for-categories notes selected-categories))
                (get-cur-page-note notes)))

(defn filter-category-selections
  [notes]
  (into {} (for [category (keys (get-notes-by-category notes))]
              [category (contains? @url-params category)])))

; Every category gets its own place in the top-level menu, meaning that notes   
; with multiple categories will appear in multiple places.)
; (make-category-menu
;   example-notes example-selected-categories get-notes-by-category)

; Every note has a unique spot, as determined by nested categories (based on
; the category's size).
; (make-category-menu
;   example-notes example-selected-categories get-notes-by-largest-category)

(def organization-schemes
  {:directory        get-notes-by-directory
   :most-recently-created
   (fn [notes]
     {:notes (sort-by #(apply min (:modification-unix-timestamps %)) notes)})
   :most-recently-changed
   (fn [notes]
     {:notes (sort-by #(apply max (:modification-unix-timestamps %)) notes)})
   :category         get-notes-by-category
   :largest-category get-notes-by-largest-category})

(defn set-one-to-true
  [ks k-to-true]
  (assoc (into {}
               (for [k ks]
                 [k false]))
    k-to-true true))
  
(defn organization-radios
  [organization-scheme]
  [:div
   "Organize by..."
   (into [:ul]
         (for [[scheme selected] @organization-scheme]
           [:li {:key scheme}
            [:input {:type      "radio"
                     :name      "organization-scheme"
                     :checked   selected
                     :on-change (fn [_]
                                  (reset! organization-scheme
                                    (set-one-to-true (keys
                                                       organization-schemes)
                                                     scheme)))}]
            scheme]))])

(defn ^:export make-index-menu
  ; {:malli/schema [:=> [:cat [:sequential Note] ReagentComponent]]}
  [notes]
  (let [category-selections (r/atom (get-url-param-selections
                                      (set (keys (filter-category-selections
                                                   notes)))
                                      url-params))
        organization-scheme (r/atom (set-one-to-true (keys
                                                       organization-schemes)
                                                     :most-recently-changed))]
    (fn [] [:div
            [:div
             [dropdown-check-list category-selections "Select Categories"]]
            [organization-radios organization-scheme]
            (let [selected-organization-scheme
                  (first (for [[scheme selected?] @organization-scheme
                               :when selected?]
                           scheme))]
              (make-category-menu notes
                                  (get-selected-vars @category-selections)
                                  (selected-organization-scheme
                                    organization-schemes)))])))


(defn ^:export random-page
  [notes]
  (fn []
    (let [note (rand-nth notes)]
      [:p "Random Page: " (note->link note nil)
       [:span {:style {:font-size "70%"}}
        " (" (join ", " (:categories note)) ")"]])))
