
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milesimos tem 1 segundo.
var cron;

function start() {
  if (cron == undefined)
    cron = setInterval(() => { timer(); }, tempo);
}

function pause() {

  clearInterval(cron);//o clearInterval serve para parar a função dentro do ().
  cron = undefined;
}

function stop() {
  //usamos a mesma função do stop e acrescentamos as variaveis para serem zeradas.
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;
  cron = undefined;

  document.getElementById('counter').innerText = '00:00:00'
}

function timer() {

  ss++;

  if (ss == 60) {
    ss = 0;
    mm++;

    if (mm == 60) {
      mm = 0;
      hh++;
    }
  }
  if (mm >= 25) {
    alert('Tempo de descanso')
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00'
  }



  var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
  document.getElementById('counter').innerText = format
}

function mudarTema() {
  var toggleEhNoturno = document.getElementById('switchTema').checked;
  if (toggleEhNoturno)
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(62,4,97,1) 0%, rgba(125,27,112,1) 81%, rgba(184,49,126,1) 100%)";
  else
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(238, 54, 41, 0.9) 0%, rgba(239, 72, 61, 0.9) 0.01%, rgba(239, 72, 61, 0.9) 69.88%, rgba(255, 107, 61, 0.9) 100%)";
}


function modoZen() {
  var modoZenOn = document.getElementById('modoZen').checked;
  if (modoZenOn)
    document.getElementById('counter').style.visibility = "hidden";
  else
    document.getElementById('counter').style.visibility = "visible";
}

//Janela de compartilhamento
function abreJanela() {
  janela = window.open("share.html", "_blank", "width=450, height=180, top=15cm, left=15cm, menubar=0, fullscreen=0, titlebar=0, status=0, top=300px, left= 550px, align-items: center");
}

function fechaJanela() {
  janela.close();
}