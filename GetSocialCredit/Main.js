socialCredit = 0;
loseChance = 0;

function generateRandomInteger(max) {
    return Math.floor(Math.random() * max) + 1;
}

function Main(){
    loseChance = generateRandomInteger(2);
    if (loseChance == 1){
        socialCredit++;
    } else if(loseChance == 2){
        socialCredit--;
    }
    document.getElementById("SCNum").innerHTML = socialCredit;
}
