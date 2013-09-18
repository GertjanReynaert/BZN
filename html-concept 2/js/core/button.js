function Button(tekst)
{
	this.tekst = tekst;
	this.btnId = "";
	this.cssClass = new Array();
	this.cssClass[0] = "btn";
}

Button.prototype.getTekst = function()
{
	return this.tekst;
}

Button.prototype.setTekst = function(tekst)
{
	this.tekst = tekst;
}

Button.prototype.getId = function()
{
	return this.btnId;
}

Button.prototype.setId = function(btnId)
{
	this.btnId = btnId;
}

Button.prototype.getCssClass = function()
{
	return this.cssClass;
}

Button.prototype.addCssClass = function(cssClass)
{
	var length = this.cssClass.length;
	this.cssClass[length+1] = cssClass;
}

Button.prototype.removeCssClass = function(cssClass)
{
	var index = this.cssClass.indexOf(cssClass);
	this.cssClass.splice(index, 1);
}

Button.prototype.toHtml = function()
{
	var output = "<button ";
	if(! this.btnId == "")
	{
		output += "id='"+this.btnId+"' ";
	}

	output += "class='";
	for(var i=0;i<this.cssClass.length;i++)
	{
		output += this.cssClass[i] + " ";
	}
	output +="'>"

	output += this.tekst;

	output += "</button>";
	return output;
}
