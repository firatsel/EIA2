namespace aufgabe1 {
    
let subject: string[] = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"]
let predicate: string[] = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"]
let object: string[] = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"]

for (let i = subject.length; i >= 1; i--) {
    console.log("Laufvariable:", i)
    getVerse(subject, predicate, object)
}

function getVerse(_subject: string[], _predicate: string [], _object: string[]) { 
    let verse: string = "";
    let randomNumber1: number = Math.floor(Math.random()*subject.length);
    let randomNumber2: number = Math.floor(Math.random()*predicate.length);
    let randomNumber3: number = Math.floor(Math.random()*object.length);
    verse += subject[randomNumber1] + " " + predicate[randomNumber2] + " " + object[randomNumber3];
    console.log(verse);
}

}