function displayDate(tmz){
let date = new Date();
let timezone = tmz;
let h = date.getUTCHours() + timezone;

if (h === -1){
    h = 23;
}

let m = date.getUTCMinutes();
let s = date.getUTCSeconds();
console.log(date);
console.log(h + ":" + m + ":" + s);

return `${h}:${m}:${s}`;
}

setInterval(() => {document.getElementById("anchorage").innerHTML = `${displayDate(-9)}`;
document.getElementById("reykjavik").innerHTML = displayDate(0);
document.getElementById("saintpet").innerHTML = displayDate(+3);
document.getElementById("bruxelles").innerHTML = displayDate(+1);},1000);