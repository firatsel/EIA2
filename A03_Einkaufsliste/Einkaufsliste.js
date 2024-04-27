"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.data = void 0;
exports.data = [
    { product: "Apfel", checked: "clicked", category: "Obst und Gemüse", date: "25.04.2024", amount: 1,
        comment: " ", delete: "clicked" },
    { product: "Joghurt", checked: "clicked", category: "Milch und Käse", date: "25.04.2024", amount: 1,
        comment: " ", delete: "clicked" },
    { product: "Kuchen", checked: "clicked", category: "Backwaren", date: "25.04.2024", amount: 1,
        comment: " ", delete: "clicked" },
    { product: "Waschmittel", checked: "clicked", category: "Haushaltsmittel", date: "25.04.2024", amount: 2,
        comment: " ", delete: "clicked" }
];
for (var _i = 0, data_1 = exports.data; _i < data_1.length; _i++) {
    var entry = data_1[_i];
    console.log(entry);
}
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
function deleteButton04() {
    var myElement = document.getElementById("feld04");
    myElement.remove();
}
