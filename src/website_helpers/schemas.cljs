(ns website-helpers.schemas)

(def Hiccup [:vector :any])
(def ReagentComponent [:or [:=> [:cat :any] Hiccup]
                           Hiccup])


