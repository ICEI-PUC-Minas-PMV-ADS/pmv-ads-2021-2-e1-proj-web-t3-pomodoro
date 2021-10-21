
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 1000; //Quantos milesimos tem 1 segundo.
var cron;

function start() {

  cron = setInterval(() => { timer(); }, tempo);
}

function pause() {

  clearInterval(cron);//o clearInterval serve para parar a função dentro do ().
}

function stop() {
  //usamos a mesma função do stop e acrescentamos as variaveis para serem zeradas.
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;

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