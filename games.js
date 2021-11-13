function left(posLeft) {
document.getElementById('mario').style.marginLeft  =(posLeft-10)+"px";   
}

function right(posLeft) {
document.getElementById('mario').style.marginLeft  =(posLeft+10)+"px";
}
function up(posTop) {
document.getElementById('mario').style.marginTop  =(posTop-700)+"px";   
}

function down(posTop) {
document.getElementById('mario').style.marginTop  =(posTop-650)+"px";      
}

document.addEventListener('keypress', function(e) {


     let posLeft = document.getElementById('mario').offsetLeft;
     let posTop = document.getElementById('mario').offsetTop;
     let event = e || window.event;

       switch (event.keyCode) {
 
             case 113:
 {     
             verif();                   
               if ( posLeft > 375)  {
             left(posLeft),
             refresch ();
             break;
 }}
             case 100:
 {
               if ( posLeft < 1010)  {
             right(posLeft),
             refresch ();            
             break;
 }}
             case 122:
 {
               if ( posTop > 500) {               
               
                  let testDiv = document.getElementById("mario");
                  let marginTop = -60;
              
                const moove = setInterval(() => {

                  marginTop += -3,
                  testDiv.style.marginTop = marginTop + "px";
                    
                  if(marginTop <= -90){
                  posTop += 3,
                  document.getElementById('mario').style.marginTop  =(posTop-690)+"px";      
                    
                  if (posTop < 632)  { 
                      return(true);
                  }
                    
                  clearInterval(moove);
                }} , 60);      
                refresch ()
             break;
 }}
             case 115:
 {
               if (posTop < 600)  {
             down(posTop),
             refresch ();
             break;
 }}
 }});

function Collision() {

  let testDiv = document.getElementById("mario");
  let testDiv2 = document.getElementById("goomba");
  let x = testDiv.offsetLeft;
  let x2 = testDiv2.offsetLeft;
  let w2 = testDiv2.offsetWidth;
 
  if( x < x2+w2) {
    return(true);
  }

  if( x != x2+w2 )  {
  return(false);
  }}

function verif() {
  if (Collision() === true)  {
   alert("GameOver!!");
  }}

let i = 0;
onkeydown = detectKeypress;
function detectKeypress(c) {

    c = c || window.event;
    if (c.keyCode == '90'){      
    result(++i);
      }
}
function result(val) {
  document.getElementById("compteur").innerHTML = val;
}

function buttonClickGET() {
  let url = "https://api.openweathermap.org/data/2.5/weather?q=Marseille,fr&appid=c21a75b667d6f7abb81f118dcf8d4611&units=metric"

  $.get(url, callBackGetSuccess).done(function() {
      //alert( "second success" );
    })
    .fail(function() {
      alert( "error" );
    })
    .always(function() {
      //alert( "finished" );
    });
}
let callBackGetSuccess = function(data) {
  let element = document.getElementById("zone_meteo");
  element.innerHTML = "La temperature est de " +  data.main.temp ;
}

function affichZero(nombre) {
  return nombre < 10 ? '0' + nombre : nombre;  
}

function dateEtHeure() {   
  const infos = new Date();
  
document.getElementById('heure_exacte').innerHTML = ' ' + affichZero(infos.getHours()) + ':' + affichZero(infos.getMinutes());
}

  window.onload = function() {
  setInterval("dateEtHeure()", 100);

};



let myHeaders = new Headers();
myHeaders.append('Accept-Encoding', 'br');

let myInit = {    method: 'GET',
                  headers: myHeaders,
                  mode: 'cross-origin',
                  cache: 'default'
};

fetch('http://localhost:3000/users')
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(e => console.log(e) )




class Personnage {
        constructor(name, height, weight) {
    
    this.name = name;
    this.height = height;
    this.weight = weight;
  }}
  
  let mario = new Personnage ('Mario: ', '60px', '60px');
  let goomba = new Personnage ('Goomba: ', '35px', '35px');

  console.log(mario.name +" "+mario.height+", "+mario.weight),
  console.log(goomba.name +" "+goomba.height+", "+goomba.weight);
  
