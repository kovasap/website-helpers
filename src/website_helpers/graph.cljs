;; Taken from https://gist.github.com/prook/9e5cc9144d34a991978a2fd31b4ee487
;; and comment thread https://github.com/gadfly361/rid3/issues/10.
;; See documentation at https://github.com/d3/d3-force

(ns website-helpers.graph 
  (:require
   [sablono.core :as sab]
   [sablono.server :as server]
   [clojure.string :refer [replace]]
   [rid3.core :as rid3 :refer [rid3->]]))


(defn html
  "Turns hiccup like syntax into an HTML string."
  [hiccup]
  (server/render-static (sab/html hiccup)))


(defn create-sim
  [viz-state]
  (let [{:keys [width height link-strength charge-strength center-x center-y
                collide-size]}
        @viz-state]
    (doto (js/d3.forceSimulation)
      (.stop)
      (.force "link" (-> (js/d3.forceLink)
                         (.strength link-strength)
                         (.id #(.-index %))))
      (.force "charge" (-> (js/d3.forceManyBody)
                           (.strength charge-strength)))
      (.force "center" (js/d3.forceCenter center-x center-y))
      (.force "collide" (js/d3.forceCollide collide-size))
      (.on "tick" (fn []
                    (when-let [s (:links-sel @viz-state)]
                      (rid3-> s
                              {:x1 #(.. % -source -x)
                               :y1 #(.. % -source -y)
                               :x2 #(.. % -target -x)
                               :y2 #(.. % -target -y)}))
                    (when-let [s (:nodes-sel @viz-state)]
                      (rid3-> s
                              {:transform
                               #(str "translate(" (.-x %) "," (.-y %) ")")
                               :x #(.-x %)
                               :y #(.-y %)})))))))

(defn create-drag
  [sim]
  (-> (js/d3.drag)
      (.on "start" (fn started
                     [event d _]
                     (when (-> event .-active zero?)
                       (-> sim
                           (.alphaTarget 0.3)
                           (.restart)))
                     (set! (.-fx d) (.-x d))
                     (set! (.-fy d) (.-y d))))
      (.on "drag" (fn dragged
                    [event d _]
                    (set! (.-fx d) (.-x event))
                    (set! (.-fy d) (.-y event))))
      (.on "end" (fn ended
                   [event d _]
                   (when (-> event .-active zero?)
                     (-> sim
                         (.alphaTarget 0)))
                   (set! (.-fx d) nil)
                   (set! (.-fy d) nil)))))

(defn merge-nodes
  [orig new id]
  (let [orig-map (into {} (map-indexed (fn [i n] [(id n) i]) orig))]
    (doseq [n new]
      (when-let [old (aget orig (orig-map (id n)))]
        (when-let [x (.-x old)] (set! (.-x n) x))
        (when-let [y (.-y old)] (set! (.-y n) y))
        (when-let [vx (.-vx old)] (set! (.-vx n) vx))
        (when-let [vy (.-vy old)] (set! (.-vy n) vy))
        (when-let [fx (.-fx old)] (set! (.-fx n) fx))
        (when-let [fy (.-fy old)] (set! (.-fy n) fy))))
    new))

(defn update-sim! [sim alpha-target {:keys [links nodes]}]
  (let [old-nodes (.nodes sim)
        new-nodes (merge-nodes old-nodes nodes #(.-name %))]
    (doto sim
      (.nodes new-nodes)
      (-> (.force "link") (.links links))
      (.alpha alpha-target)
      (.restart))))

(defn viz
  [ratom base-link state-override-map]
  ; TODO make this width and height the size of the user's screen by default
  (let [viz-state (atom (merge {:width 2000
                                :height 1500
                                :link-strength 0.08
                                :charge-strength -50
                                :center-x 1000
                                :center-y 750
                                :collide-size 30
                                ; The initial "temperature" of the simulation.
                                :initial-alpha 4
                                :hover-text-sel nil
                                :links-sel nil
                                :nodes-sel nil}
                               state-override-map))
        sim (create-sim viz-state)
        drag (create-drag sim)
        ;; See
        ;; https://github.com/d3/d3-scale-chromatic/blob/main/README.md#api-reference
        ;; for options.
        ;; See https://stackoverflow.com/a/21208204 for custom schemes.
        color (js/d3.scaleOrdinal ["#377eb8" "#4daf4a" "#984ea3" "#ff7f00"]) 
        add-circle (fn [sel]
                     (rid3-> sel
                             (.append "ellipse")
                             {:stroke         "#fff"
                              :stroke-width   1.5
                              :rx             #(* (if (= 1 (.-group %))
                                                    3
                                                    4.5)
                                                  (count (.-name %)))
                              :ry             #(/ (max 25 (.-size %)) 1.8)
                              :fill           #(color (.-group %))
                              :fill-opacity   0.7}))
        add-text (fn [sel]
                   (rid3-> sel
                           (.append "text")
                           {:text-anchor "middle"
                            :font-size #(cond
                                          (= 3 (.-group %)) "small"
                                          (= 4 (.-group %)) "small"
                                          :else "x-small")
                            :font-weight #(if (= 4 (.-group %))
                                            "bold"
                                            "normal")
                            :y 5}
                           (.text #(.-name %))))]
    (fn [ratom]
      [rid3/viz
       {:id     "force-graph"
        :ratom  ratom
        :svg    {:did-mount
                 (fn [svg ratom]
                   (let [{:keys [width height initial-alpha]} @viz-state]
                     (rid3-> svg
                             {:width   width
                              :height  height
                              :viewBox #js [0 0 width height]})
                     (update-sim! sim initial-alpha @ratom)))
                 :did-update
                 (fn [svg ratom]
                   (update-sim! sim 0.5 @ratom))}
        :pieces [{:kind            :elem-with-data
                  :class           "links"
                  :tag             "line"
                  :prepare-dataset (fn [ratom] (:links @ratom))
                  :did-mount
                  (fn [sel _ratom]
                    (swap! viz-state assoc :links-sel sel)
                    (rid3-> sel
                            {:stroke         "#999"
                             :stroke-opacity 0.6
                             :stroke-width   #(-> (.-value %)
                                                  js/Math.sqrt
                                                  (/ 2))}))}
                 {:kind            :elem-with-data
                  :class           "nodes"
                  :tag             "g"
                  :prepare-dataset (fn [ratom] (:nodes @ratom))
                  ; See
                  ; https://github.com/kovasap/reddit-tree/blob/main/src/reddit_tree/graph.cljs
                  ; for more possibilities here.
                  :did-mount (fn [sel _ratom]
                               (swap! viz-state assoc :nodes-sel sel)
                               ; Based on https://stackoverflow.com/a/47401796
                               (add-circle sel)
                               (add-text sel)
                               (rid3-> sel
                                 (.on "dblclick"
                                      (fn [_event node]
                                        (js/window.open
                                          (str base-link
                                               (replace (.-path node)
                                                        #" " "+")))))
                                 (.call drag)))}]}])))

(defn prechew
  [app-state]
  (doall (for [node (:nodes @app-state)]
           (prn (:name node) (:categories node))))
  (-> @app-state
      (update :nodes clj->js)
      (update :links clj->js)))
