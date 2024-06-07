"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    /*
    
    Habe hier versucht den constructor wie bei der bee.ts und cloud.ts einzufügen, was jedoch nicht geklappt hat...
        ...
        export class Duck extends Moveable {
            constructor(_x: number, _y: number, _color: string) {
                super(_x, _y, _color)
    
            }
            ...
        }
        ...
    
    Habe da folgende Fehlermeldung erhalten: error TS2304: Cannot find name 'Moveable'.
    
    Zusätzliche Info:
    Ich habe die draw- und move- Funktionen nicht in Moveable.ts gepackt, da die in jeder ts-Datei
    unterschiedliche Werte haben. Deshalb habe ich nur den constructor in die Moveable.ts gepackt :)
            
    */
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
            if (this.positionX > A09_Ententeich.crc2.canvas.width) {
                this.positionX = 0;
            }
        }
        draw1() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.translate(this.positionX, this.positionY);
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.arc(60, 10, 20, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.ellipse(35, 35, 40, 20, 0, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.restore();
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
            if (this.positionX > A09_Ententeich.crc2.canvas.width) {
                this.positionX = 0;
            }
        }
        draw2() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.translate(this.positionX, this.positionY);
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.arc(80, 5, 30, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.fillStyle = this.color;
            A09_Ententeich.crc2.ellipse(40, 40, 60, 30, 0, 0, 2 * Math.PI);
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.restore();
        }
    }
    A09_Ententeich.Duck2 = Duck2;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=Duck.js.map