"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    class Tree {
        positionX;
        positionY;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.draw();
        }
        draw() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.translate(this.positionX, this.positionY);
            A09_Ententeich.crc2.fillStyle = "#bc7b31";
            A09_Ententeich.crc2.fillRect(0, 220, 100, 200);
            A09_Ententeich.crc2.fillStyle = "#62a53a";
            A09_Ententeich.crc2.ellipse(50, 80, 100, 180, 0, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Tree = Tree;
    class Tree2 {
        positionX;
        positionY;
        constructor(_positionX, _positionY, _color) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.draw();
        }
        draw() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.translate(this.positionX, this.positionY);
            A09_Ententeich.crc2.fillStyle = "#bc7b31";
            A09_Ententeich.crc2.fillRect(1350, -100, 50, 100);
            A09_Ententeich.crc2.fillStyle = "#62a53a";
            A09_Ententeich.crc2.ellipse(1375, -150, 60, 100, 0, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Tree2 = Tree2;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=Tree.js.map