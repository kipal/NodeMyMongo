// TODO clientScript
module.exports = new Module(
    function (ContourBootstrap) {

        function Bootstrap() {
            ContourBootstrap.call(this);
        }

        Bootstrap.prototype             = ContourBootstrap.prototype;
        Bootstrap.prototype.constructor = Bootstrap;

        return Bootstrap;
    }
).dep("Contour.Core.Bootstrap");