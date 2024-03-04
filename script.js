var secretWord = "apple";
var tries = 5;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
function checkGuess() {
  var guess = document.getElementById("guessInput").value;

  if (guess === secretWord) {
    document.getElementById("message").textContent = "Congratulations! You guessed the word correctly.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ";
  } else {
    tries--;
    document.getElementById("message").textContent = "Wrong guess! You have " + tries + " tries left";
  }                                                              
 
  if (tries === 0)                {
    document.getElementById("message").textContent = "Game over! The secret word was apple";
    document.getElementById("guessInput").disabled = true;
  }

  document.getElementById("guessInput").value = "";              
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  