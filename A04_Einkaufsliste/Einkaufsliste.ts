function myFunction() {
    let x = <HTMLInputElement>document.getElementById("warensuche");
    let y = <HTMLInputElement>document.getElementById("kategorie");
    let z = <HTMLInputElement>document.getElementById("kommentar");
    console.log(x.value);
    console.log(y.value);
    console.log(z.value);
}

function boughtButton() {
    let myElement = <HTMLElement>document.getElementById("feld01");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}

function boughtButton02() {
    let myElement = <HTMLElement>document.getElementById("feld02");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}

function boughtButton03() {
    let myElement = <HTMLElement>document.getElementById("feld03");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}

function boughtButton04() {
    let myElement = <HTMLElement>document.getElementById("feld04");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}

function deleteButton() {
    let myElement = <HTMLButtonElement>document.getElementById("feld01");
    myElement.remove();
}

function deleteButton02() {
    let myElement = <HTMLButtonElement>document.getElementById("feld02");
    myElement.remove();
}

function deleteButton03() {
    let myElement = <HTMLButtonElement>document.getElementById("feld03");
    myElement.remove();
}

function deleteButton04() {
    let myElement = <HTMLButtonElement>document.getElementById("feld04");
    myElement.remove();
}