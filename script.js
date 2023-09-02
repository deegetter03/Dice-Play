function roll() {

    var randomNumber1 = Math.floor(Math.random() * 6) + 1;  //for selecting 1-6
    var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png-dice6.png
    var randomImageSource = "img/" + randomDiceImage; //img/dice1.png-img/dice2.png

    var img1 = document.querySelectorAll("img")[0];
    img1.setAttribute("src", randomImageSource);

    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    var randomImageSource2 = "img/dice" + randomNumber2 + ".png";
    document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

    if (randomNumber1 > randomNumber2) {
        document.querySelector(".Result").innerHTML = "🚩Player 1 Wins!";
    }
    else if (randomNumber2 > randomNumber1) {
        document.querySelector(".Result").innerHTML = "Player 2 Wins!🚩";
    }
    else {
        document.querySelector(".Result").innerHTML = "🚩Draw! 🚩";
    }
}

document.querySelector(".btn").addEventListener("click", roll);