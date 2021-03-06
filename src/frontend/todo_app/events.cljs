(ns todo-app.events
  (:require
    [ajax.core :as ajax]
    [day8.re-frame.http-fx]
    [re-frame.core :as re-frame]
    [re-frame.db :refer [app-db]]
    [todo-app.db :as db]))

(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/reg-event-db
  ::add-todos->db
  (fn [db [_ response]]
    (assoc db :todos response)))

(re-frame/reg-event-db
  ::failure
  (fn [db _]
    (js/console.error "Something is wrong!")
    db))

(re-frame/reg-event-fx
  ::fetch-todos!
  (fn [_ [_]]
    (js/console.info "Fetching todos!")
    {:http-xhrio {:uri "http://localhost:3000/api/todos"
                  :response-format (ajax/json-response-format {:keywords? true})
                  :format (ajax/json-request-format)
                  :on-success [::add-todos->db]
                  :on-failure [::failure]}}))
