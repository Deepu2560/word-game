var word = document.querySelector(".word");
var time = document.querySelector(".time");

let second = 20;

var input = document.querySelector(".input-text");

const reset = document.querySelector(".refresh-btn");
const submit = document.querySelector(".check-btn");

let words = [
  "Sticks",
  "stumps",
  "weirds",
  "fazes",
  "flusters",
  "mortifies",
  "rattles",
  "bothers",
  "mother",
  "father",
  "chagrins",
  "dismays",
  "unhinges",
  "away",
  "upsets",
  "school",
  "college",
  "name",
  "surname",
  "india",
  "america",
  "china",
  "time",
  "document",
];

var wordobtain = words[Math.floor(Math.random() * words.length)];

let randomWordString = wordobtain.toUpperCase().split("");

show();
console.clear();

function shuffleArray(array) {
  for (var i = randomWordString.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}

function show() {
  input.value = "";
  var jumbledWord = shuffleArray(randomWordString);
  word.innerText = jumbledWord.join(" ");

  time.innerText = `TIME LEFT: ${second}`;

  const countdown = setInterval(() => {
    if (second == 1) {
      clearInterval(countdown);
      alert(`Time Over. Word was ${wordobtain}`);
      document.location.reload();
    }
    second--;
    time.innerText = `TIME LEFT: ${second}`;

    submit.addEventListener("click", () => {
      var text = input.value.toUpperCase();
      if (text == "") {
        alert("Please Enter Something");
      } else if (text == wordobtain.toUpperCase()) {
        clearInterval(countdown);
        alert("You Found Correct Word. You won");
        document.location.reload();
      }
    });
  }, 1000);
}

reset.addEventListener("click", () => {
  document.location.reload();
});
