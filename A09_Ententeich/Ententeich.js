"use strict";
var A09_Ententeich;
(function (A09_Ententeich) {
    A09_Ententeich.canvas = document.querySelector("canvas");
    window.addEventListener("load", handleLoad);
    A09_Ententeich.ducks = [];
    A09_Ententeich.duck2 = [];
    A09_Ententeich.trees = [];
    A09_Ententeich.tree2 = [];
    A09_Ententeich.bees = [];
    A09_Ententeich.clouds = [];
    A09_Ententeich.birds = [];
    function animation() {
        A09_Ententeich.crc2.putImageData(A09_Ententeich.imgData, 0, 0);
        A09_Ententeich.ducks[0].draw1();
        A09_Ententeich.ducks[0].move1();
        A09_Ententeich.ducks[1].draw1();
        A09_Ententeich.ducks[1].move1();
        A09_Ententeich.duck2[0].draw2();
        A09_Ententeich.duck2[0].move2();
        A09_Ententeich.bees[0].draw();
        A09_Ententeich.bees[0].move();
        A09_Ententeich.bees[1].draw();
        A09_Ententeich.bees[1].move();
        for (let i = 0; i < 4; i++) {
            A09_Ententeich.clouds[i].move();
            A09_Ententeich.clouds[i].draw();
        }
    }
    A09_Ententeich.animation = animation;
    function handleLoad() {
        let canvas = document.querySelector("canvas");
        A09_Ententeich.crc2 = canvas.getContext("2d");
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
        A09_Ententeich.ducks.push(new A09_Ententeich.Duck(600, 450, "#d5d7d8"));
        A09_Ententeich.ducks.push(new A09_Ententeich.Duck(1000, 600, "#d5d7d8"));
        A09_Ententeich.duck2.push(new A09_Ententeich.Duck2(1300, 500, "#d5d7d8"));
        A09_Ententeich.trees.push(new A09_Ententeich.Tree(320, 370, "#bc7b31"));
        A09_Ententeich.tree2.push(new A09_Ententeich.Tree2(320, 370, "#bc7b31"));
        A09_Ententeich.bees.push(new A09_Ententeich.Bee(1000, 600, "yellow"));
        A09_Ententeich.bees.push(new A09_Ententeich.Bee(50, 40, "yellow"));
        A09_Ententeich.clouds.push(new A09_Ententeich.Cloud(10, 10, "#D8EAF2"));
        A09_Ententeich.imgData = A09_Ententeich.crc2.getImageData(0, 0, canvas.width, canvas.height);
        function drawBackground() {
            let gradient = A09_Ententeich.crc2.createLinearGradient(0, 0, 0, A09_Ententeich.crc2.canvas.height);
            gradient.addColorStop(0.1, "#adddf6");
            gradient.addColorStop(0.37, "#71bdef");
            A09_Ententeich.crc2.fillStyle = gradient;
            A09_Ententeich.crc2.fillRect(0, 0, A09_Ententeich.crc2.canvas.width, A09_Ententeich.crc2.canvas.height);
        }
        function drawPond() {
            let centerX = 900;
            let centerY = 550;
            let radiusX = 1200;
            let radiusY = 200;
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.ellipse(centerX, centerY, radiusX, radiusY, 0, 0, 2 * Math.PI);
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.fillStyle = "77cfe3";
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.restore();
        }
        function drawMountain() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.translate(0, 190);
            A09_Ententeich.crc2.fillStyle = "#d5d7d8";
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.moveTo(0, 500);
            A09_Ententeich.crc2.lineTo(2000, 1000);
            A09_Ententeich.crc2.lineTo(2000, -50);
            A09_Ententeich.crc2.lineTo(1000, 10);
            A09_Ententeich.crc2.lineTo(700, -90);
            A09_Ententeich.crc2.lineTo(300, -50);
            A09_Ententeich.crc2.lineTo(130, -80);
            A09_Ententeich.crc2.lineTo(70, -70);
            A09_Ententeich.crc2.lineTo(0, -55);
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.restore();
        }
        function drawMeadow() {
            A09_Ententeich.crc2.save();
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.translate(0, 290);
            A09_Ententeich.crc2.fillStyle = "#9ebd1a";
            A09_Ententeich.crc2.beginPath();
            A09_Ententeich.crc2.moveTo(0, 0);
            A09_Ententeich.crc2.lineTo(0, 1000);
            A09_Ententeich.crc2.lineTo(2000, 1000);
            A09_Ententeich.crc2.lineTo(2000, -50);
            A09_Ententeich.crc2.lineTo(700, -35);
            A09_Ententeich.crc2.lineTo(0, -50);
            A09_Ententeich.crc2.lineTo(0, -40);
            A09_Ententeich.crc2.closePath();
            A09_Ententeich.crc2.fill();
            A09_Ententeich.crc2.restore();
        }
        window.setInterval(function () {
            animation();
        }, 24);
    }
    A09_Ententeich.handleLoad = handleLoad;
})(A09_Ententeich || (A09_Ententeich = {}));
//# sourceMappingURL=Ententeich.js.map