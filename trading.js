const displayTime = document.querySelector(".display-time");
// Time
function showTime() {
  let time = new Date();
  displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false });
  setTimeout(showTime, 1000);
}

showTime();


// Date
function updateDate() {
  let today = new Date();

  // return number
  let dayName = today.getDay(),
    dayNum = today.getDate(),
    month = today.getMonth(),
    year = today.getFullYear();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const dayWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  // value -> ID of the html element
  const IDCollection = ["day", "daynum", "month", "year"];
  // return value array with number as a index
  const val = [dayWeek[dayName], dayNum, months[month], year];
  for (let i = 0; i < IDCollection.length; i++) {
    document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
  }
}

updateDate();
//comment section
var comentarios = document.getElementById("comentarios");
var boton = document.getElementById("boton");
var textarea = document.getElementById("textarea");
var nombre = document.getElementById("nombre");
var name;
var edicion = false;
function anadir() {
  if (
    textarea === null ||
    textarea.value.length === 0 ||
    /^\s+$/.test(textarea.value)
  ) {
    textarea.value = "";
    textarea.focus();
  } else if (edicion === false) {
    if (
      nombre === null ||
      nombre.value.length === 0 ||
      /^\s+$/.test(nombre.value)
    ) {
      name = "Anónimo";
    } else {
      name = nombre.value;
    }
    var div = document.createElement("div");
    comentarios.appendChild(div);
    var pnom = document.createElement("p");
    var p = document.createElement("p");
    var hr = document.createElement("hr");
    var eliminar = document.createElement("input");
    var editar = document.createElement("input");
    var fecha = new Date();
    var dia = fecha.getDate();
    var mes;
    switch (fecha.getMonth()) {
      case 0:
        mes = "January";
        break;
      case 1:
        mes = "February";
        break;
      case 2:
        mes = "March";
        break;
      case 3:
        mes = "April";
        break;
      case 4:
        mes = "May";
        break;
      case 5:
        mes = "June";
        break;
      case 6:
        mes = "July";
        break;
      case 7:
        mes = "Agust";
        break;
      case 8:
        mes = "September";
        break;
      case 9:
        mes = "October";
        break;
      case 10:
        mes = "November";
        break;
      case 11:
        mes = "December";
        break;
      default:
        break;
    }
    var year = fecha.getFullYear();
    var hora = fecha.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    pnom.innerHTML =
      "Name of the person is " +
      name +
      " ,date " +
      dia +
      " month " +
      mes +
      " year " +
      year +
      " and time is " +
      hora +
      ":" +
      minutos +
      ".";
    p.innerHTML = textarea.value;
    pnom.setAttribute("class", "pnom");
    p.setAttribute("class", "p");
    hr.setAttribute("class", "hr");
    eliminar.setAttribute("class", "eliminar");
    editar.setAttribute("class", "edit");
    div.appendChild(pnom);
    div.appendChild(p);
    div.appendChild(eliminar);
    div.appendChild(editar);
    div.appendChild(hr);
    textarea.value = "";
    nombre.value = "";
    eliminar.type = "button";
    eliminar.value = "Clear";
    editar.type = "button";
    editar.value = "Edit";
    textarea.focus();
  }
  function eliminarc() {
    div.remove();
  }
  eliminar.addEventListener("click", eliminarc);
  function editarc() {
    var botone = document.createElement("input");
    botone.type = " button";
    botone.value = "Confirm";
    div.replaceChild(botone, editar);
    botone.setAttribute("class", "botone");
    textarea.value = p.innerText;
    p.innerHTML = "";
    nombre.value = name; 
    textarea.focus();
    edicion = true;
    function edicionc() {
      if (
    textarea === null ||
    textarea.value.length === 0 ||
    /^\s+$/.test(textarea.value)
  ) {textatera.value = "";
    textarea.focus();} else {
      if (
      nombre === null ||
      nombre.value.length === 0 ||
      /^\s+$/.test(nombre.value)
    ) {
      name = "Anónimo";
    } else {
      name = nombre.value;
    }
      var fecha = new Date();
    var dia = fecha.getDate();
    var mes;
    switch (fecha.getMonth()) {
      case 0:
        mes = "January";
        break;
      case 1:
        mes = "February";
        break;
      case 2:
        mes = "March";
        break;
      case 3:
        mes = "April";
        break;
      case 4:
        mes = "May";
        break;
      case 5:
        mes = "June";
        break;
      case 6:
        mes = "July";
        break;
      case 7:
        mes = "Agust";
        break;
      case 8:
        mes = "September";
        break;
      case 9:
        mes = "October";
        break;
      case 10:
        mes = "November";
        break;
      case 11:
        mes = "December";
        break;
      default:
        break;
    }
    var year = fecha.getFullYear();
    var hora = fecha.getHours();
    if (hora < 10) {
      hora = "0" + hora;
    }
    var minutos = fecha.getMinutes();
    if (minutos < 10) {
      minutos = "0" + minutos;
    }
    pnom.innerHTML =
      "Name of the person is " +
      name +
      " ,date " +
      dia +
      " month " +
      mes +
      " year " +
      year +
      " and time is " +
      hora +
      ":" +
      minutos +
      ".";
      p.innerHTML = textarea.value;
      div.replaceChild(editar, botone);
      textarea.value = "";
      nombre.value = "";
      textarea.focus();
      edicion = false;
      }
    }
    botone.addEventListener("click", edicionc);
  }
  editar.addEventListener("click", editarc);
}
boton.addEventListener("click", anadir);
function enter(event) {
  var codigo = event.keyCode;
  if (codigo == 13) {
    anadir();
    }
}
  textarea.addEventListener("keypress", enter);


























  