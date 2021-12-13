(ns todo-app.views
  (:require
    [re-frame.core :as re-frame]
    [todo-app.events :as events]
    [todo-app.subs :as subs]))

(defn main-panel []
  (re-frame/dispatch [::events/fetch-todos!])
  (let [todos (re-frame/subscribe [::subs/todos])]
    (println "****************")
    (println @todos)
    [:div
     (map #(identity [:ul (:todo/label %)])
          @todos)]))
