// Questions will be asked
const Questions = [
  {
    id: 0,
    q: "Using jQuery, which of the following would select an element with an ID of 'target'?",
    a: [
      { text: "a. $(target)", isCorrect: false },
      { text: "b. $('target')", isCorrect: false },
      { text: "c. $('.target')", isCorrect: false },
      { text: "d. $('#target')", isCorrect: true },
    ],
  },
  {
    id: 1,
    q: "Which of these string methods splits a string into a returned array of substrings by taking a separator?",
    a: [
      { text: "a. slice()", isCorrect: true },
      { text: "b. substr()", isCorrect: false },
      { text: "c. split()", isCorrect: false },
      { text: "d. substring()", isCorrect: false },
    ],
  },
  {
    id: 2,
    q: "Which kind of variable must be assigned a value upon declaration?",
    a: [
      { text: "a. var", isCorrect: false },
      { text: "b. let", isCorrect: false },
      { text: "c. const", isCorrect: true },
      { text: "d. All of the Above", isCorrect: false },
    ],
  },
  {
    id: 3,
    q: "Which is not a way to add 1 to variable n?",
    a: [
      { text: "a. n+", isCorrect: true },
      { text: "b. n++", isCorrect: false },
      { text: "c. n = n + 1", isCorrect: false },
      { text: "d. These can all be used", isCorrect: false },
    ],
  },
  {
    id: 4,
    q: "Which operator returns the remainder of a division problem?",
    a: [
      { text: "a. /", isCorrect: false },
      { text: "b. %", isCorrect: true },
      { text: "c. !", isCorrect: false },
      { text: "d. :", isCorrect: false },
    ],
  },
  {
    id: 5,
    q: "Which of the following is a logical operator in JavaScript meaning NOT?",
    a: [
      { text: "a. /", isCorrect: false },
      { text: "b. %", isCorrect: true },
      { text: "c. !", isCorrect: false },
      { text: "d. :", isCorrect: false },
    ],
  },
  {
    id: 6,
    q: "Which of the following is a logical operator in JavaScript meaning NOT?",
    a: [
      { text: "a. #", isCorrect: true },
      { text: "b. &", isCorrect: false },
      { text: "c. $", isCorrect: false },
      { text: "d. !", isCorrect: true },
    ],
  },
  {
    id: 7,
    q: "What does DOM stand for?",
    a: [
      { text: "a. Direct Oriented Methods", isCorrect: false },
      { text: "b. Directed Operator Mechanism", isCorrect: false },
      { text: "c. Data Output Mode", isCorrect: false },
      { text: "d. Document Object Model", isCorrect: true },
    ],
  },
  {
    id: 8,
    q: "Which of the following DOM method calls would select an HTML element with a class of 'main'?",
    a: [
      { text: "a. document.querySelector('.main')", isCorrect: true },
      { text: "b. document.getElementById('main')", isCorrect: false },
      { text: "c. document.innerText('main')", isCorrect: false },
      { text: "d. document.querySelector('#main')", isCorrect: false },
    ],
  },
  {
    id: 9,
    q: "When was JavaScript developed?",
    a: [
      { text: "a. 1990", isCorrect: false },
      { text: "b. 1995", isCorrect: true },
      { text: "c. 2000", isCorrect: false },
      { text: "d. 2005", isCorrect: false },
    ],
  },
  {
    id: 10,
    q: "In what kind of HTML tag can embedded JavaScript be placed?",
    a: [
      { text: "a. <javascript>", isCorrect: false },
      { text: "b. <java>", isCorrect: false },
      { text: "c. <script>", isCorrect: true },
      { text: "d. <js>", isCorrect: false },
    ],
  },
];

// Set start
var start = true;

// Iterate
function iterate(id) {
  // Getting the result display section
  var result = document.getElementsByClassName("result");
  result[0].innerText = "";

  // Getting the question
  const question = document.getElementById("question");

  // Setting the question text
  question.innerText = Questions[id].q;

  // Getting the options
  const op1 = document.getElementById("op1");
  const op2 = document.getElementById("op2");
  const op3 = document.getElementById("op3");
  const op4 = document.getElementById("op4");

  // Providing option text
  op1.innerText = Questions[id].a[0].text;
  op2.innerText = Questions[id].a[1].text;
  op3.innerText = Questions[id].a[2].text;
  op4.innerText = Questions[id].a[3].text;

  // Providing the true or false value to the options
  op1.value = Questions[id].a[0].isCorrect;
  op2.value = Questions[id].a[1].isCorrect;
  op3.value = Questions[id].a[2].isCorrect;
  op4.value = Questions[id].a[3].isCorrect;

  var selected = "";

  // Show selection for op1
  op1.addEventListener("click", () => {
    op1.style.backgroundColor = "lightgoldenrodyellow";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op1.value;
  });

  // Show selection for op2
  op2.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightgoldenrodyellow";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightskyblue";
    selected = op2.value;
  });

  // Show selection for op3
  op3.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightgoldenrodyellow";
    op4.style.backgroundColor = "lightskyblue";
    selected = op3.value;
  });

  // Show selection for op4
  op4.addEventListener("click", () => {
    op1.style.backgroundColor = "lightskyblue";
    op2.style.backgroundColor = "lightskyblue";
    op3.style.backgroundColor = "lightskyblue";
    op4.style.backgroundColor = "lightgoldenrodyellow";
    selected = op4.value;
  });

  // Grabbing the evaluate button
  const evaluate = document.getElementsByClassName("evaluate");

  // Evaluate method
  evaluate[0].addEventListener("click", () => {
    if (selected == "true") {
      result[0].innerHTML = "True";
      result[0].style.color = "green";
    } else {
      result[0].innerHTML = "False";
      result[0].style.color = "red";
    }
  });
}

if (start) {
  iterate("0");
}

// Next button and method
const next = document.getElementsByClassName("next")[0];
var id = 0;

next.addEventListener("click", () => {
  start = false;
  if (id < 2) {
    id++;
    iterate(id);
    console.log(id);
  }
});
