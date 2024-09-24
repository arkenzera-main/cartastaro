document.addEventListener("DOMContentLoaded", function() {
    const revealBtn = document.getElementById("reveal-btn");
    const cardInfo = document.getElementById("card-info");
    const cardNameElem = document.getElementById("card-name");
    const cardDescriptionElem = document.getElementById("card-description");
    const cardImg = document.getElementById("card-img");

    const tarotCards = [
        { name: "A Torre", description: "A Torre simboliza mudanças repentinas e inesperadas, colapso de estruturas antigas para o surgimento de novas.", img: "img/ATorre.png" },
        { name: "O Sol", description: "O Sol representa alegria, sucesso e felicidade. Está ligado à energia positiva e clareza de visão.", img: "https://via.placeholder.com/150" },
        { name: "A Lua", description: "A Lua é associada ao mistério, ilusões e o subconsciente. Representa emoções profundas e o desconhecido.", img: "https://via.placeholder.com/150" },
        { name: "O Enforcado", description: "O Enforcado sugere sacrifício, pausa, reflexão ou uma nova perspectiva sobre uma situação difícil.", img: "https://via.placeholder.com/150" },
        { name: "A Morte", description: "A Morte não significa literalidade, mas grandes transformações e renascimento. Indica o fim de um ciclo e o início de outro.", img: "https://via.placeholder.com/150" },
        { name: "O Mago", description: "O Mago simboliza habilidades, destreza e o uso inteligente de recursos para alcançar seus objetivos.", img: "https://via.placeholder.com/150" },
        { name: "A Imperatriz", description: "A Imperatriz é um símbolo de fertilidade, abundância, criação e poder maternal.", img: "https://via.placeholder.com/150" },
        { name: "O Louco", description: "O Louco representa novos começos, liberdade e a necessidade de confiar na jornada, mesmo sem conhecer o destino.", img: "https://via.placeholder.com/150" },
        { name: "A Sacerdotisa", description: "A Sacerdotisa simboliza sabedoria intuitiva, mistério e o conhecimento oculto que ainda não foi revelado.", img: "img/ASacerdotisa.png" }
    ];


    function getCardOfTheDay() {
        const today = new Date();
        const day = today.getDate();
        const cardIndex = (day - 1) % tarotCards.length;  
        return tarotCards[cardIndex];
    }

   
    revealBtn.addEventListener("click", function() {
        const card = getCardOfTheDay();

        
        cardNameElem.textContent = card.name;
        cardDescriptionElem.textContent = card.description;
        cardImg.src = card.img;
        cardImg.alt = card.name;

        
        cardInfo.style.display = "block";

        
        revealBtn.style.display = "none";
    });
});
