(ns website-helpers.recent-posts
  (:require [website-helpers.global :as global]
            [website-helpers.hyperlink-lists :refer [markdown-path-to-url]]
            [website-helpers.notes
             :refer
             [organization-schemes timestamp->day last-modification-time]]
            [clojure.string :as s]))

(defn collapsed-post
  "A post title with the first few lines.  Links to the actual post."
  [{:keys [title path markdown categories] :as note}]
  (let [paragraphs         (s/split (or markdown "") #"\n\n")
        first-p-of-content (first (remove #(or (s/starts-with? % "---")
                                               (s/starts-with? % "#"))
                                    paragraphs))]
    (if (s/blank? (first paragraphs))
      [:div "Empty page"]
      [:div
       [:div {:style {:display         "flex"
                      :justify-content "space-between"
                      :align-items     "baseline"}}
        [:span [:h2 {:style {:margin "0"}} title]]
        [:span (timestamp->day (last-modification-time note))]]
       [:p {:style {:margin "0"}}
        [:sub [:i (s/join ", " categories)]]]
       [:p
        first-p-of-content
        "  "
        [:a {:href (markdown-path-to-url path)}
         "..."]]])))

(defn take-all-when-nil
  [n coll]
  (if (nil? n)
    coll
    (take n coll)))

(defn recent-posts
  [n notes]
  (fn []
    (into [:div
           (->> notes
                (sort-by last-modification-time)
                (reverse)
                (take-all-when-nil n)
                (mapv collapsed-post))])))

(defn ^:export all-posts
  []
  (recent-posts nil @global/notes))

(defn ^:export most-recent-posts
  [n]
  (recent-posts n @global/notes))
