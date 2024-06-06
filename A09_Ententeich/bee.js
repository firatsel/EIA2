"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
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
            if (this.positionX > crc2.canvas.width, this.positionY > crc2.canvas.width) {
                this.positionX = 100;
                this.positionY = 50;
            }
        }
        draw() {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);
            crc2.fillStyle = this.color;
            crc2.ellipse(35, 220, 10, 5, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    A09_Ententeich.Bee = Bee;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=bee.js.map