var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");


color="blue";
ctx.lineWidth=2;
ctx.strokeStyle=color;
ctx.beginPath();
ctx.arc(200,200,50,0,2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown",myMouseDown);

function myMouseDown(e){
    color=document.getElementById("color").value;

    canvas_mouse_x=e.clientX-canvas.offsetLeft;
    canvas_mouse_y=e.clientY-canvas.offsetTop;
    circle (canvas_mouse_x,canvas_mouse_y);

} 

function circle(canvas_mouse_x,canvas_mouse_y){
    ctx.lineWidth=2;
    ctx.strokeStyle=color;
    ctx.beginPath();
    ctx.arc(canvas_mouse_x,canvas_mouse_y,40,0,2*Math.PI);
    ctx.stroke();
}