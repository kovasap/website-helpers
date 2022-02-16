(ns app.core
  (:require
   [spec-tools.data-spec :as ds]
   [clojure.test.check.generators]
   [ghostwheel.core :as g :refer [>defn >defn- >fdef => | <- ?]]
   [cljs.spec.gen.alpha :as gen]
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [clojure.set :refer [union]]
   [reagent.dom :as d]))


(s/def ::key int?)

(s/def ::timestamp (s/and int? pos?))

(s/def ::metric-key
  (s/with-gen
    (s/and string?
           #(< (count %) 3))
    (fn [] (gen/fmap #(subs % 0 2)
                     (gen/string-alphanumeric)))))

(def sample
  "A single sample containing values for zero or more metrics."
  (ds/spec ::sample
    {:key ::key
     :timestamp ::timestamp
     :values [{:metric-key ::metric-key
               :value float?}]}))
(s/def ::sample sample)

(>defn get-unique-metric-keys
  [samples]
  [(s/coll-of ::sample) => (s/coll-of ::metric-key)]
  (reduce union
          (into #{} (map #(map :metric-key (:values %))
                         samples))))

(def run
  "A single sample containing values for one or more metrics."
  (ds/spec ::run
    {:key ::key
     :samples (s/with-gen
                (s/and (s/coll-of ::sample)
                       (fn [samples]
                         (= 1 (count (get-unique-metric-keys samples))))) 
                (fn [] 
                  (let [num-metrics (gen/generate gen/small-integer)
                        metric-keys (s/gen (gen/sample (gen/set ::metric-key)
                                                       num-metrics))]
                    (gen/vector (gen/hash-map
                                  {:key (s/gen ::key)
                                   :timestamp (s/gen ::timestamp)
                                   :values (gen/vector-distinct
                                             (gen/hash-map
                                               :metric-key metric-keys
                                               :value (s/gen float?))
                                             num-metrics)})))))}))
(s/def ::run run)


(>defn get-num-metrics
  "Returns the number of metrics in the given run."
  [run]
  [::run => int?]
  (count
    (:values
      (:samples
        run))))
  ; (->
  ;   run
  ;   :samples
  ;   :values
  ;   count))


(def gened-run (gen/generate (s/gen ::run)))

(get-num-metrics gened-run)
  


(defn home-page []
  (fn []
    [:div [:h2 "My App"]
     [:div "hello world!"]]))


;; -------------------------
;; Initialize app

(defn mount-root []
  (d/render [home-page] (.getElementById js/document "app")))

(defn ^:export init! []
  (mount-root))
