document.addEventListener("DOMContentLoaded", function() {
    const dailyCardBtn = document.getElementById("daily-card-btn");
    const randomCardBtn = document.getElementById("random-card-btn");
    const cardInfo = document.getElementById("card-info");
    const cardNameElem = document.getElementById("card-name");
    const cardDescriptionElem = document.getElementById("card-description");
    const cardImg = document.getElementById("card-img");

    const tarotCards = [
        { name: "A Torre", description: "A Torre simboliza mudanças repentinas e inesperadas, colapso de estruturas antigas para o surgimento de novas.", img: "img/ATorre.png" },
        { name: "O Sol", description: "O Sol representa alegria, sucesso e felicidade. Está ligado à energia positiva e clareza de visão.", img: "img/OSol.png" },
        { name: "A Lua", description: "A Lua é associada ao mistério, ilusões e o subconsciente. Representa emoções profundas e o desconhecido.", img: "img/ALua.png" },
        { name: "O Enforcado", description: "O Enforcado sugere sacrifício, pausa, reflexão ou uma nova perspectiva sobre uma situação difícil.", img: "img/OEnforcado.png" },
        { name: "A Morte", description: "A Morte não significa literalidade, mas grandes transformações e renascimento. Indica o fim de um ciclo e o início de outro.", img: "img/AMorte.png" },
        { name: "O Mago", description: "O Mago simboliza habilidades, destreza e o uso inteligente de recursos para alcançar seus objetivos.", img: "img/OMago.png" },
        { name: "A Imperatriz", description: "A Imperatriz é um símbolo de fertilidade, abundância, criação e poder maternal.", img: "img/AImperatriz.png" },
        { name: "O Louco", description: "O Louco representa novos começos, liberdade e a necessidade de confiar na jornada, mesmo sem conhecer o destino.", img: "img/OLouco.png" },
        { name: "A Sacerdotisa", description: "A Sacerdotisa simboliza sabedoria intuitiva, mistério e o conhecimento oculto que ainda não foi revelado.", img: "img/ASacerdotisa.png" }
    ];

    // Função para pegar a carta do dia
    function getCardOfTheDay() {
        const today = new Date();
        const day = today.getDate();
        const cardIndex = (day - 1) % tarotCards.length;
        return tarotCards[cardIndex];
    }

    // Função para pegar uma carta aleatória
    function getRandomCard() {
        const cardIndex = Math.floor(Math.random() * tarotCards.length);
        return tarotCards[cardIndex];
    }

    // Função para mostrar uma carta
    function showCard(card) {
        cardNameElem.textContent = card.name;
        cardDescriptionElem.textContent = card.description;
        cardImg.src = card.img;
        cardImg.alt = card.name;
        cardInfo.style.display = "block";
    }

    // Evento para mostrar a carta do dia
    dailyCardBtn.addEventListener("click", function() {
        const card = getCardOfTheDay();
        showCard(card);
    });

    // Evento para mostrar uma carta aleatória
    randomCardBtn.addEventListener("click", function() {
        const card = getRandomCard();
        showCard(card);
    });
});
