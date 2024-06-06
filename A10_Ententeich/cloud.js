"use strict";
var A10_Ententeich;
(function (A10_Ententeich) {
    class Cloud {
        positionX;
        positionY;
        color;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;
            this.draw();
            this.move();
        }
        move() {
            this.positionX += 1;
            if (this.positionX > A10_Ententeich.crc2.canvas.width) {
                this.positionX = -100;
            }
        }
        draw() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.translate(0, 10);
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.moveTo(0, 0);
            A10_Ententeich.crc2.bezierCurveTo(-40, 20, -40, 70, 60, 70);
            A10_Ententeich.crc2.bezierCurveTo(80, 100, 150, 100, 170, 70);
            A10_Ententeich.crc2.bezierCurveTo(250, 70, 250, 40, 220, 20);
            A10_Ententeich.crc2.bezierCurveTo(260, -40, 200, -50, 170, -30);
            A10_Ententeich.crc2.bezierCurveTo(150, -75, 80, -60, 80, -30);
            A10_Ententeich.crc2.bezierCurveTo(30, -75, -20, -60, 0, 0);
            A10_Ententeich.crc2.strokeStyle = "#D8EAF2";
            A10_Ententeich.crc2.fillStyle = "#D8EAF2";
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.stroke();
            A10_Ententeich.crc2.restore();
        }
    }
    A10_Ententeich.Cloud = Cloud;
})(A10_Ententeich || (A10_Ententeich = {}));
//# sourceMappingURL=cloud.js.map