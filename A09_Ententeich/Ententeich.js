var A09_Ententeich;
(function (A09_Ententeich) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("ducks");
        var canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        A09_Ententeich.crc2 = canvas.getContext("2d");
        A09_Ententeich.crc2.fillStyle = "black";
        A09_Ententeich.crc2.strokeStyle = "white";
        createPaths();
        console.log("ducks paths: ", duckPaths);
    }
})(A09_Ententeich || (A09_Ententeich = {}));
