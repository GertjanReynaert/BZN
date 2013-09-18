function ProductenDb(){
	this.store = new Storage();
};

ProductenDb.prototype.getProducten = function()
{
	var prods = this.store.getObject("producten");
	var producten = new Array();
	for (var i = 0; i < prods.length; i++) {
		var pr = new Product();
		pr.initByObject(prods[i]);
		producten[i] = pr;
	};

	return sortByNummer(producten);
}

ProductenDb.prototype.setProducten = function(producten)
{
	this.store.setObject("producten",producten);
}

ProductenDb.prototype.getProductByNummer = function(nummer)
{
	var producten = this.getProducten();

	var product;
	var i = 0;
	while(i<producten.length && product==null)
	{
		if(producten[i].getNummer() == nummer)
		{
			product = producten[i];
		}
		i++;
	}

	return product;
}

ProductenDb.prototype.addProduct = function(product)
{
	var producten = this.getProducten();

	producten.push(product);

	this.store.setObject("producten",producten);
}

ProductenDb.prototype.editProduct = function(product)
{
	var producten = this.getProducten();

	var replaced = false;
	var i = 0;
	while(i<producten.length && replaced==false)
	{
		if(producten[i].getNummer() == product.getNummer())
		{
			producten[i]=product;
			replaced = true;
		}
		i++;
	}

	this.setProducten(producten);
}

ProductenDb.prototype.removeProduct = function(nummer)
{
	var producten = this.getProducten();

	var removeproduct;
	var i = 0;
	while(i<producten.length && removeproduct==null)
	{
		if(producten[i].getNummer() == nummer)
		{
			removeproduct = producten[i];
		}
		i++;
	}

	producten = $.grep(producten, function(value) {
		return value != removeproduct;
	});

	this.setProducten(producten);
}

ProductenDb.prototype.getArtikelenHeader = function()
{
	var prodheader = this.store.getObject("productenheader");
	var productenheader = new Array();
	for (var i = 0; i < prodheader.length; i++) {
		productenheader[i] = new Tabledata(prodheader[i]);
	};

	return productenheader;
}

function sortByNummer(producten)
{
	var nieuw = new Array();

	for (var i = 0; i < producten.length; i++) {
		var comp = producten[i];

		var j = 0;
		var found = false;

		if(nieuw.length == 0)
		{
			nieuw[0] = comp;
			found = true;
		}

		while(j<nieuw.length && found == false)
		{
			if(nieuw[j].getNummer()>comp.getNummer())
			{
				found = true;
				nieuw.splice(j, 0, comp);
			}

			j++;
		}
	};
	return nieuw;
	
}