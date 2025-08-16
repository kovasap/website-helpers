(ns website-helpers.hyperlink-lists
  (:require [clojure.string :refer [replace]]
            [website-helpers.global :as global]
            [reagent.dom :as d]))

; TODO make these not just pull from the sections, but actually make the html so
; that we get working links


(defn markdown-path-to-html-link
  [path]
  [:a {:href (-> path
                 (replace "content/" "/")
                 (replace ".md" "/"))}
    path])

(defn category-link
  [category]
  [:a {:href (str "/?" (replace category " " "-") "=true")}
   category])

(defn link-list
  [title links link-fn]
  [:div
   [:h3 (str title ": ")]
   [:br]
   (if (nil? links)
     ""
     (into [:ul]
           (for [link links]
             [:li (link-fn link)])))])

(defn ^:export categories-and-backlinks
  "current-page-path is a string like docs/visual-art/generative-art.md"
  ([current-page-path]
   (categories-and-backlinks @global/notes current-page-path))
  ([notes current-page-path]
   (fn [notes current-page-path]
     (let [current-note (first (filter #(= (:path %)
                                           (str "content/" current-page-path))
                                 notes))]
       [:div
        (link-list "Backlinks"
                   (:backlinks current-note)
                   markdown-path-to-html-link)
        [:br]
        (link-list "Categories" (:categories current-note) category-link)]))))
