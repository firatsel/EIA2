export let data = 
    [
        {product: "Apfel", checked: "clicked", category: "Obst und Gemüse", date: "25.04.2024", amount: 1, 
        comment: " ", delete: "clicked"},
        {product: "Joghurt", checked: "clicked", category: "Milch und Käse", date: "25.04.2024", amount: 1, 
        comment: " ", delete: "clicked"},
        {product: "Kuchen", checked: "clicked", category: "Backwaren", date: "25.04.2024", amount: 1, 
        comment: " ", delete: "clicked"},
        {product: "Waschmittel", checked: "clicked", category: "Haushaltsmittel", date: "25.04.2024", amount: 2, 
        comment: " ", delete: "clicked"}
    ]
    
for (let entry of data) {
    console.log(entry);
}

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

function deleteButton04() {
    let myElement = <HTMLElement>document.getElementById("feld04");
    myElement.remove();
}