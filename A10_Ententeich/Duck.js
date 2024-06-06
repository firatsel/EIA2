"use strict";
var A10_Ententeich;
(function (A10_Ententeich) {
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
            if (this.positionX > A10_Ententeich.crc2.canvas.width) {
                this.positionX = 0;
            }
        }
        draw1() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.translate(this.positionX, this.positionY);
            A10_Ententeich.crc2.fillStyle = this.color;
            A10_Ententeich.crc2.arc(60, 10, 20, 0, 2 * Math.PI);
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.fillStyle = this.color;
            A10_Ententeich.crc2.ellipse(35, 35, 40, 20, 0, 0, 2 * Math.PI);
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.restore();
        }
    }
    A10_Ententeich.Duck = Duck;
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
            if (this.positionX > A10_Ententeich.crc2.canvas.width) {
                this.positionX = 0;
            }
        }
        draw2() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.translate(this.positionX, this.positionY);
            A10_Ententeich.crc2.fillStyle = this.color;
            A10_Ententeich.crc2.arc(80, 5, 30, 0, 2 * Math.PI);
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.fillStyle = this.color;
            A10_Ententeich.crc2.ellipse(40, 40, 60, 30, 0, 0, 2 * Math.PI);
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.restore();
        }
    }
    A10_Ententeich.Duck2 = Duck2;
})(A10_Ententeich || (A10_Ententeich = {}));
//# sourceMappingURL=Duck.js.map