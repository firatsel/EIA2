namespace A09_Ententeich {

    export class Moveable {
        public positionX: number;
        public positionY: number;
        public color: string;

        constructor(_x: number, _y: number, _color: string) {
            this.positionX = _x;
            this.positionY = _y;
            this.color = _color

        }

    }
}