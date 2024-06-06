"use strict";
var A10_Ententeich;
(function (A10_Ententeich) {
    class Vector {
        x;
        y;
        constructor(_x, _y) {
            this.set(_x, _y);
        }
        set(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_add) {
            this.x *= _add.x;
            this.y *= _add.y;
        }
    }
    A10_Ententeich.Vector = Vector;
})(A10_Ententeich || (A10_Ententeich = {}));
//# sourceMappingURL=Vector.js.map