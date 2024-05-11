"use strict";
function myFunction() {
    let x = document.getElementById("warensuche");
    let y = document.getElementById("kategorie");
    let z = document.getElementById("kommentar");
    console.log(x.value);
    console.log(y.value);
    console.log(z.value);
}
function boughtButton() {
    let myElement = document.getElementById("feld01");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function boughtButton02() {
    let myElement = document.getElementById("feld02");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function boughtButton03() {
    let myElement = document.getElementById("feld03");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function boughtButton04() {
    let myElement = document.getElementById("feld04");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function deleteButton() {
    let myElement = document.getElementById("feld01");
    myElement.remove();
}
function deleteButton02() {
    let myElement = document.getElementById("feld02");
    myElement.remove();
}
function deleteButton03() {
    let myElement = document.getElementById("feld03");
    myElement.remove();
}
function deleteButton04() {
    let myElement = document.getElementById("feld04");
    myElement.remove();
}
//# sourceMappingURL=Einkaufsliste.js.map