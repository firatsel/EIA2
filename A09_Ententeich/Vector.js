var A09_Ententeich;
(function (A09_Ententeich) {
    var Vector = /** @class */ (function () {
        function Vector(_x, _y) {
            this.set(_x, _y);
        }
        Vector.prototype.set = function (_x, _y) {
            this.x = _x;
            this.y = _y;
        };
        Vector.prototype.scale = function (_factor) {
            this.x *= _factor;
            this.y *= _factor;
        };
        Vector.prototype.add = function (_add) {
            this.x *= _add.x;
            this.y *= _add.y;
        };
        return Vector;
    }());
    A09_Ententeich.Vector = Vector;
})(A09_Ententeich || (A09_Ententeich = {}));
