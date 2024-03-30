var aufgabe1;
(function (aufgabe1) {
    var subject = ["Harry", "Hermine", "Ron", "Hagrid", "Snape", "Dumbledore"];
    var predicate = ["braut", "liebt", "studiert", "hasst", "zaubert", "zerstört"];
    var object = ["Zaubertränke", "den Grimm", "Lupin", "Hogwarts", "die Karte des Rumtreibers", "Dementoren"];
    for (var i = subject.length; i >= 1; i--) {
        console.log("Laufvariable:", i);
        getVerse(subject, predicate, object);
    }
    function getVerse(_subject, _predicate, _object) {
        var verse = "";
        var randomNumber1 = Math.floor(Math.random() * subject.length);
        var randomNumber2 = Math.floor(Math.random() * predicate.length);
        var randomNumber3 = Math.floor(Math.random() * object.length);
        verse += subject[randomNumber1] + " " + predicate[randomNumber2] + " " + object[randomNumber3];
        console.log(verse);
    }
})(aufgabe1 || (aufgabe1 = {}));
