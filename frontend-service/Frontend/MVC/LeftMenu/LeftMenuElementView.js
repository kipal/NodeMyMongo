module.exports = new Service.ClientScript(
    function (View) {

        function LeftMenuElementView(name) {

            View.call(this);

            this.className = "leftMenuElem link";

            this.addStyle(
                ".leftMenuElem",
                {
                    "list-style" : "none"
                }
            );

            this.nameNode = this.appendNode("span");
            this.nameNode.innerHTML = "+ " + name;

            this.setActive = function () {
                this.nameNode.style.color = "white";
            };

            this.setInactive = function () {
                this.nameNode.style.color = "inherit";
            };
        }

        LeftMenuElementView.prototype             = View.prototype;
        LeftMenuElementView.prototype.constructor = LeftMenuElementView;

        return LeftMenuElementView;
    }
)
.signUp({
    "name" : "Frontend.MVC.LeftMenu.LeftMenuElementView",
    "dep"  : "Contour.Frontend.MVC.View"
})
.dep("Contour.Frontend.MVC.View");