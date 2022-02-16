(ns app.core
  (:require
   [spec-tools.data-spec :as ds]
   [clojure.test.check.generators]
   [ghostwheel.core :as g :refer [>defn >defn- >fdef => | <- ?]]
   ; [cljs.spec.gen.alpha :as gen]
   [clojure.test.check.generators :as gen]
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [clojure.set :refer [union]]
   [reagent.dom :as d]))


(s/def ::key int?)

(s/def ::timestamp (s/and int? pos?))

(s/def ::metric-key
  (s/with-gen
    (s/and string?
           #(< 0 (count %) 3))
    (fn [] (gen/such-that #(not= % "")
             (gen/fmap #(subs % 0 2)
                       gen/string-alphanumeric)))))

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
  (let [num-gen-metrics (Math/abs (gen/generate gen/small-integer))]
    (ds/spec ::run
      {:key ::key
       :samples (s/with-gen
                  (s/and (s/coll-of ::sample)
                         (fn [samples]
                           (= num-gen-metrics
                              (count (get-unique-metric-keys samples))))) 
                  #(let [metric-keys (gen/generate
                                       (gen/set (s/gen ::metric-key)
                                                {:num-elements
                                                 num-gen-metrics}))
                         values-gen (apply gen/tuple
                                           (repeat (count metric-keys)
                                                   (s/gen float?)))]
                     (gen/vector
                       (gen/hash-map
                         :key (s/gen ::key)
                         :timestamp (s/gen ::timestamp)
                         :values (gen/fmap (fn [vals]
                                            (mapv (fn [k v]
                                                    {:metric-key k :value v})
                                                  metric-keys vals))
                                  values-gen)))))})))
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


(gen/generate (s/gen ::run))

; (get-num-metrics gened-run)
  


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
