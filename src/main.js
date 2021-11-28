
/*CRONOMETRO INICIO */
var hh = 0;
var mm = 0;
var ss = 0;

var tempo = 10; //Quantos milesimos tem 1 segundo.
var cron;

function start() {
  if (cron == undefined) {
    cron = setInterval(() => { timer(); }, tempo);
    alterarCorExecucao(false);
  }
}

function pause() {

  clearInterval(cron);//o clearInterval serve para parar a função dentro do ().
  cron = undefined;
  alterarCorExecucao(true);
}

function stop() {
  //usamos a mesma função do stop e acrescentamos as variaveis para serem zeradas.
  clearInterval(cron);
  hh = 0;
  mm = 0;
  ss = 0;
  cron = undefined;

  document.getElementById('counter').innerText = '00:00:00';
  alterarCorExecucao(false);
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
  if (mm >= 1) {
    alert('Tempo de descanso')
    clearInterval(cron);
    hh = 0;
    mm = 0;
    ss = 0;

    document.getElementById('counter').innerText = '00:00:00';

  }

  var format = (hh < 10 ? '0' + hh : hh) + ':' + (mm < 10 ? '0' + mm : mm) + ':' + (ss < 10 ? '0' + ss : ss);
  document.getElementById('counter').innerText = format


}

/*CRONOMETRO FIM */



function mudarTema() {
  var toggleEhNoturno = document.getElementById('switchTema').checked;
  if (toggleEhNoturno) {
    document.getElementById("cronometro").style.background = "rgb(138, 139, 139)"
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(35, 51, 41,1) 0%, rgba(54, 117, 62,1) 81%, rgba(54, 117, 62,1) 100%)";
  }
  else {
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(238, 54, 41, 0.9) 0%, rgba(239, 72, 61, 0.9) 0.01%, rgba(239, 72, 61, 0.9) 69.88%, rgba(255, 107, 61, 0.9) 100%)";
    document.getElementById("cronometro").style.background = "rgb(238, 139, 139)"
  }
}

function alterarCorExecucao(pausado) {
  var toggleEhNoturno = document.getElementById('switchTema').checked;

  if (toggleEhNoturno && !pausado) {
    document.getElementById("cronometro").style.background = "rgb(138, 139, 139)"
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(35, 51, 41,1) 0%, rgba(54, 117, 62,1) 81%, rgba(54, 117, 62,1) 100%)";
  }
  else if (toggleEhNoturno && pausado) {
    document.getElementById("cronometro").style.background = "rgb(138, 139, 139)"
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(45, 44, 74,1) 0%, rgba(53, 53, 115,1) 81%, rgba(53, 53, 115,1) 100%)";
  }
  else if (!toggleEhNoturno && !pausado) {
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(238, 54, 41, 0.9) 0%, rgba(239, 72, 61, 0.9) 0.01%, rgba(239, 72, 61, 0.9) 69.88%, rgba(255, 107, 61, 0.9) 100%)";
    document.getElementById("cronometro").style.background = "rgb(238, 139, 139)"
  }
  else if (!toggleEhNoturno && pausado) {
    document.getElementById("cronometro").style.background = "rgb(147, 201, 201)"
    document.body.style.background = "-webkit-linear-gradient(0deg, rgba(61,105,255,1) 0%, rgba(50, 88, 217,1) 81%, rgba(50, 88, 217,1) 100%)";
  }
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


/*LISTA TO-DO INICIO */

var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.getElementById("ul");
var item = document.getElementsByTagName("li");

function inputLength() {
  return input.value.length;
}

function createListElement() {
  var li = document.createElement("li");

  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = "";

  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);

  var dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem,);

  function deleteListItem() {
    li.classList.add("delete");
  }
}

enterButton.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}

function addListAfterKeypress() {
  if (inputLength() > 0 && event.which === 13) {
    createListElement();
  }
}
/*LISTA TO-DO FIM */


/*MUDAR COR DO SITE DE ACORDO COM O HORARIO INICIO*/
function carregar() {
  var currentTime = new Date().getHours();
  var myColors, randomize;

  if (6 <= currentTime && currentTime < 12) {

    myColors = document.body.style.background = "-webkit-linear-gradient(0deg, rgba(78, 201, 201) 0%, rgba(78, 201, 201) 0.01%, rgba(78, 201, 201) 69.88%, rgba(156, 238, 238) 100%)";

  } else if (12 <= currentTime && currentTime < 18) {

    myColors = document.body.style.background = "-webkit-linear-gradient(0deg, rgba(238, 54, 41, 0.9) 0%, rgba(239, 72, 61, 0.9) 0.01%, rgba(239, 72, 61, 0.9) 69.88%, rgba(255, 107, 61, 0.9) 100%)";

  } else {

    myColors = document.body.style.background = "-webkit-linear-gradient(0deg, rgba(35, 51, 41,1) 0%, rgba(54, 117, 62,1) 81%, rgba(54, 117, 62,1) 100%)";

  }
  randomize = Math.floor(Math.random() * myColors.length);
  document.body.style.backgroundColor = myColors[randomize];

  console.log(myColors[randomize]);

}


/*MUDAR COR DO SITE DE ACORDO COM O HORARIO INICIO*/