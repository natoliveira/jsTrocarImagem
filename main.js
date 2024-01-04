

const imagens = ["imagem1.jpeg", "imagem2.jpeg"];
let indiceAtual = 0; // Inicializa o índice atual

function trocarImagem() {
  const imagemElement = document.getElementById("imagem");

  // Avança para a próxima imagem
  indiceAtual = (indiceAtual + 1) % imagens.length;

  // Trocar a imagem
  imagemElement.src = imagens[indiceAtual];
}
