var L02_Load;
(function (L02_Load) {
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        document.addEventListener("mousemove", setInfoBox);
        document.addEventListener("click", logInfo);
        document.body.addEventListener("click", logInfo);
        document.body.addEventListener("keyup", logInfo);
        var divs = document.querySelectorAll("div");
        console.log(divs);
        divs[0].addEventListener("click", logInfo);
        divs[0].addEventListener("keyup", logInfo);
        divs[1].addEventListener("click", logInfo);
        divs[1].addEventListener("keyup", logInfo);
    }
    function setInfoBox(_event) {
        var x = _event.pageX;
        var y = _event.pageY;
        var span = document.querySelector("span");
        span.style.left = x + 10 + "px";
        span.style.top = x + 10 + "px";
        span.innerHTML = "mouseposition: " + x + "" + y + "target" + _event.target;
    }
    function logInfo(_event) {
        console.log(_event.target);
        console.log(_event.type);
        console.log(_event);
        console.log(_event.currentTarget);
    }
})(L02_Load || (L02_Load = {}));
