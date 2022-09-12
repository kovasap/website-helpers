(ns website-helpers.utils
  (:require
    [markdown-to-hiccup.core :refer [md->hiccup component]]
    [clojure.string :refer [split includes? replace]]))

(defn get-selected-vars
  "If no vars are selected, all are!"
  {:malli/schema [:=> [:cat [:map-of :string :boolean]]
                  [:set :string]]}
  [selections]
  (if (every? #(not %) (vals selections))
    (set (keys selections))
    (set (for [[var selected] selections
               :when selected]
           var))))

(defn my-md->hiccup
  [string]
  (into [:span] (rest (rest (last (component (md->hiccup string)))))))

(my-md->hiccup "[Slipways](https://slipways.net/)")

(my-md->hiccup   "This includes watching videos from channels like
  [Veritasium](https://www.youtube.com/user/1veritasium), 
  [CGP Grey](https://www.youtube.com/user/CGPGrey),
  and [Kurzgesagt](https://www.youtube.com/user/Kurzgesagt).")

(defn parse-params
  "Parse URL parameters into a hashmap"
  []
  (let [url (.-location js/window)
        param-strs (-> url (split #"\?") last (split #"\&"))]
    (if (includes? (str url) "?")
      (into {} (for [[k v] (map #(split % #"=") param-strs)]
                 [(replace k #"\+" " ") v]))
      {})))

(defn get-url-param-selections
  {:malli/schema [:=> [:cat [:set :string]] [:map-of :string :boolean]]}
  [vars url-params]
  (reset! url-params (parse-params))
  (into {} (for [var vars]
              [var (contains? @url-params var)])))
