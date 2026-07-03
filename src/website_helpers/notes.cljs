(ns website-helpers.notes
  (:require
    [website-helpers.common-components
     :refer
     [input-style dropdown-select-list]]
    [website-helpers.utils :refer [get-selected-vars]]
    [website-helpers.global :as global]
    [clojure.set :refer [union difference intersection subset?]]
    [clojure.string :refer [capitalize replace replace-first join]]
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

; ---------- Category Selection ---------------------------------------

(defn sync-url-params!
  {:malli/schema [:=> [:cat [:map-of :string :boolean]] :nil]}
  [vars]
  (let [url (js/URL. (. js/window -location))]
    (doseq [[var value] vars]
      (if value
        (.. url -searchParams (set var value))
        (.. url -searchParams (delete var)))
      (.. js/window -history (pushState nil "" (.toString url))))))

(defn select-category!
  [category currently-selected?]
  (prn "setting " category " to " currently-selected?)
  (swap! global/category-selections assoc category (not currently-selected?))
  (sync-url-params! @global/category-selections)
  (global/sync-category-selections!))

(defn toggle-category!
  [category]
  (prn "toggling " category)
  (swap! global/category-selections update category not)
  (sync-url-params! @global/category-selections)
  (global/sync-category-selections!))

; ---------- Organizing Notes ----------------------------------------

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
     {:notes (sort-by :name notes)}
     (let [[largest-category largest-notes]
           (get-largest-category notes categories-to-ignore)
           other-notes (difference notes largest-notes)]
       ; I don't really understand why this if works
       (if (nil? largest-notes)
         {:notes (sort-by :name notes)}
         (merge
           {largest-category (get-notes-by-largest-category
                               largest-notes (conj categories-to-ignore
                                                   largest-category))}
           (get-notes-by-largest-category other-notes categories-to-ignore)))))))

; Not a recursively nested grouping like some of the others
(defn get-notes-by-fn
  [notes f]
  (update-vals (group-by f notes) (fn [v] {:notes v})))

(defn creation-time
  [note]
  (apply min (:modification-unix-timestamps note)))

(defn timestamp->month
  [timestamp]
  (.toLocaleString (js/Date. (* timestamp 1000))
                   "en-US"
                   #js {:month "long" :year "numeric"}))

(defn timestamp->day
  [timestamp]
  (.toLocaleString (js/Date. (* timestamp 1000))
                   "en-US"
                   #js {:month "long" :year "numeric" :day "numeric"}))
  
(defn month-name-to-index [month-name]
  (case month-name
    "January" 0
    "February" 1
    "March" 2
    "April" 3
    "May" 4
    "June" 5
    "July" 6
    "August" 7
    "September" 8
    "October" 9
    "November" 10
    "December" 11
    nil))

(defn month->timestamp [date-string]
  (let [[month-name year-str] (clojure.string/split date-string #" ")
        year (js/parseInt year-str)
        month-index (month-name-to-index month-name)]
    (if (and month-index year)
      (let [js-date (new js/Date year month-index 1)]
        ;; Convert milliseconds to seconds and floor to ensure it's an integer
        (js/Math.floor (/ (.getTime js-date) 1000)))
      nil)))

(defn last-modification-time
  [note]
  (apply max (:modification-unix-timestamps note)))

(def organization-schemes
  {:directory        get-notes-by-directory
   :most-recently-created
   (fn [notes] (get-notes-by-fn notes (comp timestamp->month creation-time)))
   :most-recently-changed
   (fn [notes]
     (get-notes-by-fn notes (comp timestamp->month last-modification-time)))
   :category         get-notes-by-category
   :largest-category get-notes-by-largest-category})

; ------------- Constucting nested HTML list ---------------------------

(defn path->url
  [path]
  (-> path
      (replace-first "content" "")
      (replace #".md" "/")))


(defn note->link
  [note cur-page-note {:keys [recently-created-notes recently-modified-notes]}]
  [:a
   (let [attrs {:href (path->url (:path note))}]
     (if (= cur-page-note note)
       (assoc attrs :style {:font-style "italic"})
       attrs))
   (:title note)
   " "
   (if (contains? recently-created-notes note) "+" "")
   (if (contains? recently-modified-notes note) "*" "")])

(defn note-to-li
  [note cur-page-note recentcy-data]
  [:li {:key (:path note)}
   (note->link note cur-page-note recentcy-data)])


(defn get-cur-page-note
  [possible-notes]
  (let [url (.. js/window -location -pathname)]
    (first (filter #(= (path->url (:path %)) url) possible-notes))))


(defn make-nested-note-html
  [notes-by-category
   cur-page
   {:keys [categories-with-recently-modified-notes
           categories-with-recently-created-notes]
    :as   recentcy-data}]
  (into
    [:ul]
    (reduce concat
      (for [[category subtree] (sort-by #(let [k (first %)]
                                           (cond (not (nil? (month->timestamp
                                                              k)))
                                                 (- (month->timestamp k))
                                                 (string? k) k
                                                 (int? k) (- k)
                                                 (keyword? k) (name k)
                                                 (nil? k) (- 1000)
                                                 :else (doto k prn)))
                                        notes-by-category)]
        (if (= category :notes)
          (into []
                (for [note subtree]
                  (note-to-li note cur-page recentcy-data)))
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
             [:summary
              [:strong
               (capitalize category)
               " "
               (if (contains? categories-with-recently-created-notes category)
                 "+"
                 "")
               (if (contains? categories-with-recently-modified-notes category)
                 "*"
                 "")]]
             (make-nested-note-html subtree cur-page recentcy-data)]]])))))

; -------------------------- Recency Logic --------------------------------

(defn in? 
  "true if coll contains elm"
  [coll elm]  
  (some #(= elm %) coll))

(defn get-recently-created-notes
  [notes num-recently-created-notes-to-highlight]
  (set (take num-recently-created-notes-to-highlight
             (reverse (sort-by creation-time notes)))))

(defn get-categories-with-recently-created-notes
  [notes num-recently-created-notes-to-highlight]
  (apply union
    (map :categories
      (get-recently-created-notes notes
                                  num-recently-created-notes-to-highlight))))
    

(defn get-recently-modified-notes
  [notes
   num-recently-modified-notes-to-highlight
   num-recently-created-notes-to-highlight]
  (let [recently-created-notes (get-recently-created-notes
                                 notes
                                 num-recently-created-notes-to-highlight)]
    (set (take num-recently-modified-notes-to-highlight
               (reverse (sort-by last-modification-time
                                 (remove #(in? recently-created-notes %)
                                   notes)))))))

(defn get-categories-with-recently-modified-notes
  [notes
   num-recently-modified-notes-to-highlight
   num-recently-created-notes-to-highlight]
  (apply union
    (map :categories
      (get-recently-modified-notes notes
                                   num-recently-modified-notes-to-highlight
                                   num-recently-created-notes-to-highlight))))

(defn get-recentcy-data
  [notes
   num-recently-modified-notes-to-highlight
   num-recently-created-notes-to-highlight]
  {:recently-modified-notes (get-recently-modified-notes
                              notes
                              num-recently-modified-notes-to-highlight
                              num-recently-created-notes-to-highlight)
   :recently-created-notes
   (get-recently-created-notes notes num-recently-created-notes-to-highlight)
   :categories-with-recently-created-notes
   (get-categories-with-recently-created-notes
     notes
     num-recently-created-notes-to-highlight)
   :categories-with-recently-modified-notes
   (get-categories-with-recently-modified-notes
     notes
     num-recently-modified-notes-to-highlight
     num-recently-created-notes-to-highlight)})

; -------------------------------------------------------------------------

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

(defn make-nested-note-list
  [notes
   selected-categories
   organization-fn
   num-recently-modified-notes-to-highlight
   num-recently-created-notes-to-highlight]
  (make-nested-note-html
    (organization-fn (get-notes-for-categories notes selected-categories))
    (get-cur-page-note notes)
    (get-recentcy-data notes
                       num-recently-modified-notes-to-highlight
                       num-recently-created-notes-to-highlight)))

; Every category gets its own place in the top-level menu, meaning that notes   
; with multiple categories will appear in multiple places.)
; (make-nested-note-list
;   example-notes example-selected-categories get-notes-by-category)

; Every note has a unique spot, as determined by nested categories (based on
; the category's size).
; (make-nested-note-list
;   example-notes example-selected-categories get-notes-by-largest-category)

(defn set-one-to-true
  [ks k-to-true]
  (assoc (into {}
               (for [k ks]
                 [k false]))
    k-to-true true))

(defn most-recent-lists
  [notes cur-page-note]
  (let [recently-created-notes (take 5
                                     (reverse (sort-by creation-time notes)))]
    [:div
     [:strong "Most recently created:"]
     (into [:ul]
           (map #(note-to-li % cur-page-note {}) recently-created-notes))
     [:strong "Most recently modified:"]
     (into [:ul]
           (map #(note-to-li % cur-page-note {})
             (take 5
                   (reverse (sort-by last-modification-time
                                     (remove #(in? recently-created-notes %)
                                       notes))))))]))

(defn ^:export make-index-menu
  ; {:malli/schema [:=> [:cat [:sequential Note] ReagentComponent]]}
  []
  (let [organization-scheme (r/atom (set-one-to-true (keys
                                                       organization-schemes)
                                                     :largest-category))]
    (fn []
      (let [notes         @global/notes
            cur-page-note (get-cur-page-note notes)]
        [:div
         ; (most-recent-lists notes cur-page-note)
         [:div
          [dropdown-select-list
           global/category-selections
           "Select Categories"
           select-category!
           "checkbox"]]
         (let [selected-organization-scheme (first (for [[scheme selected?]
                                                         @organization-scheme
                                                         :when selected?]
                                                     scheme))]
           (make-nested-note-list
             notes
             (get-selected-vars @global/category-selections)
             (selected-organization-scheme organization-schemes)
             @global/num-recently-modified-notes-to-highlight
             @global/num-recently-created-notes-to-highlight))
         [:div
          [dropdown-select-list
           organization-scheme
           ; Title of dropdown is selected value
           (str "Organize by "
                (name (some (fn [[k v]] (if v k nil)) @organization-scheme)))
           (fn [k _v]
             (reset! organization-scheme (set-one-to-true
                                           (keys organization-schemes)
                                           k)))
           "radio"]]
         [:div
          [:input {:type      "checkbox"
                   :name      "show-unselected-nodes-in-graph"
                   :style     input-style
                   :checked   @global/show-unselected-nodes-in-graph?
                   :on-change (fn [_]
                                (swap! global/graph-update-num inc)
                                (swap! global/show-unselected-nodes-in-graph?
                                  not))}]
          "Show unselected pages in graph?"]
         [:div
          [:input {:type      "checkbox"
                   :name      "include-home-node-in-graph"
                   :style     input-style
                   :checked   @global/include-home-node-in-graph?
                   :on-change (fn [_]
                                (swap! global/graph-update-num inc)
                                (swap! global/include-home-node-in-graph?
                                  not))}]
          "Include home node in graph?"]
         [:div
          "Number of recently modified pages to highlight: "
          [:div
           @global/num-recently-modified-notes-to-highlight
           [:input {:type "range"
                    :min "1"
                    :max "50"
                    :class "slider"
                    :on-change
                    (fn [event]
                      (reset! global/num-recently-modified-notes-to-highlight
                        (js/parseInt (-> event
                                         .-target
                                         .-value))))
                    :value @global/num-recently-modified-notes-to-highlight}]]]
         [:div
          "Number of recently created pages to highlight: "
          [:div
           @global/num-recently-created-notes-to-highlight
           [:input {:type "range"
                    :min "1"
                    :max "50"
                    :class "slider"
                    :on-change
                    (fn [event]
                      (reset! global/num-recently-created-notes-to-highlight
                        (js/parseInt (-> event
                                         .-target
                                         .-value))))
                    :value @global/num-recently-created-notes-to-highlight}]]]
         [:div
          [:small
           [:em
            "Sections/pages with * indicate they contain recent modifications."]]]
         [:div
          [:small
           [:em "Sections/pages with + indicate recent page additions."]]]]))))


(defn ^:export random-page
  ([] (random-page @global/notes))
  ([notes]
   (fn []
     (let [note (rand-nth notes)]
       [:p
        [:strong "Random Page: "]
        (note->link note nil {})
        [:span {:style {:font-size "70%"}}]
        " ("
        (join ", " (:categories note))
        ")"]))))
