 namespace A09_Ententeich {
    export let canvas: HTMLCanvasElement | null = document.querySelector("canvas");
    export let crc2: CanvasRenderingContext2D;
    window.addEventListener("load", handleLoad)

    export let ducks: Duck[] = [];
    export let duck2: Duck2[] = [];
    export let trees: Tree[] = [];
    export let tree2: Tree2[] = [];
    export let bees: Bee[] = [];
    export let clouds: Cloud[] = [];
    export let birds: Bird[] = [];
    export let imgData: ImageData;

    export function animation(): void {
        crc2.putImageData(imgData, 0, 0)

        ducks[0].draw1();
        ducks[0].move1();
        ducks[1].draw1();
        ducks[1].move1();
        duck2[0].draw2();
        duck2[0].move2();

        bees[0].draw();
        bees[0].move();
        bees[1].draw();
        bees[1].move();

        for (let i: number = 0; i < 4; i++) {
            clouds[i].move();
            clouds[i].draw();
        }
    }

    export function handleLoad(): void {
        let canvas = <HTMLCanvasElement>document.querySelector("canvas");
        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        if(!canvas)
            return;

        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        let strokeColor: string = "#d5d7d8";
        let fillColor: string;

        drawBackground();
        drawMountain();
        drawMeadow();
        drawPond();


        ducks.push(new Duck(600, 450, "#d5d7d8"));
        ducks.push(new Duck(1000, 600, "#d5d7d8"));
        duck2.push(new Duck2(1300, 500, "#d5d7d8"));


        trees.push(new Tree(320, 370, "#bc7b31"));
        tree2.push(new Tree2(320, 370, "#bc7b31"));

        bees.push(new Bee(1000, 600, "yellow"))
        bees.push(new Bee(50, 40, "yellow"))

        clouds.push(new Cloud(10, 10, "#D8EAF2"));

        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);


        function drawBackground(): void {

            let gradient: CanvasGradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
            gradient.addColorStop(0.1, "#adddf6");
            gradient.addColorStop(0.37, "#71bdef");
    
            crc2.fillStyle = gradient;
            crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        }


        function drawPond(): void {

            let centerX = 900;
            let centerY = 550;
            let radiusX = 1200;
            let radiusY = 200;
    
            crc2.save();
            crc2.beginPath();
            crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fillStyle = "77cfe3";
            crc2.fill();
            crc2.restore();
        }


        function drawMountain(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(0, 190);
            crc2.fillStyle = "#d5d7d8";
            crc2.beginPath();
            crc2.moveTo(0, 500);
            crc2.lineTo(2000, 1000);
            crc2.lineTo(2000, -50);
            crc2.lineTo(1000, 10);
            crc2.lineTo(700, -90);
            crc2.lineTo(300, -50);
            crc2.lineTo(130, -80);
            crc2.lineTo(70, -70);
            crc2.lineTo(0, -55);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }

        
        function drawMeadow(): void {
            crc2.save();
            crc2.beginPath();
            crc2.translate(0, 290);
            crc2.fillStyle = "#9ebd1a";
            crc2.beginPath();
            crc2.moveTo(0, 0);
            crc2.lineTo(0, 1000);
            crc2.lineTo(2000, 1000);
            crc2.lineTo(2000, -50);
            crc2.lineTo(700, -35);
            crc2.lineTo(0, -50);
            crc2.lineTo(0, -40);
            crc2.closePath();
            crc2.fill();
            crc2.restore();
        }


        window.setInterval(function(): void {
            animation();
        }, 24)
    }
} 