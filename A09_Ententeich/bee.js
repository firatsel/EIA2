"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Bee extends A09_Ententeich.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.positionX += 1;
            this.positionY -= 1;
            if (this.positionX > A09_Ententeich.crc2.canvas.width, this.positionY > A09_Ententeich.crc2.canvas.width) {
                this.positionX = 100;
                this.positionY = 50;
            }
        }
        draw() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.translate(this.positionX, this.positionY);
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.ellipse(35, 220, 10, 5, 0, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Bee = Bee;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=bee.js.map