document.addEventListener("DOMContentLoaded", start, false);

function start () {
    draw_rect_red (10, 10, 380, 280);
    // draw_square_8x8 (20, 20, 80, 80);
    draw_circle (100, 75, 50, 0, 2)
}

function draw_square_8x8 (x, y, size_x, size_y) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.lineTo(x + size_x, y);
    ctx.lineTo(x + size_x, y + size_y);
    ctx.lineTo(x, y + size_y);
    ctx.lineTo(x, y);
    ctx.closePath();
    ctx.stroke();
}

function draw_rect_red (x, y, size_x, size_y) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, size_x, size_y);
}

function draw_circle (x, y, radius, startAngle, endAngle) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    const gradient = ctx.arc(x, y, radius, startAngle, endAngle * Math.PI);
    ctx.fillStyle = gradient;
    ctx.stroke();
}

function draw_line(startX, startY, endX, endY, color) {
    var canvas = document.getElementById("canvas");
    var ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    ctx.strokeStyle = color;
    ctx.stroke();
}

