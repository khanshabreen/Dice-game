var randomNumber1=Math.random();

randomNumber1=Math.floor((randomNumber1*6)+1);

var img1="images/dice"+randomNumber1+".png";
document.querySelectorAll("img")[0].setAttribute("src",img1);

var randomNumber2=Math.random();

randomNumber2=Math.floor((randomNumber2*6)+1);

var img2="images/dice"+randomNumber2+".png";
document.querySelectorAll("img")[1].setAttribute("src",img2);
var win;
if(randomNumber1==randomNumber2)
{
    document.querySelector("h1").innerHTML="Draw!"; 
}
else if(randomNumber1>randomNumber2)
{
    win=1;
    document.querySelector("h1").innerHTML="player"+win+" win 🚩";
}
else{
    win=2;
    document.querySelector("h1").innerHTML="player"+win+" win 🚩";
}

