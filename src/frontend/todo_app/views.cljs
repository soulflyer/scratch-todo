(ns todo-app.views
  (:require
    [re-frame.core :as re-frame]
    [todo-app.events :as events]
    [re-frame.db :refer [app-db]]
    [todo-app.subs :as subs]))

(defn main-panel []
  (re-frame/dispatch [::events/fetch-todos!])
  (let [todos (re-frame/subscribe [::subs/todos])]
    [:div
     [:ul (map (partial vector :li)
               @todos)]]))

(comment
  (println @app-db))
