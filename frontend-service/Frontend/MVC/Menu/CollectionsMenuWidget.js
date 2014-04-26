module.exports = new Service.ClientScript(
    function (MenuElementWidget, Mongo) {
        function CollectionsMenuWidget(parentDom, parentWidget, workAreaView) {

            MenuElementWidget.call(this, 'Collections', parentDom, parentWidget);

            this.run = function () {

            };

            this.polling = function() {
                Mongo.getInstance().collections(
                    parentWidget.getCurrentDB(),
                    function (resp) {
                        workAreaView.innerHTML = (resp);
                    }
                );
            };

            this.setEvent(
                "onclick",
                this.polling.bind(this)
            );
        }

        CollectionsMenuWidget.prototype             = MenuElementWidget.prototype;
        CollectionsMenuWidget.prototype.constructor = CollectionsMenuWidget;

        return CollectionsMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.CollectionsMenuWidget",
    "dep"  : ["Frontend.MVC.Menu.MenuElementWidget", "Frontend.MVC.Model.MongoModel"]
}).dep("Service.Frontend.MVC.Menu.MenuElementWidget", "Service.Frontend.MVC.Model.MongoModel");