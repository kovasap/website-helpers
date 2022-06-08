(ns website-helpers.global
  (:require 
    [website-helpers.utils :refer [get-url-param-selections]]
    [reagent.core :as r]))

(def url-params
   (r/atom (get-url-param-selections))) 
