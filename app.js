var ele = document.body.querySelector(".looper");

//dragon has to be a number due to storing the damage
var Dragon = 0;
//gives back 1 or 2 damage to user constantly
var userDamage = 0;

var condition= true;
//user inputs number of hits to the dragon up to 5
    while(condition)
 var question = Number(prompt("How many times do you want to hit the dragon?"));
    if(question=== Dragon<10 && userDamage<5){
    condition=false;
    ele.innerHTML ="Ya done now";
    }

//generates random number from user input to 10
var damage = Math.floor(Math.random() * question) + 1;
// how much damage I'm adding to the dragon

//if dragon damage is less than 5 it will do that random number
 if (damage<5){
     Dragon=Dragon+damage;
 }
 //if damage is more than 5it will only do 1 damage to the dragon
 if (damage>5){
     Dragon=Dragon+1;
 }

// Dragon randomly deals either 1 or 2 damage to the user
userDamage=userDamage+Math.floor(Math.random() * 2)+ 1;

//if else statements at end
if (Dragon<10){
    ele.innerHTML="You win";
//continues
} else {
    ele.innerHTML="You lose";
}

if (userDamage<5){
    ele.innerHTML="You lose";
//user will continue to get damage
} else {
    ele.innerHTML="You lose";
}