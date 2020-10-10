    /*jshint esversion: 6 */
    //game values
    let min =1,
          max=10,
          winningNum=2,
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

    //listen for guess
    guessBtn.addEventListener('click',function(){
      let guess=parseInt(guessInput.value);
      if(isNaN(guess)||guess < min || guess> max ){
        setMessage(`Please enter number between ${min} and ${max}`,"red");
      }
      //check if won
      if(guess === winningNum){
        guessInput.disabled = true;
        guessInput.style.borderColor='green';
        setMessage(`${winningNum} is correct! You win!`,'green');

      }else {

      }
    });
    function setMessage(mess,color){
      message.style.color=color;
      message.textContent=mess;
    }






