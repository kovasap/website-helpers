(ns website-helpers.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [malli.core :as m]
   [malli.instrument.cljs]
   [malli.dev.cljs]
   [malli.dev.pretty :as pretty]))


(def Hiccup [:vector :any])

(defn ^:export to-js
  "Useful for debugging when trying to call functions in this file from js."
  [thing]
  (clj->js thing))

(defn ^:export render-to-element
  [component element-id]
  (d/render component (.getElementById js/document element-id)))

(defn ^:export list-to-hiccup
  "Converts a list of string to hiccup."
  {:malli/schema [:=> [:cat [:sequential :string]] Hiccup]}
  [list]
  [:ul
   (for [item list]
     [:li {:key item} item])])
; (meta #'list-to-hiccup)


(def Item :string)
(def MappedData [:map-of [Item [:vector Item]]])
(def Details "A more detailed description of a specific item." :string)
(def ItemDetails [:map-of [Item Details]])


(defn ^:export aggregated-items
  "Example:
  
  ```
  Recipe 1:
   - Ingredient 1
   - Ingredient 2

  Recipe 2:
   - Ingredient 2
   - Ingredient 3
   ...
  ...
  ```

  Swaps to

  ```
  Ingredient 1:
   - Recipe 1
   - Recipe 3

  Ingredient 2:
   - Recipe 1
   - Recipe 2
   ...
  ...
  ```

  when clicking the 'swap' button."
  {:malli/schema [:=> [:cat MappedData ItemDetails] Hiccup]}
  [mapped-data details])


(def Markdown :string)

(def example-markdown 
  "My Experience (details about this experience)
    - Mood 1 (details about this mood)
    - Mood 2
  ")

(defn ^:export markdown-to-mapped-data
  {:malli/schema [:=> [:cat Markdown] MappedData]}
  [markdown])

(defn ^:export markdown-to-details
  {:malli/schema [:=> [:cat Markdown] ItemDetails]}
  [markdown])


(defn ^:export make-aggregated-items
  {:malli/schema [:=> [:cat Markdown] Hiccup]}
  [markdown]
  (aggregated-items (markdown-to-mapped-data markdown)
                    (markdown-to-details markdown)))
  

(def ^:export data ["first" "second" "third"])

(defn home-page []
  (fn []
    [:div [:h2 "My App"]
     [:div "hello world!"]
     (list-to-hiccup data)
     (make-aggregated-items example-markdown)]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:dev/after-load refresh []
  (prn "Hot code Remount")
  ; Check all malli function "specs"
  ; Uncomment when https://github.com/metosin/malli/issues/675 is fixed
  ; (malli.dev.cljs/start!) ; {:report (pretty/reporter)})
  (malli.dev.cljs/collect-all!)
  (malli.instrument.cljs/instrument!)
  (mount-root))

(defn ^:export init! []
  ; Check all malli function "specs"
  ; Uncomment when https://github.com/metosin/malli/issues/675 is fixed
  ; (malli.dev.cljs/start!) ; 
  (malli.dev.cljs/collect-all!)
  (malli.instrument.cljs/instrument!)
  (mount-root))
