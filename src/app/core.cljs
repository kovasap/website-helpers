(ns app.core
  (:require
   [spec-tools.data-spec :as ds]
   [ghostwheel.core :as g :refer [>defn >defn- >fdef => | <- ?]]
   [clojure.test.check.generators :as gen]
   [cljs.spec.alpha :as s]
   [reagent.core :as r]
   [clojure.set :refer [union]]
   [reagent.dom :as d]))

(+ 2 3)

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

(def example-sample (gen/generate (s/gen ::sample)))

(identity example-sample)

(get-unique-metric-keys [example-sample])

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
      (first (:samples run)))))
  ; (->
  ;   run
  ;   :samples
  ;   :values
  ;   count))


(gen/generate (s/gen ::run))

(get-num-metrics
  {:key 13715898,
   :samples
   [{:key 887,
     :timestamp 28322386,
     :values
     [{:metric-key "U7", :value 27.5201416015625}
      {:metric-key "4T", :value 0.005859375}
      {:metric-key "NK", :value -341.4375}
      {:metric-key "X4", :value -3.8235781118273735}
      {:metric-key "J7", :value 2.75}
      {:metric-key "XA", :value -0.10807444108650088}
      {:metric-key "ZK", :value -0.08721224777400494}
      {:metric-key "mH", :value -0.055554993683472276}]}
    {:key -334230,
     :timestamp 721,
     :values
     [{:metric-key "U7", :value 12}
      {:metric-key "4T", :value -74.36975002288818}
      {:metric-key "NK", :value -83.7981185913086}
      {:metric-key "X4", :value 44}
      {:metric-key "J7", :value -15}
      {:metric-key "XA", :value -0.022010681335814297}
      {:metric-key "ZK", :value -79.598876953125}
      {:metric-key "mH", :value 405.9689917564392}]}]})
  


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
