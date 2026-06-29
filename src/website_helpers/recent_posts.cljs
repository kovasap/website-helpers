(ns website-helpers.recent-posts
  (:require
    [website-helpers.global :as global]
    [website-helpers.hyperlink-lists :refer [markdown-path-to-html-link]]
    [website-helpers.notes :refer [organization-schemes]]
    [clojure.string :as s]))

(defn collapsed-post
  "A post title with the first few lines.  Links to the actual post."
  [{:keys [name path markdown categories]}]
  (let [paragraphs (s/split markdown #"\n\n")]
    [:div
     [:h2 (s/replace (first paragraphs) "#" "")]
     [:div (s/join ", " categories)]
     [:div (second paragraphs) "..." (markdown-path-to-html-link path)]]))
  

(defn ^:export recent-posts
  ""
  ([]
   (recent-posts @global/notes))
  ([notes]
   (fn []
     (-> ((:most-recently-changed organization-schemes) notes)
         (sort-by ())
         (map ())))))
