
function score(){
let size = document.querySelector("#size").value
let age = document.querySelector("#age").value
let breit = document.querySelector("#breit").checked
let schmal = document.querySelector("#schmal").checked
let output = document.querySelector("#output")
ergebnissSchmal = Math.round((size - 100) + (age/10) * 0.9 * 0.9)
ergebnissBreit = Math.round((size - 100) + (age/10) * 0.9 * 1.1)
console.log(size, age, breit, schmal);

if(schmal){
output.innerHTML = ergebnissSchmal + " " + "kg"
} else if(breit){
output.innerHTML = ergebnissBreit + " " + "kg"
} else{
        output.innerHTML = "gib deinen Figur an!"}
}
