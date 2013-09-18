function PromDb()
{
	this.store = new Storage();
}

PromDb.prototype.setProms = function(proms) {
	this.store.setObject("proms",proms);
};

PromDb.prototype.getProms = function() {
	var promsdb = this.store.getObject("proms");
	var proms = new Array();
	for (var i = 0; i < promsdb.length; i++) {
		var pr = new Prom();
		pr.initByObject(promsdb[i]);
		proms[i] = pr;
	};

	return sortPromsByNummer(proms);
};

PromDb.prototype.getPromByNummer = function(nummer)
{
	var proms = this.getProms();

	var prom;
	var i = 0;
	while(i<proms.length && prom==null)
	{
		if(proms[i].getPromnummer() == nummer)
		{
			prom = proms[i];
		}
		i++;
	}

	return prom;
}

PromDb.prototype.removeProm = function(promnummer) {
	var proms = this.getProms();

	var remprom;
	var i = 0;
	while(i<proms.length && remprom==null)
	{
		if(proms[i].getPromnummer() == promnummer)
		{
			remprom = proms[i];
		}
		i++;
	}

	proms = $.grep(proms, function(value) {
		return value != remprom;
	});

	this.setProms(proms);
};

function sortPromsByNummer(proms)
{
	var nieuw = new Array();

	for (var i = 0; i < proms.length; i++) {
		var comp = proms[i];

		var j = 0;
		var found = false;

		if(nieuw.length == 0)
		{
			nieuw[0] = comp;
			found = true;
		}

		while(j<nieuw.length && found == false)
		{
			if(nieuw[j].getPromnummer()>comp.getPromnummer())
			{
				found = true;
				nieuw.splice(j, 0, comp);
			}

			j++;
		}
	};
	return nieuw;
	
}