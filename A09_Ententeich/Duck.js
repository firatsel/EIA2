"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Duck {
        positionX;
        positionY;
        color = "green";
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;
        }
        move1() {
            this.positionX += 1;
            if (this.positionX > crc2.canvas.width) {
                this.positionX = 0;
            }
        }
        draw1() {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);
            crc2.fillStyle = this.color;
            crc2.arc(60, 10, 20, 0, 2 * Math.PI);
            crc2.fill();
            crc2.fillStyle = this.color;
            crc2.ellipse(35, 35, 40, 20, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    A09_Ententeich.Duck = Duck;
    class Duck2 {
        positionX;
        positionY;
        color = "green";
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;
        }
        move2() {
            this.positionX += 1;
            if (this.positionX > crc2.canvas.width) {
                this.positionX = 0;
            }
        }
        draw2() {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);
            crc2.fillStyle = this.color;
            crc2.arc(80, 5, 30, 0, 2 * Math.PI);
            crc2.fill();
            crc2.fillStyle = this.color;
            crc2.ellipse(40, 40, 60, 30, 0, 0, 2 * Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();
        }
    }
    A09_Ententeich.Duck2 = Duck2;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=Duck.js.map