namespace A10_Ententeich {

    export class Tree {
        positionX: number;
        positionY: number;

        constructor(_positionX: number, _positionY: number, _color:string) {
            this.positionX = _positionX;
            this.positionY = _positionY;

            this.draw();
        }
        
        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);

            crc2.fillStyle = "#bc7b31";
            crc2.fillRect(0, 220, 100, 200);

            crc2.fillStyle = "#62a53a";
            crc2.ellipse(50, 80, 100, 180, 0, 0, 2*Math.PI);
            crc2.fill();
            
            crc2.closePath();
            crc2.restore();
        }
    }

    export class Tree2 {
        positionX: number;
        positionY: number;

        constructor(_positionX: number, _positionY: number, _color:string) {
            this.positionX = _positionX;
            this.positionY = _positionY;

            this.draw();
        }
        
        draw(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);

            crc2.fillStyle = "#bc7b31";
            crc2.fillRect(1350, -100, 50, 100);

            crc2.fillStyle = "#62a53a";
            crc2.ellipse(1375, -150, 60, 100, 0, 0, 2*Math.PI);
            crc2.fill();
            
            crc2.closePath();
            crc2.restore();
        }
    }
}