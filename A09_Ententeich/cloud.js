"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Cloud extends A09_Ententeich.Moveable {
        constructor(_x, _y, _color) {
            super(_x, _y, _color);
        }
        move() {
            this.positionX += 1;
            if (this.positionX > A09_Ententeich.crc2.canvas.width) {
                this.positionX = 1;
            }
        }
        draw() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.translate(this.positionX, 10);
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.moveTo(0, 0);
            A09_Ententeich.crc2.bezierCurveTo(-40, 20, -40, 70, 60, 70);
            A09_Ententeich.crc2.bezierCurveTo(80, 100, 150, 100, 170, 70);
            A09_Ententeich.crc2.bezierCurveTo(250, 70, 250, 40, 220, 20);
            A09_Ententeich.crc2.bezierCurveTo(260, -40, 200, -50, 170, -30);
            A09_Ententeich.crc2.bezierCurveTo(150, -75, 80, -60, 80, -30);
            A09_Ententeich.crc2.bezierCurveTo(30, -75, -20, -60, 0, 0);
            A09_Ententeich.crc2.strokeStyle = "#D8EAF2";
            A09_Ententeich.crc2.fillStyle = "#D8EAF2";
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.stroke();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Cloud = Cloud;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=cloud.js.map