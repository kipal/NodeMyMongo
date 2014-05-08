module.exports = new Service.ClientScript(
    function (BaseBodyWidget, View, MenuWidget, WorkAreaWidget, LeftMenuWidget, IntroWidget) {

        function BodyWidget() {


            this.run = function () {

                this.getView().addStyle(
                    "body", {
                        "background-color" : "#fff"
                    }
                );
                this.getView().addStyle(
                    ".cls",
                    {
                        "clear" : "both"
                    }
                );

                this.getView().addStyle(
                        ".link",
                        {
                            "cursor" : "pointer"
                        }
                    );
                new IntroWidget(this.getView().appendNode("div", false), this).run();

                var menuView     = this.getView().appendNode("ul");
                var center       = this.getView().appendNode("div");
                    View.call(center);
                    center.id = "center";
                    center.addStyle(
                        "#center",
                        {
                            "width" : "100%"
                        }
                    );
                var leftMenuView = center.appendNode("ul");
                var workView     = center.appendNode("div");


                var workArea = new WorkAreaWidget(workView, this);
                var menu     = new MenuWidget(menuView, this, workArea.getView());
                var leftMenu = new LeftMenuWidget(leftMenuView, this, menu.setCurrentDatabase, workArea.getView());

                leftMenu.run();
                menu.run();
                workArea.run();
            };

            BaseBodyWidget.call(this);
        }

        BodyWidget.prototype             = BaseBodyWidget.prototype;
        BodyWidget.prototype.constructor = BodyWidget;

        return BodyWidget;
    }
).signUp({
    "name" : "Frontend.MVC.BodyWidget",
    "dep"  : [
        "Contour.Frontend.MVC.BodyWidget",
        "Contour.Frontend.MVC.View",
        "Service.Frontend.MVC.Menu.MenuWidget",
        "Service.Frontend.MVC.WorkArea.WorkAreaWidget",
        "Service.Frontend.MVC.LeftMenu.LeftMenuWidget",
        "Service.Frontend.MVC.Intro.IntroWidget"
    ]
});