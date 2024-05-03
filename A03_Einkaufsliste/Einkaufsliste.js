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
for (let entry of exports.data) {
    console.log(entry);
}
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