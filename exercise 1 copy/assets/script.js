function oldYet(day){
let date = new Date().getTime();
let dateBirth = new Date(`${day}`).getTime();
let milli = date - dateBirth;
 
let daysSince = Math.floor((milli / (1000 * 60 * 60 * 24)));

console.log(daysSince);
return daysSince;
}

setInterval(() => {

    document.getElementById("howOld").innerHTML = `Jours depuis la naissance : ${oldYet("1994-06-16")}`;
    document.getElementById("howManyDays").innerHTML = `Jours depuis le dernier Halloween : ${oldYet("2022-10-31")}`;}
    , 1000);