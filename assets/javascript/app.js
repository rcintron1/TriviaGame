// Use some cool css/jquery to introduce the game
$(document).ready(function() {
  //jumbotron code
  jumbo = $("#title");
  jumbo
    .css("font-family", "lora")
    .hide()
    .html("the Trivia <i>Game</i>")
    .slideDown(3000,function(){
      intro = $(".jumbotron p")
      intro.hide();
      intro.html('A simple css/javascript/Jquery trivia, running on css/javascript and Jquery');
      intro.fadeIn(5000);
      });
  //navbar code
  navbar = $(".navbar");
  navbar.hide();
  navbar.animate({width:'toggle'},4000);

});

// timer function for use globally
timer = {
  timerID:"",
  start:function(task,seconds) {
    if(!timerID){
      timerID=setTimeout(task,seconds)//may use setInterval depending on code
    }
  },
  stop:function(){
    clearTimeout(this.timerID);
    this.timerID = "";
  }
}
// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// The scenario is similar for wrong answers and time-outs.

// If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.

// If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
