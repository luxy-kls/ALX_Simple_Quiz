function checkAnswer(){
let correctAnswer = "4";
document.querySelector('input[name="quiz"]:checked');
let userAnswer = selectedOption ? selectedOption.value : null; 

let feedback = document.getElementById("feedback");

//comparing answers
if (userAnswer === correctAnswer){
     feedback.textContent = "Correct! Well done.";
} else{
    feedback.textContent = "That's incorrect. Try again!";
}
}


//adding event listener to submit button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);