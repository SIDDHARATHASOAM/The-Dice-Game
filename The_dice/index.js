var randomNumberPlayer1 = Math.floor(Math.random()*6) +1;
var randomNumberPlayer2 = Math.floor(Math.random()*6) +1;
console.log(randomNumberPlayer1);
console.log(randomNumberPlayer2);

function winner()
{

if(randomNumberPlayer1>randomNumberPlayer2)
{
    document.getElementById("header").textContent = "Player 1 is win!";
}
else if(randomNumberPlayer2>randomNumberPlayer1)
{
    document.getElementById("header").textContent = "Player 2 is win!";
}
else{
    document.getElementById("header").textContent = "Wow You Both Are Lucky!";
}
//  add icon of dice
switch(randomNumberPlayer1)
{
    case 1:
        document.getElementById("dic-player-1").src =    "/img/dic1.png";
        break;
    case 2:
        document.getElementById("dic-player-1").src =    "/img/dic2.png";
        break;
    case 3:
        document.getElementById("dic-player-1").src =    "/img/dic3.png";
        break;
    case 4:
        document.getElementById("dic-player-1").src =    "/img/dic4.png";
        break;
    case 5:
        document.getElementById("dic-player-1").src =    "/img/dic5.png";
        break;
    case 6:
        document.getElementById("dic-player-1").src =    "/img/dic6.png";
        break;

}
switch(randomNumberPlayer2)
{
    case 1:
        document.getElementById("dic-player-2").src =    "/img/dic1.png";
        break;
    case 2:
        document.getElementById("dic-player-2").src =   "/img/dic2.png";
    case 3:
        document.getElementById("dic-player-2").src =   "/img/dic3.png";
        break;
    case 4:
        document.getElementById("dic-player-2").src =    "/img/dic4.png";
        break;
    case 5:
        document.getElementById("dic-player-2").src =  "/img/dic5.png";
        break;
    case 6:
        document.getElementById("dic-player-2").src =    "/img/dic6.png";
        break;

}
}
