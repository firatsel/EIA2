"use strict";
var A10_Ententeich;
(function (A10_Ententeich) {
    class Tree {
        positionX;
        positionY;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.draw();
        }
        draw() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.translate(this.positionX, this.positionY);
            A10_Ententeich.crc2.fillStyle = "#bc7b31";
            A10_Ententeich.crc2.fillRect(0, 220, 100, 200);
            A10_Ententeich.crc2.fillStyle = "#62a53a";
            A10_Ententeich.crc2.ellipse(50, 80, 100, 180, 0, 0, 2 * Math.PI);
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.restore();
        }
    }
    A10_Ententeich.Tree = Tree;
    class Tree2 {
        positionX;
        positionY;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.draw();
        }
        draw() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.translate(this.positionX, this.positionY);
            A10_Ententeich.crc2.fillStyle = "#bc7b31";
            A10_Ententeich.crc2.fillRect(1350, -100, 50, 100);
            A10_Ententeich.crc2.fillStyle = "#62a53a";
            A10_Ententeich.crc2.ellipse(1375, -150, 60, 100, 0, 0, 2 * Math.PI);
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.restore();
        }
    }
    A10_Ententeich.Tree2 = Tree2;
})(A10_Ententeich || (A10_Ententeich = {}));
//# sourceMappingURL=Tree.js.map