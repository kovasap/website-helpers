(ns website-helpers.common-components
  (:require
    [website-helpers.schemas :refer [ReagentComponent]]
    [reagent.core :as r]))

(defn sync-url-params!
  {:malli/schema [:=> [:cat [:map-of :string :boolean]] :nil]}
  [vars]
  (let [url (js/URL. (. js/window -location))]
    (doseq [[var value] vars]
      (if value
        (.. url -searchParams (set var value))
        (.. url -searchParams (delete var)))
      (.. js/window -history (pushState nil "" (.toString url))))))

(defn dropdown-check-list
  {:malli/schema [:=> [:cat
                       :any ; Actually an atom containing [:map-of :string :boolean]
                       :string]
                  ReagentComponent]}
  [vars title]
  (let [opened (r/atom false)]
    (fn []
      [:div {:id "tag-list"
             :class ["dropdown-check-list" (if @opened "visible" nil)]
             :style {:overflow "auto"
                     :max-height "200px"}
             :tabIndex "100"}
       [:span {:class "anchor" :on-click #(reset! opened (not @opened))}
        title]
       (into [:ul {:class "items"}]
             (for [var (sort (keys @vars))]
               [:li {:key var}
                [:input {:type "checkbox"
                         :checked (if (get @vars var) "checked" "")
                         :on-change (fn [_]
                                      (swap! vars assoc var
                                             (not (get @vars var)))
                                      (sync-url-params! @vars))}]
                var]))])))


