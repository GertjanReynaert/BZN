var initRunned;
//todo test zonder initrunned, dit zou normaal ook moeten werken
$(document).ready(function () {
    init();
    testInit();
});

var checkInitTrue = function () {
    var save = new Storage();
    if (save.getObject("initRunned") === true) {
        return true;
    } else {
        return false;
    }
}

var init = function () {
        var save = new Storage();

        //alle devtabellen:
        //array van productheader
        var productenheader = new Array();
        productenheader[0] = "Artikelnummer";
        productenheader[1] = "Artikelnaam";
        productenheader[2] = "Prijs";
        productenheader[3] = "Type";

        save.setObject("productenheader", productenheader);

        var producttypes = new Array();
        producttypes[0] = "kaars";
        producttypes[1] = "textiel";
        producttypes[2] = "kalender";
        producttypes[3] = "divers";

        save.setObject("producttypes", producttypes);

        initRunned = true;
        save.setObject("initRunned", initRunned);
}

var testInit = function () {
    var proms = new Array();
    proms[0] = new Prom("2100", "Rogge-De Snoeck", "Henri - Marie José", "Ponthove", "18", "Zulte", "9870", "056611101", "049711101", "henri.rogge@telenet.be");
    proms[1] = new Prom("2000", "Reynaert - Rogge", "Geert - Ann", "Kouterweg", "11", "Zulte", "9870", "056611101", "049711101", "ann.rogge@telenet.be");

    var db = new PromDb();
    db.setProms(proms);

    var producten = new Array();

    var product1 = new Product("0003", "sfeerlichtje", "13.50", "kaars");
    producten[0] = product1;
    var prodDb = new ProductenDb();
    prodDb.setProducten(producten);
}

    function deleteAllStorage() {
        var save = new Storage();
        save.clearAll();
        console.log("All storage has been deleted");
    }

    function deleteTestInit() {
        deleteAllStorage();
        init();
    }