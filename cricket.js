//alert(Math.floor(Math.random()*11));
var total=0;

function one()
{
    batsman=1;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function two()
{
    batsman=2;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function three()
{
    batsman=3;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function four()
{
    batsman=4;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function five()
{
    batsman=5;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}

function six()
{
    batsman=6;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function seven()
{
    batsman=7;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function eight()
{
    batsman=8;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function nine()
{
    batsman=9;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function ten()
{
    batsman=10;
    document.getElementById('bat').innerHTML=batsman;

    var bowler=Math.floor(Math.random()*11);
    document.getElementById('ball').innerHTML=bowler;

    if(batsman==bowler){
    alert("Out!");
}else
{
    Count();
}
}


function Count()
{
    total=total+batsman;
    document.getElementById('score').innerHTML=total;

}
