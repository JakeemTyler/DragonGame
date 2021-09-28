var ele = document.body.querySelector(".looper");
var ele2 = document.body.querySelector(".second");
var ele3 = document.body.querySelector(".third");

//dragon has to be a number due to storing the damage
var Dragondamage = 0;
//gives back 1 or 2 damage to user constantly
var userDamage = 0;

var condition= true;
//user inputs number of hits to the dragon up to 5

while(condition) {
    var question = Number(prompt("How many times do you want to hit the dragon?"));
    var Randdamage = Math.floor(Math.random() * question) + 1;

    if (Dragondamage > 5) {
        Dragondamage = 1;
    }
    Dragondamage = Dragondamage + Randdamage;

    if (Dragondamage >= 10) {
        condition = false;
        ele2.innerHTML = "You win."
        ele3.innerHTML = "Damage to Dragon " + Dragondamage;
        ele.innerHTML = "User Damage " + userDamage;
    }

// Dragon randomly deals either 1 or 2 damage to the user
    userDamage = userDamage + Math.floor(Math.random() * 2) + 1;

    if (userDamage >= 5) {
        condition = false;
        ele2.innerHTML = "You lose."
        ele3.innerHTML = "Damage to Dragon " + Dragondamage;
        ele.innerHTML = "User Damage " + userDamage;
    }
}