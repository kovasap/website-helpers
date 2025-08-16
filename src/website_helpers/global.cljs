(ns website-helpers.global
  (:require 
    [reagent.core :as r]
    [clojure.set :refer [union]]
    [website-helpers.test-data]
    [website-helpers.utils :refer [get-url-param-selections]]))

(def show-unselected-nodes-in-graph? (r/atom true))
; whenever this is updated, the page graph will be redrawn
(def graph-update-num (r/atom 0))
(def url-params (r/atom {}))
(def notes (r/atom website-helpers.test-data/notes))

(defn get-all-note-categories
  [notes]
  (reduce union (map :categories notes)))

; Map of string to boolean
(def category-selections
  (r/atom {}))

(defn sync-category-selections!
  []
  ; manually for the graph to update when new categories are selected.
  (swap! graph-update-num inc)
  (reset! category-selections (get-url-param-selections
                                (get-all-note-categories @notes)
                                url-params)))

(defn ^:export set-global-notes
  [new-notes]
  (reset! notes new-notes)
  (sync-category-selections!))
