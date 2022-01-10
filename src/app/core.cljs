(ns app.core
  (:require
   [app.submodule :as submodule]
   [goog.string :as gstring]
   [reagent.core :as r]
   [reagent.dom :as d]))


(defn home-page []
  (fn [] [:div [:h2 "My App"]
          [:div]]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
