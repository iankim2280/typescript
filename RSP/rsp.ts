let imgCoords: RSP[keyof RSP] = "0";

interface RSP {
  readonly ROCK: "0";
  readonly SCISSORS: "-142px";
} // interface 에 readonly 쓰면 변수에 as const 쓰는거와 같음

interface RSP {
  readonly PAPER: "-284px"; // 똑같은 이름으로 또 만들어도 나중에 합쳐진다.
}

interface Example extends RSP {
  // RSP 들이 이쪽으로 상속된다.
}
//type alias = {} type과 interface는 합쳐지지 않아.
const rsp: RSP = {
  ROCK: "0",
  SCISSORS: "-142px",
  PAPER: "-284px",
};

const score = {
  SCISSORS: 1,
  ROCK: 0,
  PAPER: -1,
};
// function computerChoice(imgCoords: RSP[keyof RSP]): keyof RSP {
//   return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find(
//     (k) => rsp[k] === imgCoords
//   )!;
// }
const computerChoice = (imgCoords: RSP[keyof RSP]) => {
  return (Object.keys(rsp) as ["ROCK", "SCISSORS", "PAPER"]).find((k) => {
    return rsp[k] === imgCoords;
  });
};
let interval: number;

function intervalMaker() {
  interval = setInterval(function () {
    if (imgCoords === rsp.ROCK) {
      imgCoords = rsp.SCISSORS;
    } else if (imgCoords === rsp.SCISSORS) {
      imgCoords = rsp.PAPER;
    } else {
      imgCoords = rsp.ROCK;
    }
    if (document.querySelector("#computer")) {
      (document.querySelector("#computer") as HTMLElement).style.background =
        "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
        imgCoords +
        " 0";
    }
  }, 100);
}
intervalMaker();

document.querySelectorAll(".btn").forEach((btn) => {
  btn.addEventListener("click", function (this: HTMLButtonElement) {
    clearInterval(interval);
    setTimeout(() => {
      intervalMaker();
    }, 1000);
    const myChoice = this.id as keyof RSP;
    const myScore = score[myChoice];
    const computerScore = score[computerChoice(imgCoords)!];
    const diff = myScore - computerScore;
    if (diff === 0) {
      console.log("draw");
    } else if ([-1, 2].includes(diff)) {
      console.log("win!");
    } else {
      console.log("lose");
    }
  });
});

let start = 3;
const interval2 = setInterval(function () {
  if (start === 0) {
    console.log("done!!!");
    return clearInterval(interval2);
  }
  console.log(start);
  start -= 1;
}, 1000);

// 예재
type Hello =
  | {
      ROCK: string;
      SCISSORS: number;
    }
  | string;

const hello: Hello = "string";
const he12llo: Hello = {
  ROCK: "a",
  SCISSORS: 1,
};

interface Example3 {
  a: 3;
  b: 7;
  [key: string]: number;
}

const example3: Example3 = {
  a: 3,
  b: 7,
  d: 1,
};
