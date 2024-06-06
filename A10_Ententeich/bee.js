"use strict";
var A10_Ententeich;
(function (A10_Ententeich) {
    class Bee {
        positionX;
        positionY;
        color;
        constructor(_x, _y, _color) {
            this.positionX = _x;
            this.positionY = _y;
            this.color = _color;
        }
        move() {
            this.positionX += 1;
            this.positionY -= 1;
            if (this.positionX > A10_Ententeich.crc2.canvas.width, this.positionY > A10_Ententeich.crc2.canvas.width) {
                this.positionX = 100;
                this.positionY = 50;
            }
        }
        draw() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.translate(this.positionX, this.positionY);
            A10_Ententeich.crc2.fillStyle = this.color;
            A10_Ententeich.crc2.ellipse(35, 220, 10, 5, 0, 0, 2 * Math.PI);
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.restore();
        }
    }
    A10_Ententeich.Bee = Bee;
})(A10_Ententeich || (A10_Ententeich = {}));
//# sourceMappingURL=bee.js.map