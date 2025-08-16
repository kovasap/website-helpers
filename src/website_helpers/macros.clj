(ns website-helpers.macros)

(defmacro seconds-taken
  [description expr]
  `(let [start# (/ (js/Date.now) 1000.0)
         ret#   ~expr]
     (prn (str ~description
               " in "
               (- (/ (js/Date.now) 1000.0) start#)
               " secs"))
     ret#))
