// var canvas = document.querySelector("#myCanvas");
// var context = canvas.getContext("2d");
//
// var canvasPos = getPosition(canvas);
// var mouseX = 0;
// var mouseY = 0;
//
//
// canvas.addEventListener("mousemove", setMousePosition, false);
//
// function setMousePosition(e) {
//     mouseX = e.clientX - canvasPos.x;
//     mouseY = e.clientY - canvasPos.y;
// }



window.onload = function (){
    const c = document.getElementsByClassName("demo-svg");
    let svgData = c.getElementsByName("path");
};

var path = anime.path();

anime({
    targets: "path, polyline, svgData",
    scale: [0.1, 1],
    opacity: [0.1, 1],
    rotate: "1turn",
    duration: 7000
});

// // deal with the page getting resized or scrolled
// window.addEventListener("scroll", updatePosition, false);
// window.addEventListener("resize", updatePosition, false);
//
// function updatePosition() {
//     canvasPos = getPosition(canvas);
// }