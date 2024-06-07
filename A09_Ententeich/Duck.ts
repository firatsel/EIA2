namespace A09_Ententeich {
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
    export class Duck {
        positionX: number;
        positionY: number;
        color: string = "green";

        constructor(_positionX: number, _positionY: number, _color:string) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;

        }

        move1(): void {
            this.positionX += 1
            if (this.positionX > crc2.canvas.width) {
                this.positionX = 0;
            }
        }

        draw1(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);

            crc2.fillStyle = this.color;
            crc2.arc(60, 10, 20, 0, 2*Math.PI);
            crc2.fill();

            crc2.fillStyle = this.color;
            crc2.ellipse(35, 35, 40, 20, 0, 0, 2*Math.PI);
            crc2.fill();
            
            crc2.closePath();
            crc2.restore();
        }
    }

    export class Duck2 {
        positionX: number;
        positionY: number;
        color: string = "green";

        constructor(_positionX: number, _positionY: number, _color:string) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;

        }

        move2(): void {
            this.positionX += 1
            if (this.positionX > crc2.canvas.width) {
                this.positionX = 0;
            }
        }

        draw2(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);

            crc2.fillStyle = this.color;
            crc2.arc(80, 5, 30, 0, 2*Math.PI);
            crc2.fill();

            crc2.fillStyle = this.color;
            crc2.ellipse(40, 40, 60, 30, 0, 0, 2*Math.PI);
            crc2.fill(); 
            
            crc2.closePath();
            crc2.restore();
        }
    }
    
}