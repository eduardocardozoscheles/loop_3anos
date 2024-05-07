function verificarTime() {
  
  var continuarPerguntando = (true);

  while (continuarPerguntando) {
    
    var respostaTime = prompt("Qual os melhor time?");

    
    if (respostaTime.toLowerCase() === "real") {
      alert("Isso mesmo! O REAL MEDRID é o MAIOR time!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}

// Chamada de função para iniciar o processo
verificarTime();

