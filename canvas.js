var canvas = document.querySelector('canvas')
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8;
var c = canvas.getContext('2d');
var radius = 3;
var color = "red";

window.addEventListener("keydown", function (e) {
    if (e.code === "ArrowUp"){
        radius += 1;
    } else if (e.code === "ArrowDown" && radius > 1){
        radius -= 1;
    }
      e.preventDefault();
})

window.addEventListener("keyup", function(e) {
    if (e.code === "Space") {
        clear();
    } else if (e.code === "KeyG"){
        color = "green";
    } else if (e.code === "KeyB"){
        color = "blue";
    } else if (e.code === "KeyY"){
        color = "yellow";
    } else if (e.code === "KeyR"){
        color = "red";
    }
})

window.addEventListener("mousemove", function (e){
    x = e.pageX;
    y = e.pageY;
    // console.log(e.offsetY);
    // console.log(e.pageY);
    pen(x,y,radius,color)
})

window.addEventListener("touchstart", function (e){
    x = e.pageX;
    y = e.pageY;
    pen(x,y,radius,color)
})

window.addEventListener("touchmove", function (e){
    // x = e.offsetX;
    // y = e.offsetY;
    x = e.touches[0]
    y = e.touches[0]
    pen(x,y,radius,color)
})

window.addEventListener("orientationchange", function (e) {
    location.reload(true)
})

function pen(x, y, radius, color){
          c.beginPath();
          c.arc(x, y, radius, 0, 2 * Math.PI);
          c.fillStyle = color;
          c.fill();
        }

function clear(){
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.8;
    // console.log("Called!");
}

function selectcolor(){
    color = document.getElementById("colorpicker").value
}
