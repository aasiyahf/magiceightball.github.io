// A string array containing potential answers from the magic eight ball
var replies = ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook no so good", "Very doubtfull"];

// Function which refreshes the page in order to reshow the question asked and display an answer
var generateAns = function() {
  // store the question asked to print out when page is reloaded
  var $answer = $("#Qanswer");
  var answer = $answer.val();
  // make ball show answer
  $(".eightBall").text(answer);
  // hide description to change it
  $(".description").hide();
  // hide other visual parts of header unnecessary to answer
  $(".line").hide();
  $(".inputBar").hide();
  $(".askMe").hide();

/*
  // Generate a random number from 0-19
  var randomNum = Math.floor(Math.random() * 20);
  // retrieve answer at index of random number
  var ballAns = replies[randomNum];
*/

  var ballAns
  // Crate appropriate message if no question was typed
  if (answer === "") {
    ballAns = "Reload the page to enter a question."
    $(".description").text(ballAns);
    $(".description").show();
  } else {
    $.ajax({
      url: "http://localhost:3000/answer",
      data: {
        zipcode: 97201
      },
      success: function( result ) {
        ballAns = result
        console.log("Got answer: ", ballAns)
        $(".ball .eight").css("background","black");
        $("#answer").attr("src",ballAns);
        $("#answer").show();
      }
    });
  }
};

// // Refresh page and show answer to question asked for magic eight ball
// $(function(){
//     $(".askBtn").click(function() {
//         generateAns();
//     });
// });

// Refresh page and show answer to question asked for magic eight ball
$(function(){
  $(".askBtn").on("click", function() {
    generateAns();
  });
});
