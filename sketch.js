var notas = [40,30,80,75,69,71,70,56,36]

function stup() {
  createCavas(400, 400);
  for(var i=0; i<notas.length;i++) {
    if (notas[i] >= 70) {
      console.log("Aprovado " + notas[i])
    } else {
      console.log("Reprovado " + notas[i])
    }
  }
}
