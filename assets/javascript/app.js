// Use some cool css/jquery to introduce the game
$(document).ready(function() {
  //jumbotron code
  navbar = $(".navbar");
  jumbo = $("#title");
  jumbo
    .css("font-family", "lora")
    .hide()
    .html("the Tri<font color='red'>v</font>ia <i>Game</i>")
    .slideDown(1500, function() {
      intro = $(".jumbotron p")
      // intro.hide();
      intro.fadeIn(3000);
      navbar.animate({
        width: 'toggle'
      }, 2000);
    });

});

// use the array of questions to keep the game active.
// as soon as you run out of questions, end game.
trivia = {
  questionNum: "",
  timerID: "",
  textAnswer: "",
  answered: 0,
  correct: 0,
  incorrect: 0,
  div: $(".questions"),
  startTimer: function(task, seconds) {
    if (!trivia.timerID) {
      trivia.timerID = setTimeout(task, seconds) //may use setInterval depending on code
    }
  },
  stop: function() {
    clearTimeout(trivia.timerID);
    trivia.timerID = "";
  },
  ask: function() {
    if (!trivia.questionNum) {
      trivia.questionNum = 0;
      trivia.loadQuestion(questions[trivia.questionNum]);
      trivia.questionNum++;
      trivia.startTimer(trivia.answer, 5000);
    } else if (trivia.questionNum < questions.length) {
      trivia.loadQuestion(questions[trivia.questionNum]);
      trivia.questionNum++;
      trivia.startTimer(trivia.answer, 5000);
    } else {
      console.log("No More Questions")
    }
  },
  loadQuestion: function(q) { //for use by 'ask' to load content on page
    console.log(q);
    h2 = $("<h2>");
    list = $("<ul>");
    trivia.textAnswer = q.answer;
    h2.append(q.question);
    trivia.div.html(h2);
    trivia.divToggle();
    $.each(q.options, function(index, option) {
      list.append('<li><h3 class="option">' + option + '</h3></li>')
    });
    list.appendTo(trivia.div);
    $(".option").on("click", trivia.answer);
  },
  answer: function() { //action taken when time runs out or li was clicked
    console.log(this.innerHTML);
    trivia.divToggle();
    if (this.innerHTML === trivia.textAnswer) {
      console.log("Got it right");
    } else{
      console.log("Got it wrong");
    }
    trivia.timerID = "";
    trivia.ask();
  },
  divToggle: function() {
    this.div.animate({
      width: 'toggle'
    }, 500);
  }
}

$("#start-game").on("click", trivia.ask);
questions = [{
    "question": "What is bootstrap?",
    "options": ["a part of a boot", "a jquery library for formatting CSS", "a front-end framework"],
    "answer": "a front-end framework"
  },
  {
    "question": "What is CSS?",
    "options": ["Cascading Styling Shots", "Cascading Stalling Sheets", "Cascading Style Sheets"],
    "answer": "Cascading Style Sheets"
  },
  {
    "question": "What does $('.target').hide(1000) do?",
    "options": ["Hides .target to a size of 1000px", "Hides .target in a second", "Hides the div in a second"],
    "answer": "Hides .target in a second"
  }
]

function startgame() {
  console.log(this)
}
