
//Variables
//the user has 45 seconds to answer the questions
var count = 45;
// var audio = newAudio 
//count of right, wrong and unanswered questions
var correctCount = 0;
var wrongCount= 0;
var unansweredCount = 0;


//Start game function
$(document).ready(function() {
    
    //start game with hidden divs
    $("#game-container").hide();
    $("#end-container").hide();

    $("#start-button").on("click", function(){
        
        //hide the start div from the user
        $("#start-container").hide();

        //show the game container div
        $("#game-container").show();

        startCountdown();
        return;
    });

    //counts down and displays the time to the user
    function countdown() {

        //decrements the counter, down from 45 seconds
        count--;

        //display the count to the user in the DOM
        $("#timer").html(count + " Seconds");

// Timer is up scenarios

        //user finishes before the time is up and clicks finished
        $("#done-button").on("click", function() {

            //hide the start div from the user
            $("#start-container").hide();

            //show the game container div
            $("#game-container").hide();

            //show the game container div
            $("#end-container").show();

            //collect the radio inputs
            timeUp();


        //Stop the countdown and run the timeUp function
        //clearInterval (startCountdown)???;
        count = 0;
        return;
        });

        //Finish the game after the timer reaches 0
        if (count == -1) {

            //collect the radio inputs
            timeUp();

            //hide the start div from the user
            $("#start-container").hide();

            // hide the game div from the user
            $("#game-container").hide();

            //show the game container div
            $("#end-container").show()
        }
    }
    //Show the countdown, increment is 1 second
    function startCountdown() {
        setInterval(countdown, 1000);
    }

    //Function to be run after the timer is up
    function timeUp() {

        //Checked values of Radio Buttons user input retrieved
        var q1 = $('input:radio [name = "question1"]:checked').val();
        var q2 = $('input:radio [name = "question2"]:checked').val();
        var q3 = $('input:radio [name = "question3"]:checked').val();
        var q4 = $('input:radio [name = "question4"]:checked').val();
        var q5 = $('input:radio [name = "question5"]:checked').val();
        var q6 = $('input:radio [name = "question6"]:checked').val();
        var q7 = $('input:radio [name = "question7"]:checked').val();
        var q8 = $('input:radio [name = "question8"]:checked').val();
        var q9 =$('input:radio [name = "question9"]:checked').val();
        var q10 =$('input:radio [name = "question10"]:checked').val();

        //determine the right, wrong and unanswered counts
        if(q1 === undefined) {
            unansweredCount++;
        }
        else if (q1 === "Dr. No") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if(q2 === undefined) {
            unansweredCount++;
        }
        else if (q2 === "M") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (q3 === undefined) {
            unansweredCount++;
        }
        else if (q3 === "Goldeneye") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (q4 === undefined) {
            unansweredCount++;
        }
        else if (q4 === "Extortion") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (q5 === undefined) {
            unansweredCount++;
        }
        else if (q5 == "A license to kill") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (q6 === undefined) {
            unansweredCount++;
        }
        else if (q6 === "MI6") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (q7 === undefined) {
            unansweredCount++;
        }
        else if (q7 === " Roger Moore") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (q8 === undefined) {
            unansweredCount++;
        }
        else if (q8 === "Aston Martin DB5") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        
        if (q9 === undefined) {
            unansweredCount++;
        }
        else if (q9 === "Vesper Martini") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        if (q10 === undefined) {
            unansweredCount++;
        }
        else if (q10 === "Adele") {
            correctCount++;
        }
        else {
            wrongCount++;
        }

        //After answers are validated, display the score results
        $("#correct_answers").html(correctCount);
        $("#wrong_answers").html(wrongCount);
        $("#unanswered").hmtl(unansweredCount);

        // Show the end game container div
        $("#end-container").show();
    
    //timer up
    }

});










    
