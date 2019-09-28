let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");
let scoreOne = document.querySelector("#scoreOne");
let scoreTwo = document.querySelector("#scoreTwo");
let userInput = document.querySelector("input");
let winningScoreDisplay = document.querySelector("#maxScore");
let result = document.querySelector(".result");
let resetButton = document.getElementById("reset");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winningScore = 5;

p1.addEventListener("click",function(){
	if(!gameOver){

		p1Score++;

		if(p1Score === winningScore){
			scoreOne.classList.add("winner");
			result.textContent = "PLAYER ONE WINS!!!";
			result.classList.add("winner");
			gameOver = true;
		}

		scoreOne.textContent = p1Score;
	}
});

p2.addEventListener("click",function(){
	if(!gameOver){

		p2Score++;

		if(p2Score === winningScore){
			scoreTwo.classList.add("winner");
			result.textContent = "PLAYER TWO WINS!!!";
			result.classList.add("winner");
			gameOver = true;
		}

		scoreTwo.textContent = p2Score;

	}
});


userInput.addEventListener("change",function(){

	winningScoreDisplay.textContent = userInput.value; //THIS IS A STRING VALUE
	winningScore = Number(userInput.value); //TYPE CAST NUMBER
	reset();

});

resetButton.addEventListener("click",function(){
	reset();
});

function reset(){
	p1Score = 0;
	p2Score = 0;
	gameOver = false;
	result.textContent = "Score Keeper";
	result.classList.remove("winner");
	scoreOne.textContent = p1Score;
	scoreOne.classList.remove("winner");
	scoreTwo.textContent = p2Score;
	scoreTwo.classList.remove("winner");
}