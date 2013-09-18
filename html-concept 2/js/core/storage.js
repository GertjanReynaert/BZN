function Storage(){}

Storage.prototype.setObject = function(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
}

Storage.prototype.getObject = function(key) {
    var value = localStorage.getItem(key);
    return value && JSON.parse(value);
}

Storage.prototype.clearAll = function()
{
	localStorage.clear();
}

// function run()
// {
// 	var save = new Storage();
// // 	var testproducten = new Array();
// // testproducten[0] = new Product("0002","kaars",13.50,"green");
// // testproducten[1] = new Product("0003","kalender",10.00,"blue");

// // // Put the object into storage
// // save.setObject('producten', testproducten);

// // Retrieve the object from storage


// var retrievedObject = save.getObject('producten');
// console.log('retrievedObject: ', retrievedObject);
// }
// run();