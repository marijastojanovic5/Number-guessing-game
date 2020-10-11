    /*jshint esversion: 6 */
    //game values
    let min =1,
          max=10,
          winningNum=getNum(min,max),
          guessesLeft=3;

    //UI elements
    const game=document.querySelector('#game'),
          minNum=document.querySelector('.min-num'),
          maxNum = document.querySelector('.max-num'),
          guessBtn=document.querySelector('#guess-btn'),
          guessInput=document.querySelector('#guess-input'),
          message=document.querySelector('.message');

    //assign min and max
    minNum.textContent=min;
    maxNum.textContent=max;
    //play again event Listener
    game.addEventListener('mousedown',function(e){
      if(e.target.className === 'play-again'){
        window.location.reload();
      }
    });

    //listen for guess
    guessBtn.addEventListener('click',function(){
      let guess = parseInt(guessInput.value);
      if(isNaN(guess)||guess < min || guess> max ){
        setMessage(`Please enter number between ${min} and ${max}`,"red");
      }
      //check if won
      if(guess === winningNum){
        gameOver(true,`${winningNum} is correct! You win!`);

      }else {
        guessesLeft -= 1;
        if(guessesLeft === 0){
        gameOVer(false,`Game over, you lost! Winning number was ${winningNum}`);

        }else {
          guessInput.style.borderColor='red';
          guessInput.value='';
          
          setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');

        }

      }
    });
    //game over
    function gameOver(won,msg){
      let color;
      won === true ? color='green': color= 'red';
        guessInput.disabled = true;
        guessInput.style.borderColor=color;
        message.style.color=color;
        setMessage(msg);

        //play again
        guessBtn.value='Play Again';
        guessBtn.className += 'play-again';
    }
   //get winning-random num
    function getNum(min,max){
      return Math.floor(Math.random()*(max-min+1)+min);


    }
    //set Message
    function setMessage(msg,color){
      message.style.color=color;
      message.textContent=msg;
    }






