(ns website-helpers.hyperlink-lists)

; TODO make these not just pull from the sections, but actually make the html so
; that we get working links

(defn backlinks-list
  [note]
  [:div (:backlinks-section note)])

(defn categories-list
  [note]
  [:div (:categories-section note)])
