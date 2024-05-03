function myFunction() {
    var x = document.getElementById("warensuche");
    var y = document.getElementById("kategorie");
    var z = document.getElementById("kommentar");
    console.log(x.value);
    console.log(y.value);
    console.log(z.value);
}
function boughtButton() {
    var myElement = document.getElementById("feld01");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function boughtButton02() {
    var myElement = document.getElementById("feld02");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function boughtButton03() {
    var myElement = document.getElementById("feld03");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function boughtButton04() {
    var myElement = document.getElementById("feld04");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}
function deleteButton() {
    var myElement = document.getElementById("feld01");
    myElement.remove();
}
function deleteButton02() {
    var myElement = document.getElementById("feld02");
    myElement.remove();
}
function deleteButton03() {
    var myElement = document.getElementById("feld03");
    myElement.remove();
}
function deleteButton04() {
    var myElement = document.getElementById("feld04");
    myElement.remove();
}
