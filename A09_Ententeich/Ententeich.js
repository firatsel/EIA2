"use strict";
var A10_Ententeich;
(function (A10_Ententeich) {
    A10_Ententeich.canvas = document.querySelector("canvas");
    window.addEventListener("load", handleLoad);
    A10_Ententeich.ducks = [];
    A10_Ententeich.duck2 = [];
    A10_Ententeich.trees = [];
    A10_Ententeich.tree2 = [];
    A10_Ententeich.bees = [];
    A10_Ententeich.clouds = [];
    A10_Ententeich.birds = [];
    function animation() {
        A10_Ententeich.crc2.putImageData(A10_Ententeich.imgData, 0, 0);
        A10_Ententeich.ducks[0].draw1();
        A10_Ententeich.ducks[0].move1();
        A10_Ententeich.ducks[1].draw1();
        A10_Ententeich.ducks[1].move1();
        A10_Ententeich.duck2[0].draw2();
        A10_Ententeich.duck2[0].move2();
        A10_Ententeich.bees[0].draw();
        A10_Ententeich.bees[0].move();
        A10_Ententeich.bees[1].draw();
        A10_Ententeich.bees[1].move();
        for (let i = 0; i < 4; i++) {
            A10_Ententeich.clouds[i].move();
            A10_Ententeich.clouds[i].draw();
        }
    }
    A10_Ententeich.animation = animation;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        A10_Ententeich.crc2 = canvas.getContext("2d");
        if (!canvas)
            return;
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        let strokeColor = "#d5d7d8";
        let fillColor;
        drawBackground();
        drawMountain();
        drawMeadow();
        drawPond();
        A10_Ententeich.ducks.push(new A10_Ententeich.Duck(600, 450, "#d5d7d8"));
        A10_Ententeich.ducks.push(new A10_Ententeich.Duck(1000, 600, "#d5d7d8"));
        A10_Ententeich.duck2.push(new A10_Ententeich.Duck2(1300, 500, "#d5d7d8"));
        A10_Ententeich.trees.push(new A10_Ententeich.Tree(320, 370, "#bc7b31"));
        A10_Ententeich.tree2.push(new A10_Ententeich.Tree2(320, 370, "#bc7b31"));
        A10_Ententeich.bees.push(new A10_Ententeich.Bee(1000, 600, "yellow"));
        A10_Ententeich.bees.push(new A10_Ententeich.Bee(50, 40, "yellow"));
        A10_Ententeich.clouds.push(new A10_Ententeich.Cloud(10, 10, "#D8EAF2"));
        A10_Ententeich.imgData = A10_Ententeich.crc2.getImageData(0, 0, canvas.width, canvas.height);
        function drawBackground() {
            let gradient = A10_Ententeich.crc2.createLinearGradient(0, 0, 0, A10_Ententeich.crc2.canvas.height);
            gradient.addColorStop(0.1, "#adddf6");
            gradient.addColorStop(0.37, "#71bdef");
            A10_Ententeich.crc2.fillStyle = gradient;
            A10_Ententeich.crc2.fillRect(0, 0, A10_Ententeich.crc2.canvas.width, A10_Ententeich.crc2.canvas.height);
        }
        function drawPond() {
            let centerX = 900;
            let centerY = 550;
            let radiusX = 1200;
            let radiusY = 200;
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.fillStyle = "77cfe3";
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.restore();
        }
        function drawMountain() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.translate(0, 190);
            A10_Ententeich.crc2.fillStyle = "#d5d7d8";
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.moveTo(0, 500);
            A10_Ententeich.crc2.lineTo(2000, 1000);
            A10_Ententeich.crc2.lineTo(2000, -50);
            A10_Ententeich.crc2.lineTo(1000, 10);
            A10_Ententeich.crc2.lineTo(700, -90);
            A10_Ententeich.crc2.lineTo(300, -50);
            A10_Ententeich.crc2.lineTo(130, -80);
            A10_Ententeich.crc2.lineTo(70, -70);
            A10_Ententeich.crc2.lineTo(0, -55);
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.restore();
        }
        function drawMeadow() {
            A10_Ententeich.crc2.save();
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.translate(0, 290);
            A10_Ententeich.crc2.fillStyle = "#9ebd1a";
            A10_Ententeich.crc2.beginPath();
            A10_Ententeich.crc2.moveTo(0, 0);
            A10_Ententeich.crc2.lineTo(0, 1000);
            A10_Ententeich.crc2.lineTo(2000, 1000);
            A10_Ententeich.crc2.lineTo(2000, -50);
            A10_Ententeich.crc2.lineTo(700, -35);
            A10_Ententeich.crc2.lineTo(0, -50);
            A10_Ententeich.crc2.lineTo(0, -40);
            A10_Ententeich.crc2.closePath();
            A10_Ententeich.crc2.fill();
            A10_Ententeich.crc2.restore();
        }
        window.setInterval(function () {
            animation();
        }, 24);
    }
    A10_Ententeich.handleLoad = handleLoad;
})(A10_Ententeich || (A10_Ententeich = {}));
//# sourceMappingURL=Ententeich.js.map