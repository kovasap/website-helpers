(ns app.core
  (:require
   [reagent.core :as r]
   [reagent.dom :as d]
   [malli.core :as m]
   [malli.instrument.cljs]
   [malli.dev.cljs]
   [malli.dev.pretty :as pretty]))


(def Hiccup [:vector :any])

(defn list-to-hiccup
  "Converts a list of string to hiccup."
  {:malli/schema [:=> [:cat [:sequential :string]
                       Hiccup]]}
  [list]
  [:ul
   (for [item list]
     [:li {:key item} item])])


(def data ["first" "second" "third"])

(defn home-page []
  (fn []
    [:div [:h2 "My App"]
     [:div "hello world!"]
     (list-to-hiccup data)]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:dev/after-load refresh []
  (prn "Hot code Remount")
  ; Check all malli function "specs"
  ; TODO use the dev namespace once the PR referenced in
  ; https://github.com/metosin/malli/issues/654#issuecomment-1065650984 is
  ; merged.
  ; (dev/start! {:report (pretty/reporter)})
  (malli.dev.cljs/collect-all!)
  (malli.instrument.cljs/instrument!)
  (mount-root))

(defn ^:export init! []
  (malli.dev.cljs/collect-all!)
  (malli.instrument.cljs/instrument!)
  (mount-root))
