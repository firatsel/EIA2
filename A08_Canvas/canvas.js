"use strict";
var canvas;
(function (canvas_1) {
    window.addEventListener("load", handleLoad);
    let canvas;
    let crc2;
    let rectangle02;
    function handleLoad() {
        canvas = document.querySelector("canvas");
        crc2 = canvas.getContext("2d");
        canvas.style.width = window.innerWidth + "px";
        canvas.style.height = window.innerHeight + "px";
        let strokeColor;
        let fillColor;
        drawBackground();
        for (let i = 0; i < 4; i++) {
            for (let z = 0; z < 3; z++) {
                let x = Math.random() * 200;
                let y = (Math.random() * i * 50) * z;
                let size = Math.random() * 40 + 20;
                switch (i) {
                    case 0:
                        strokeColor = "#838b83";
                        break;
                    case 1:
                        strokeColor = "#c1cdc1";
                        break;
                    case 2:
                        strokeColor = "#e0eee0";
                        break;
                    case 3:
                        strokeColor = "#f0fff0";
                        break;
                    default:
                        strokeColor = "	#f0fff0";
                }
                switch (z) {
                    case 0:
                        fillColor = "#f4a460";
                        break;
                    case 1:
                        fillColor = "#8fbc8f";
                        break;
                    case 2:
                        fillColor = "#b9d3ee";
                        break;
                    default:
                        fillColor = "#8b3e2f";
                }
                drawRectangle01(x, y, size, strokeColor, fillColor);
                drawRectangle02(x, y, size, strokeColor, fillColor);
            }
        }
    }
    function drawRectangle01(_x, _y, _size, _strokeColor, _fillColor) {
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.strokeRect(_x, _y, 30, 30);
        crc2.fillRect(_x, _y, 30, 30);
    }
    function drawRectangle02(_x, _y, _size, _strokeColor, _fillColor) {
        rectangle02 = canvas.getContext("2d");
        rectangle02.fillStyle = _fillColor;
        rectangle02.strokeStyle = _strokeColor;
        rectangle02.strokeRect(_x, _y, 10, 10);
        rectangle02.fillRect(_x, _y, 10, 10);
    }
    function drawBackground() {
        let gradient = crc2.createLinearGradient(0, 0, 0, crc2.canvas.height);
        gradient.addColorStop(0, "green");
        gradient.addColorStop(0.4, "limegreen");
        gradient.addColorStop(1, "green");
        crc2.fillStyle = gradient;
        crc2.fillRect(0, 0, window.innerWidth, window.innerHeight);
    }
})(canvas || (canvas = {}));
//# sourceMappingURL=canvas.js.map