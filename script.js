let frases = [
    "Nunca subestime o poder do trabalho em equipe - Halo 3",
    "O aço ganha as batalhas, o ouro ganha a guerra - Davion Dota 2",
    "Existe diferença entre sobreviver e viver - The Last of Us",
    "As vezes é melhor ter paciência do que agir impulsivamente - Zelda BOTW",
    "Goool - EAFC 2026",
    "Não importa o quão escuro seja a noite, o amanhã sempre chega - Final Fantasy X",
    "Espaço. Espaço. Eu to no ESPAAAAAÇO - Portal 2",
    "Get over here! - Mortal Kombat"
];

let cliques = 0;

function gerarFrases(){
    let indice = Math.floor(Math.random() * frases.length);

    let fraseEscolhida = frases[indice];

    cliques = cliques+1;

    document.getElementById("frase").innerText = fraseEscolhida;

    document.getElementById("contador").innerText = "Frases geradas: "+cliques;
}