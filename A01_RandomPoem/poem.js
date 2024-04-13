"use strict";
var aufgabe1;
(function (aufgabe1) {
    let subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    let predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    let object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (let i = subject.length; i >= 1; i--) {
        console.log("Laufvariable:", i);
        getVerse(subject, predicate, object);
    }
    function getVerse(_subject, _predicate, _object) {
        let verse = "";
        let randomNumber1 = Math.floor(Math.random() * subject.length);
        let randomNumber2 = Math.floor(Math.random() * predicate.length);
        let randomNumber3 = Math.floor(Math.random() * object.length);
        verse += subject[randomNumber1] + " " + predicate[randomNumber2] + " " + object[randomNumber3];
        console.log(verse);
    }
})(aufgabe1 || (aufgabe1 = {}));
//# sourceMappingURL=poem.js.map