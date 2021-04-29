canvas = document.getElementById('myCanvas');
color = 'red';
ctx = canvas.getContext ('2d');
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc (200,200,40,0,2*Math.PI);
ctx.stroke();


canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
mx = e.clientX - canvas.offsetLeft;
my = e.clientY - canvas.offsetTop;
circle(mx, my);
}

function circle(mx, my)
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mx,my,40,0,2*Math.PI);
    ctx.stroke();


}