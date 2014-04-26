module.exports = new Service.ClientScript(
    function (CommonWidget, CollectionsMenuWidget) {

        function MenuWidget(parentDom, parentWidget, workAreaView) {

            CommonWidget.call(this, parentDom, parentWidget);

            var menus = {
               "collections" : new CollectionsMenuWidget(this.getView().appendNode("li"), this, workAreaView)
            };


            var currentDB = '';

            this.setCurrentDatabase = function (dbName) {
                currentDB = dbName;
                menus.collections.polling();
            };

            this.getCurrentDB = function () {
                return currentDB;
            };


            this.run = function () {
                this.getView().id = "menu";
                this.getView().addStyle(
                        "#menu",
                        {
                            "list-style" : "none"
                        }
                );

                var cls = this.getView().appendNode("div");
                cls.className = "cls";

                for (var i in menus) {
                    menus[i].run();
                }
            };

        }

        MenuWidget.prototype             = CommonWidget.prototype;
        MenuWidget.prototype.constructor = CommonWidget;

        return MenuWidget;
    }
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Menu.CollectionsMenuWidget")
.out({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Menu.CollectionsMenuWidget"]
}).signUp();