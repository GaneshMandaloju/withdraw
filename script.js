let amount = document.getElementById("amount")
let amt = 5000
amount.textContent=" Amount : " + amt
function btn1(){
    amt -= 100
    if(amt<=0){

        amount.textContent="Amount : Insufficient funds"
    } else{

        amount.textContent="Amount : " + amt
    }
}
function btn2(){
    amt -= 200
    if(amt<=0){

        amount.textContent="Amount : Insufficient funds"
    } else{

        amount.textContent="Amount : " + amt
    }
}
function btn3(){
    amt -= 500
    if(amt<=0){

        amount.textContent="Amount : Insufficient funds"
    } else{

        amount.textContent="Amount : " + amt
    }
}
function btn4(){
    amt -= 1000
    if(amt<=0){

        amount.textContent="Amount : Insufficient funds"
    } else{

        amount.textContent="Amount : " + amt
    }
}
function btn5(){
    amt -= 2000
    if(amt<=0){

        amount.textContent="Amount : Insufficient funds"
    } else{

        amount.textContent="Amount : " + amt
    }
}
function btn6(){
    amt -= 5000
    if(amt<=0){

        amount.textContent="Amount : Insufficient funds"
    } else{

        amount.textContent="Amount : " + amt
    }
}


function check(){
    if(amt<=0){

        amount.textContent="Amount : Insufficient funds"
    } else{

        amount.textContent="Amount : " + amt
    }
}