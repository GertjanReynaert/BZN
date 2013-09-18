function Prom(promnummer,naam,voornaam,straat,nummer,gemeente,postcode,telefoon,gsm,email)
{
	if(promnummer != null)
	{
		this.promnummer = promnummer;
		this.naam = naam;
		this.voornaam = voornaam;
		this.straat = straat;
		this.nummer = nummer;
		this.gemeente = gemeente;
		this.postcode = postcode;
		this.telefoon = telefoon;
		this.gsm = gsm;
		this.email = email;
	}
	else
	{
		this.promnummer = "0000";
		this.naam = "naam";
		this.voornaam = "voornaam";
		this.straat = "straat";
		this.nummer = "nummer";
		this.gemeente = "gemeente";
		this.postcode = "postcode";
		this.telefoon = "telefoon";
		this.gsm = "gsm";
		this.email ="email";
	}
}

Prom.prototype.initByObject = function(obj) {
	this.promnummer = obj.promnummer;
	this.naam = obj.naam;
	this.voornaam = obj.voornaam;
	this.straat = obj.straat;
	this.nummer = obj.nummer;
	this.gemeente = obj.gemeente;
	this.postcode = obj.postcode;
	this.telefoon = obj.telefoon;
	this.gsm = obj.gsm;
	this.email = obj.email;
};

Prom.prototype.getPromnummer = function() {
	return this.promnummer;
};

Prom.prototype.setPromnummer = function(promnummer) {
	this.promnummer = promnummer;
};

Prom.prototype.getNaam = function() {
	return	this.naam;
};

Prom.prototype.setNaam = function(naam) {
	this.naam = naam;
};

Prom.prototype.getVoornaam = function() {
	return this.voornaam;
};

Prom.prototype.setVoornaam = function(voornaam) {
	this.voornaam = voornaam;
};

Prom.prototype.getStraat = function() {
	return	this.straat;
};

Prom.prototype.setStraat = function(straat) {
	this.straat = straat;
};

Prom.prototype.getNummer = function() {
	return this.nummer;
};

Prom.prototype.setNummer = function(nummer) {
	this.nummer  = nummer;
};

Prom.prototype.getGemeente = function() {
	return this.gemeente;
};

Prom.prototype.setGemeente = function(gemeente) {
	this.gemeente = gemeente;
};

Prom.prototype.getPostcode = function() {
	return this.postcode;
};

Prom.prototype.setPostcode = function(postcode) {
	this.postcode = postcode;
};

Prom.prototype.getTelefoon = function() {
	return this.telefoon;
};

Prom.prototype.setTelefoon = function(telefoon) {
	this.telefoon = telefoon;
};

Prom.prototype.getGsm = function() {
	return this.gsm;
};

Prom.prototype.setGsm = function(gsm) {
	this.gsm = gsm;
};

Prom.prototype.getEmail = function() {
	return this.email;
};

Prom.prototype.setEmail = function(email) {
	this.email = email;
};