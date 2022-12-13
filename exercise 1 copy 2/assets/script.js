function inFuture(){
let date = new Date().getTime();
let inputGotten = document.getElementById("HoursInput").value;
let milli = date + (inputGotten * 1000 * 60 * 60);
 
let dateNew = new Date(milli);
document.getElementById("whatTime").innerHTML = dateNew;

}


let inputChamp = document.getElementById("HoursInput")

inputChamp.addEventListener("keyup", inFuture);