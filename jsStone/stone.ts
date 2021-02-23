interface Card {
  att: number;
  hp: number;
  mine: boolean;
  field: boolean;
  cost?: number;
  hero?: boolean;
}

class Hero implements Card {
  public att: number; // : number | undefined
  public hp: number;
  public hero: boolean;
  public field: boolean;
  public mine: boolean;
  constructor(mine: boolean) {
    this.mine = mine;
    this.att = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5) + 25;
    this.hero = true;
    this.field = true;
  }
}
class Sub implements Card {
  public att: number;
  public hp: number;
  public field: boolean = false;
  public cost: number;
  public mine: boolean;
  constructor(mine: boolean) {
    this.mine = mine;
    this.att = Math.ceil(Math.random() * 2);
    this.hp = Math.ceil(Math.random() * 5);
    this.cost = Math.floor((this.att + this.hp) / 2);
  }
}

interface Player {
  hero: HTMLDivElement;
  deck: HTMLDivElement;
  field: HTMLDivElement;
  cost: HTMLDivElement;
  deckData: Card[];
  heroData?: Card | null; // ?는 | undefined
  fieldData: Card[];
  chosenCard?: HTMLDivElement | null;
  chosenCardData?: Card | null; // ?는 undefined다 null도 사용하려면 | null을 뒤에 붙이고 tsconfig에 "strictNullChecks": true, 추가
}
const opponent: Player = {
  hero: document.getElementById("rival-hero") as HTMLDivElement,
  deck: document.getElementById("rival-deck") as HTMLDivElement,
  field: document.getElementById("rival-cards") as HTMLDivElement,
  cost: document.getElementById("rival-cist") as HTMLDivElement,
  deckData: [],
  heroData: null,
  fieldData: [],
  chosenCard: null,
  chosenCardData: null,
};

const me: Player = {
  hero: document.getElementById("my-hero") as HTMLDivElement,
  deck: document.getElementById("my-deck") as HTMLDivElement,
  field: document.getElementById("my-cards") as HTMLDivElement,
  cost: document.getElementById("my-cist") as HTMLDivElement,
  deckData: [],
  heroData: null,
  fieldData: [],
  chosenCard: null,
  chosenCardData: null,
};

function forEach<T>(arr: T[], callback: (item: T) => void): void {
  for (let i: number = 0; i < arr.length; i++) {
    callback(arr[i]);
  }
}
forEach<string>(["1", "2"], () => {});
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
  createHero({mine: true});
  createHero({mine: false});
  redrawScreen({mine: true});
  redrawScreen({mine: false});
};
initiate();

function createDeck({mine, count}: {mine: boolean; count: number}) {
  const player = mine ? me : opponent;
  for (let i: number = 0; i < count; i++) {
    player.deckData.push(new Sub(mine));
  }
  redrawDeck(player);
}

function createHero({mine}: {mine: boolean}) {
  const player = mine ? me : opponent;
  player.heroData = new Hero(mine);
  connectCardDOM({data: player.heroData, DOM: player.hero, hero: true});
}

interface interfacedType {
  data: Card;
  DOM: HTMLDivElement;
  hero?: boolean;
}
function connectCardDOM({data, DOM, hero = false}: interfacedType) {
  const cardEl = document
    .querySelector(".card-hidden .card")!
    .cloneNode(true) as HTMLDivElement;
  cardEl.querySelector(".card-att")!.textContent = String(data.att);
  cardEl.querySelector(".card-hp")!.textContent = String(data.hp);

  if (hero) {
    (cardEl.querySelector(".card-cost") as HTMLDivElement).style.display =
      "none";
    const name = document.createElement("div");
    name.textContent = "Hero";
    cardEl.appendChild(name);
  } else {
    cardEl.querySelector(".card-cost")!.textContent = String(data.cost);
  }
  DOM.appendChild(cardEl);
}
function redrawScreen({mine}: {mine: boolean}) {
  const player = mine ? me : opponent;
  redrawHero(player);
}

function redrawHero(target: Player) {
  if (!target.heroData) {
    throw new Error("No herodatas");
  }
  target.hero.innerHTML = "";
  connectCardDOM({data: target.heroData!, DOM: target.hero, hero: true});
}
function redrawDeck(target: Player) {
  target.deck.innerHTML = "";
  target.deckData.forEach((data) => {
    connectCardDOM({data, DOM: target.deck});
  });
}
