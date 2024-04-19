function myFunction() {
    let x = <HTMLInputElement>document.getElementById("warensuche");
    let y = <HTMLInputElement>document.getElementById("kategorie");
    let z = <HTMLInputElement>document.getElementById("kommentar");
    console.log(x.value);
    console.log(y.value);
    console.log(z.value);
}

function myCheck() {
    let myElement = <HTMLElement>document.getElementById("feld01");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}

function myCheck02(){
    let myElement = <HTMLElement>document.getElementById("feld02");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}

function myCheck03(){
    let myElement = <HTMLElement>document.getElementById("feld03");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}

function myCheck04(){
    let myElement = <HTMLElement>document.getElementById("feld04");
    myElement.style.background = "green";
    myElement.style.color = "white";
    console.log(new Date().toLocaleString());
}