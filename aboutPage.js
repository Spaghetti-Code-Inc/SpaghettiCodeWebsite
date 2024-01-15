var canvas = document.getElementById('Canvas');
var ctx= canvas.getContext('2d');
var centerX = canvas.width / 2;
var centerY = canvas.height / 2;
var radius = 70;
var arcVar1 = 0;
var arcVar2 = 1;
var arcVar3 = 0.5;
var logo_image = new Image();
logo_image.src = 'assets\\llcLogoPng.png';



  

function drawArcs()
{
    ctx.strokeStyle = 'purple';
    ctx.beginPath();
    ctx.arc(250, 250, 220, arcVar1 * Math.PI, (arcVar1+0.66) * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = 'white';
    ctx.beginPath();
    ctx.arc(250, 250, 230, arcVar2 * Math.PI, (arcVar2+0.33) * Math.PI);
    ctx.stroke();
    ctx.strokeStyle = 'black';
    ctx.beginPath();
    ctx.arc(250, 250, 240, arcVar3 * Math.PI, (arcVar3+0.8) * Math.PI);
    ctx.stroke();
    
}


function canvasLoop() {
    
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawArcs();
    ctx.drawImage(logo_image, 45, 45);
    arcVar1+=0.01;
    arcVar2-=0.012;
    arcVar3+= 0.002;


    requestAnimationFrame(canvasLoop);
}

canvasLoop();