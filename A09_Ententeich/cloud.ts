namespace A09_Ententeich {

    export class Cloud {
        positionX: number;
        positionY: number;
        color: string;

        constructor(_positionX: number, _positionY: number, _color:string) {
            this.positionX = _positionX;
            this.positionY = _positionY;
            this.color = _color;

            this.draw()
            this.move()
        }

        move() {
            this.positionX += 1
            if (this.positionX > crc2.canvas.width) {
                this.positionX = -100;
            }

        }

        draw(): void {
            crc2.save();
            crc2.translate(0, 10);
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.bezierCurveTo(-40,  20, -40,  70,  60,  70);
            crc2.bezierCurveTo(80,  100, 150, 100, 170,  70);
            crc2.bezierCurveTo(250,  70, 250,  40, 220,  20);
            crc2.bezierCurveTo(260, -40, 200, -50, 170, -30);         
            crc2.bezierCurveTo(150, -75,  80, -60,  80, -30);
            crc2.bezierCurveTo(30,  -75, -20, -60,   0,   0);
            crc2.strokeStyle="#D8EAF2";
            crc2.fillStyle="#D8EAF2";
            crc2.fill();
            crc2.stroke();
            crc2.restore();
          }
    }
}