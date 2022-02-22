const canvas = document.getElementById("jsCanvas");
const ctx = canvas.getContext("2d");
const mode = document.getElementById("jsMode");

const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;

canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;


ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;

let filling = false;

function startPainting(){
    if(filling === false){
    painting = true;
    }
}

function stopPainting(){
    painting = false;
}

function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if(!painting){
        ctx.beginPath();
        ctx.moveTo(x,y);
    } else{
        ctx.lineTo(x,y);
        ctx.stroke();
    }

}

function onMousedown(event){
    painting = true;
}

function fillingcanvas(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE);
    }
}


if(canvas){
    canvas.addEventListener("mousemove",onMouseMove)
    canvas.addEventListener("mousedown",startPainting)
    canvas.addEventListener("mouseup",stopPainting)
    canvas.addEventListener("mouseleave",stopPainting)
    canvas.addEventListener("click",fillingcanvas)
}


function colorchange(event){
    const colorSelect = event.target.style.backgroundColor
    ctx.strokeStyle = colorSelect;
    ctx.fillStyle = colorSelect;
}

document.querySelector(".controls__colors").addEventListener("click",colorchange)



function lineWidthChange(){
    const linewidth = document.querySelector("#jsRange").value;
    ctx.lineWidth = linewidth
}

document.querySelector("#jsRange").addEventListener("click",lineWidthChange);



function fillingbtn(){
    if(filling == false){
        filling = true;
        mode.innerText = "PAINT"

    } else{
        filling = false;
        mode.innerText = "FILL"
    }
}



mode.addEventListener("click",fillingbtn)