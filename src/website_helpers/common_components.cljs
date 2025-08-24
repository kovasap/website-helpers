(ns website-helpers.common-components
  (:require
    [website-helpers.schemas :refer [ReagentComponent]]
    [website-helpers.global :as global]
    [reagent.core :as r]))


(def input-style
  {:margin-right "7px"
   :background-color "white"})

(defn dropdown-select-list
  {:malli/schema [:=>
                  [:cat
                   :any ; Actually an atom containing [:map-of [:or
                        ; :string :keyword]
                        ; :boolean]
                   :string
                   [:=> [:cat] :nil]
                   :string]
                  ReagentComponent]}
  [vars title on-change input-type]
  (let [opened (r/atom false)]
    (fn [] [:div {:id       "tag-list"
                  :class    ["dropdown-check-list" (if @opened "visible" nil)]
                  :style    {:overflow "auto" :max-height "200px"}
                  :tabIndex "100"}
            [:span {:class "anchor" :on-click #(reset! opened (not @opened))}
             title]
            (into [:ul {:class "items"}]
                  (for [[k v] (sort-by (fn [[k _v]] k) @vars)]
                    [:li {:key k}
                     [:input {:type      input-type
                              :style     input-style
                              :checked   (if v "checked" "")
                              :on-change (fn [_] (on-change k v))}]
                     k]))])))
