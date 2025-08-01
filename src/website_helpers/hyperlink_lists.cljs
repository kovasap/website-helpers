(ns website-helpers.hyperlink-lists)

(defn backlinks-list
  [note]
  [:div (:backlinks-section note)])

(defn categories-list
  [note]
  [:div (:categories-section note)])
