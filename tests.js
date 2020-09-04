"use strict";

var answers;
var test = document.title;
switch (test)
{
	case 'Математика': answers = ['б', 'б', 'в', 'б', 'б', 'а', 'в', 'а', 'б', 'б']; break;
	case 'Човекът и природата': answers = ['б', 'а', 'а', 'в', 'б', 'в', 'в', 'в', 'а', 'в']; break;
	case 'Човекът и обществото': answers = ['а', 'в', 'а', 'б', 'а', 'б', 'в', 'б', 'в', 'а']; break;
	case 'Български език': answers = ['в', 'а', 'в', 'в', 'б', 'б', 'б', 'а', 'в', 'в']; break;
	case 'Английски език': answers = ['d', 'c', 'c', 'a', 'c', 'c', 'a', 'b', 'd', 'c']; break;
}

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

var startButton = document.getElementById('startbtn');
var timeRunning;

var correctAnswers = document.getElementById('correctanswers');
correctAnswers.style.display = "none";

function results(answers, quizContainer, resultsContainer, startButton, submitButton, correctAnswers){
    
        function startTimer(duration, display) {
            var timer = duration;
            var minutes;
            var seconds;

            function time () {
                minutes = parseInt(timer / 60, 10);
                seconds = parseInt(timer % 60, 10);

                minutes = minutes < 10 ? "0" + minutes : minutes;
                seconds = seconds < 10 ? "0" + seconds : seconds;

                display.textContent = minutes + ":" + seconds;

               if (timer-- < 0) {
                    timer = 0;
                }
            }

            timeRunning = setInterval(time, 1000);
        }
        

        startButton.onclick = function() {
            var tenMinutes = 600;
            var display = document.getElementById('time_remaining');
            startTimer(tenMinutes, display);
        };


    function show(answers, quizContainer, resultsContainer){ 

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;

        for(var i=0; i<answers.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+(i+1)+']:checked') || {}).value;
            
            if(userAnswer == answers[i]){
                numCorrect++;
                quizContainer.getElementsByClassName("question")[i].style.color = 'green';
            }

            else{
                quizContainer.getElementsByClassName("question")[i].style.color = 'red';
            }
        }

        if(test == "Английски език"){
            resultsContainer.innerHTML = 'Result: ' + numCorrect + ' out of ' + answers.length;
        }

        else{
            resultsContainer.innerHTML = 'Резултат: ' + numCorrect + ' от ' + answers.length;
        }
    }

    submitButton.onclick = function(){
        clearTimeout(timeRunning);

        show(answers, quizContainer, resultsContainer);
    
        if(correctAnswers.style.display === "none")
        {
           correctAnswers.style.display = "block";
        }
    }
}


results(answers, quizContainer, resultsContainer, startButton, submitButton, correctAnswers);