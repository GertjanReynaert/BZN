function Product(nummer,naam,prijs,type){
  if(nummer != null)
  {
    this.nummer = nummer;
    this.naam = naam;
    this.prijs = prijs;
    this.prodtype = type;
  }
  else
  {
    this.nummer = "0"
    this.naam = "naam";
    this.prijs = "999.00";
    this.prodtype = "test";
  }
}

Product.prototype.getNummer = function()
{
  return this.nummer;
}

Product.prototype.setNummer = function(nummer)
{
  this.nummer = nummer;
}

Product.prototype.getNaam = function()
{
  return this.naam;
}

Product.prototype.setNaam = function(naam)
{
  this.naam = naam;
}

Product.prototype.getPrijs = function()
{
  return this.prijs;
}

Product.prototype.setPrijs = function(prijs)
{
  this.prijs = prijs;
}

Product.prototype.getType = function()
{
  return this.prodtype;
}

Product.prototype.setType = function(type)
{
  this.prodtype = type;
}

Product.prototype.initByObject = function(obj)
{
  this.nummer = obj.nummer;
  this.naam = obj.naam;
  this.prijs = obj.prijs;
  this.prodtype = obj.prodtype;
}

Product.prototype.toString = function()
{
  return "Productnummer: "+this.getNummer()+" Productnaam: "+this.getNaam()+" Prijs: "+this.getPrijs()+" type: "+this.getType();
}
