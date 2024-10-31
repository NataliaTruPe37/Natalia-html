function drawClock() {
  drawFace(ctx, radius);
  drawNumbers(ctx, radius);
  drawTime(ctx, radius);
}

function drawFace(ctx, radius) {
  var grad;
  ctx.beginPath();
  ctx.arc(0, 0, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "white";
  ctx.fill();
}

function drawNumbers(ctx, radius) {
  ctx.font = radius * 0.15 + "px Arial";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  ctx.fillStyle = "#333";
  for (var num = 1; num <= 12; num++) {
      var ang = num * Math.PI / 6; // Calcular el ángulo para cada número
      ctx.rotate(ang); // Rotar el contexto al ángulo adecuado
      ctx.translate(0, -radius * 0.85); // Mover hacia afuera en el radio del círculo
      ctx.rotate(-ang); // Ajustar para que el número no se rote
      ctx.fillText(num.toString(), 0, 0); // Dibujar el número
      ctx.rotate(ang); // Volver a la rotación original
      ctx.translate(0, radius * 0.85); // Volver a la posición original
      ctx.rotate(-ang); // Restaurar el contexto
  }
}


function drawTime(ctx, radius) {
  // TODO: Calculate the angles of every hand depending on the time
  var now = new Date();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  //hour
  hour = hour % 12;
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  //minute
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  // second
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.stroke();
  ctx.rotate(-pos);
}
