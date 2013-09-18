function Link(displaytext,hyperlink){
	this.displaytext = displaytext;
	this.hyperlink = hyperlink;
}

Link.prototype.getDisplaytext = function()
{
  return this.displaytext;
}

Link.prototype.setDisplaytext = function(displaytext)
{
  this.displaytext = displaytext;
}

Link.prototype.getHyperlink = function()
{
  return this.hyperlink;
}

Link.prototype.setHyperlink = function(hyperlink)
{
  this.hyperlink = hyperlink;
}