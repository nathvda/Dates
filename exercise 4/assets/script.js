function displayDate() {
  let DayToShow = new Date();
  let jour = DayToShow.getDay();
  let mois = DayToShow.getMonth();
  let jourMois = DayToShow.getDate();
  let annee = DayToShow.getFullYear();
  let hours = DayToShow.getHours();
  let minutes = DayToShow.getMinutes();
  let seconds = DayToShow.getSeconds();

  switch (jour) {
    case 1:
      jour = "lun";
      break;
    case 2:
      jour = "mar";
      break;
    case 3:
      jour = "mer";
      break;
    case 4:
      jour = "jeu";
      break;
    case 5:
      jour = "ven";
      break;
    case 6:
      jour = "sam";
      break;
    case 7:
      jour = "dim";
      break;
    default:
      jour = "???";
  }

  switch (mois) {
    case 1:
      mois = "jan";
      break;
    case 2:
      mois = "fev";
      break;
    case 3:
      mois = "mars";
      break;
    case 4:
      mois = "avr";
      break;
    case 5:
      mois = "mai";
      break;
    case 6:
      mois = "juin";
      break;
    case 7:
      mois = "juil";
      break;
    case 8:
      mois = "août";
      break;
    case 9:
      mois = "sept";
      break;
    case 10:
      mois = "oct";
      break;
    case 11:
      mois = "nov";
      break;
    case 12:
      mois = "dec";
      break;
    default:
      mois = "???";
  }

  if (seconds < 10){
    seconds = `0${seconds}`;
  }

  if (jourMois < 10){
    seconds = `0${jourMois}`;
  }

  document.getElementById("day").innerHTML = jour;
  document.getElementById("date").innerHTML = `<span>${jourMois} </span><span>${mois}`;
  document.getElementById("year").innerHTML = annee;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

displayDate();
setInterval(displayDate,1000);
