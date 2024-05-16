"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
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
    A09_Ententeich.Vector = Vector;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=Vector.js.map