namespace A09_Ententeich {

    export class Bee extends Moveable{
        
        constructor(_x: number, _y: number, _color: string) {
            super(_x, _y, _color)

        }

        move(): void{
            this.positionX += 1
            this.positionY -= 1
            if (this.positionX > crc2.canvas.width, this.positionY > crc2.canvas.width) {
                this.positionX = 100;
                this.positionY = 50;
            }
        }

        draw(): void{
            crc2.save();
            crc2.beginPath();
            crc2.translate(this.positionX, this.positionY);

            crc2.fillStyle = this.color;
            crc2.ellipse(35, 220, 10, 5, 0, 0, 2* Math.PI);
            crc2.fill();
            crc2.closePath();
            crc2.restore();  
        }
    }
}