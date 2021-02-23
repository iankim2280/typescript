"use strict";
class Hero {
    constructor(mine) {
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5) + 25;
        this.hero = true;
        this.field = true;
    }
}
class Sub {
    constructor(mine) {
        this.field = false;
        this.mine = mine;
        this.att = Math.ceil(Math.random() * 2);
        this.hp = Math.ceil(Math.random() * 5);
        this.cost = Math.floor((this.att + this.hp) / 2);
    }
}
const opponent = {
    hero: document.getElementById("rival-hero"),
    deck: document.getElementById("rival-deck"),
    field: document.getElementById("rival-cards"),
    cost: document.getElementById("rival-cist"),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};
const me = {
    hero: document.getElementById("my-hero"),
    deck: document.getElementById("my-deck"),
    field: document.getElementById("my-cards"),
    cost: document.getElementById("my-cist"),
    deckData: [],
    heroData: null,
    fieldData: [],
    chosenCard: null,
    chosenCardData: null,
};
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
forEach(["1", "2"], () => { });
// document.addEventListener<"submit">("submit", () => {});
const initiate = () => {
    [opponent, me].forEach((item) => {
        item.deckData = [];
        item.heroData = null;
        item.fieldData = [];
        item.chosenCard = null;
        item.chosenCardData = null;
    });
    // createDeck(true, 5, count: 5);
    // createDeck(false, 5);
    createHero({ mine: true });
    createHero({ mine: false });
    redrawScreen({ mine: true });
    redrawScreen({ mine: false });
};
initiate();
function createDeck({ mine, count }) {
    const player = mine ? me : opponent;
    for (let i = 0; i < count; i++) {
        player.deckData.push(new Sub(mine));
    }
    redrawDeck(player);
}
function createHero({ mine }) {
    const player = mine ? me : opponent;
    player.heroData = new Hero(mine);
    connectCardDOM({ data: player.heroData, DOM: player.hero, hero: true });
}
function connectCardDOM({ data, DOM, hero = false }) {
    const cardEl = document
        .querySelector(".card-hidden .card")
        .cloneNode(true);
    cardEl.querySelector(".card-att").textContent = String(data.att);
    cardEl.querySelector(".card-hp").textContent = String(data.hp);
    if (hero) {
        cardEl.querySelector(".card-cost").style.display =
            "none";
        const name = document.createElement("div");
        name.textContent = "Hero";
        cardEl.appendChild(name);
    }
    else {
        cardEl.querySelector(".card-cost").textContent = String(data.cost);
    }
    DOM.appendChild(cardEl);
}
function redrawScreen({ mine }) {
    const player = mine ? me : opponent;
    redrawHero(player);
}
function redrawHero(target) {
    if (!target.heroData) {
        throw new Error("No herodatas");
    }
    target.hero.innerHTML = "";
    connectCardDOM({ data: target.heroData, DOM: target.hero, hero: true });
}
function redrawDeck(target) {
    target.deck.innerHTML = "";
    target.deckData.forEach((data) => {
        connectCardDOM({ data, DOM: target.deck });
    });
}
