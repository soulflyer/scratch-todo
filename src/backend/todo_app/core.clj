(ns todo-app.core
  (:require
    [framework.config.core :as config]
    [framework.db.core :as db]
    [framework.interceptor.core :as interceptors]
    [framework.rbac.core :as rbac]
    [framework.route.core :as routes]
    [framework.session.core :as session]
    [framework.webserver.core :as ws]
    [piotr-yuxuan.closeable-map :refer [closeable-map]]
    [reitit.ring :as ring]
    [todo-app.controllers.index :as index]
    [todo-app.controllers.re-frame :as re-frame]
    [xiana.commons :refer [rename-key]]
    [xiana.core :as xiana]))

(defn view
  [{{db-data :db-data} :response-data :as state}]
  (xiana/ok (assoc state :response {:status 200
                                    :body (mapv :todos/label db-data)})))

(defn fetch
  [state]
  (xiana/ok (assoc state
                   :view view
                   :query {:select [:*] :from [:todos]})))

(def routes
  [["/assets/*" (ring/create-resource-handler {:path "/"})]
   ["/api" {}
    ["/todos" {:action #'fetch}]]
   ["/todos" {:action re-frame/handle-index}]])

(defn ->system
  [app-cfg]
  (-> (config/config app-cfg)
      (rename-key :framework.app/auth :auth)
      routes/reset
      rbac/init
      session/init-in-memory
      db/connect
      db/migrate!
      ws/start
      closeable-map))

(def app-cfg
  {:routes routes
   :router-interceptors     []
   :controller-interceptors [(interceptors/muuntaja)
                             interceptors/params
                             session/guest-session-interceptor
                             interceptors/view
                             interceptors/side-effect
                             db/db-access
                             rbac/interceptor]})

(defn -main
  [& _args]
  (->system app-cfg))
