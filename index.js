var ran1 = (Math.floor(Math.random()*100) + 1)%6+1;
var ran2 = (Math.floor(Math.random()*100) + 1)%6+1;
var ran1source = "images/D"+ran1 + ".png";
var ran2source = "images/D"+ran2 + ".png";

console.log(ran1 + " " + ran2+" "+ran1source+" "+ran2source);

if(ran1>ran2)
{
    document.querySelector("#i1").setAttribute("src",ran1source);   
    document.querySelector("#i2").setAttribute("src",ran2source) 
    document.querySelector("h1").innerHTML = "Player 1 Won!";
}
else if(ran1<ran2)
{
    document.querySelector("#i1").setAttribute("src",ran1source);
    document.querySelector("#i2").setAttribute("src",ran2source)
    document.querySelector("h1").innerHTML = "Player 2 Won!";
}
else
{
    document.querySelector("#i1").setAttribute("src",ran1source);
    document.querySelector("#i2").setAttribute("src",ran2source)
    document.querySelector("h1").innerHTML = "Its a tie!";
}