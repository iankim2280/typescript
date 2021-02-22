"use strict";
let imgCoords = "0";
//type alias = {} type과 interface는 합쳐지지 않아.
const rsp = {
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
const computerChoice = (imgCoords) => {
    return Object.keys(rsp).find((k) => {
        return rsp[k] === imgCoords;
    });
};
let interval;
function intervalMaker() {
    interval = setInterval(function () {
        if (imgCoords === rsp.ROCK) {
            imgCoords = rsp.SCISSORS;
        }
        else if (imgCoords === rsp.SCISSORS) {
            imgCoords = rsp.PAPER;
        }
        else {
            imgCoords = rsp.ROCK;
        }
        if (document.querySelector("#computer")) {
            document.querySelector("#computer").style.background =
                "url(https://en.pimg.jp/023/182/267/1/23182267.jpg) " +
                    imgCoords +
                    " 0";
        }
    }, 100);
}
intervalMaker();
document.querySelectorAll(".btn").forEach((btn) => {
    btn.addEventListener("click", function () {
        clearInterval(interval);
        setTimeout(() => {
            intervalMaker();
        }, 1000);
        const myChoice = this.id;
        const myScore = score[myChoice];
        const computerScore = score[computerChoice(imgCoords)];
        const diff = myScore - computerScore;
        if (diff === 0) {
            console.log("draw");
        }
        else if ([-1, 2].includes(diff)) {
            console.log("win!");
        }
        else {
            console.log("lose");
        }
    });
});
let start = 3;
const interval2 = setInterval(function () {
    if (start === 0) {
        console.log("종료!!!");
        return clearInterval(interval2);
    }
    console.log(start);
    start -= 1;
}, 1000);
const hello = "string";
const he12llo = {
    ROCK: "a",
    SCISSORS: 1,
};
const example = {
    a: 3,
    b: 7,
    d: 1,
};
