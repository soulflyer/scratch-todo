(defproject todo-app "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :min-lein-version "2.0.0"
  :dependencies [[org.clojure/clojure "1.10.3"]
                 [com.flexiana/framework "0.3.2"]
                 [thheller/shadow-cljs "2.11.26"]
                 [migratus "1.3.5"]
                 [clj-http "3.12.1"]
                 [org.clojure/tools.namespace "1.1.0"]
                 [reagent "0.10.0"]
                 [re-frame "1.1.2"]
                 [cljs-ajax "0.8.4"]
                 [day8.re-frame/http-fx "0.2.3"]
                 [com.fzakaria/slf4j-timbre "0.3.21"]]
  :plugins [[lein-shadow "0.3.1"]]
  :main ^:skip-aot todo-app.core
  :uberjar-name "todo-app.jar"
  :source-paths ["src/backend" "src/frontend" "src/shared"]
  :clean-targets ^{:protect false} ["resources/public/assets/js/compiled" "target"]
  :profiles {:dev   {:resource-paths ["dev" "config/dev"]
                     :dependencies   [[binaryage/devtools "1.0.3"]]}
             :local {:resource-paths ["config/local"]}
             :prod  {:resource-paths ["config/prod"]}
             :test  {:resource-paths ["config/test"]
                     :dependencies   [[kerodon "0.9.1"]]}}
  :shadow-cljs {:nrepl  {:port 8777}
                :builds {:app {:target     :browser
                               :output-dir "resources/public/assets/js/compiled"
                               :asset-path "assets/js/compiled"
                               :modules    {:app {:init-fn todo-app.core/init
                                                  :preloads [devtools.preload]}}}}}
  :aliases {"ci"      ["do" "clean," "cloverage," "lint," "uberjar"]
            "kondo"   ["run" "-m" "clj-kondo.main" "--lint" "src" "test"]
            "lint"    ["do" "kondo," "eastwood," "kibit"]
            "migrate" ["run" "-m" "framework.db.main"]
            "watch"   ["with-profile" "dev" "do"
                       ["shadow" "watch" "app" "browser-test" "karma-test"]]
            "release" ["with-profile" "prod" "do"
                       ["shadow" "release" "app"]]})
