(ns website-helpers.core
  (:require
    [website-helpers.filterable-items :refer [make-aggregated-items
                                              example-experiences]]
    [website-helpers.page-graph :refer [page-graph-from-notes]]
    ; note that we need to include everything here even if we aren't directly
    ; using it so that cljs includes it in the final build
    [website-helpers.graph]
    [website-helpers.global]
    [website-helpers.hyperlink-lists :refer [categories-and-backlinks]]
    [website-helpers.notes :as n]
    [website-helpers.utils :refer [my-md->hiccup]]
    [website-helpers.schemas :refer [Hiccup ReagentComponent]]
    [cljs.reader]
    [clojure.string :refer [split replace join includes? capitalize]]
    [clojure.set :refer [union intersection subset?]]
    [clojure.walk :refer [postwalk]]
    [reagent.dom :as d]
    [reagent.core :as r]
    [malli.dev.cljs :as dev]
    [malli.dev.pretty :as pretty]))


(prn "Loaded website helpers!")

(defn ^:export to-js
  "Useful for debugging when trying to call functions in this file from js."
  [thing]
  (clj->js thing))

(defn ^:export read-edn-string
  [string]
  (let [unescaped-str (-> string
                          (replace "&#34;" "\"")
                          (replace "&#39;" "'"))]
    (cljs.reader/read-string unescaped-str)))

; (read-edn-string "\n\n[[&#34;Comparing prices&#34;\n  &#34;When buying a good or service, comparing many alternatives to find the\n  best price. For example, looking at the price per pound of various grocery\n  items and picking the one with the lowest price.&#34;\n  [&#34;habit&#34;]\n  [[&#34;Saves some money&#34;\n    &#34;&#34;\n    [&#34;positive&#34;]]\n   [&#34;Optimization problem&#34;\n    &#34;Involves constantly scanning many options and determining the best one.&#34;\n    [&#34;engaging&#34;]]]]\n [&#34;Slipways&#34;\n  &#34;A video game about colonizing planets and connecting them with trade\n  routes.&#34;\n  [&#34;game&#34; &#34;solitary&#34;]\n  [[&#34;Optimization problem&#34;]]]]\n\n\n")

; Components passed to this function must be defined as nested functions (type
; 2 components I think).  They cannot just be raw hiccup.
(defn ^:export render-to-element
  [component element-id]
  (d/render [component] (.getElementById js/document element-id)))

; Done in joker, so not necessary to do here currently.
; (defn ^:export make-all-notes-page
;   [notes]
;   (into [:div [:h1 "All Notes"]]
;         (for [note notes]
;           [:div {:key (:path note)}
;            (md->hiccup (:markdown note))])))

; Only visible when building this repo, useful for testing
(defn home-page []
  (fn []
    [:div
      [:p "hi"]
      [page-graph-from-notes]
      [n/random-page]
      [categories-and-backlinks "docs/visual-art/generative-art.md"]
      [n/make-index-menu]]))
      ; [make-aggregated-items example-experiences]]))

;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:dev/after-load refresh []
  (prn "Hot code Remount")
  (dev/start! {:report (pretty/reporter)})
  (mount-root))

(defn ^:export init! []
  (dev/start! {:report (pretty/reporter)})
  (mount-root))
