// program to guess a number 

let num = Math.floor(Math.random() *10 + 1);

let guesses = 0;

document.getElementById("submitbtn").onclick = function() {

  let guess = document.getElementById("fieldtext").value;
  guesses++;

  if (guess == num){
    alert(`you got correct the number is ${num}`);
  }
  else if(guess < num) {
    alert(`the number is lower`);

  }
  else{
    alert(`the number is higher`);

  }

}
