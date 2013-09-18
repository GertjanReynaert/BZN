function Tablerow(tabledata)
{
	if(tabledata == null){
		this.tabledata = new Array();
		this.itemnr = 0;
	}
	else
	{
		this.tabledata = tabledata;
		this.itemnr = tabledata.length;
	}

	
	this.rowid = "";
	this.cssClass = new Array();
}

Tablerow.prototype.getLength = function()
{
	return this.itemnr;
}

Tablerow.prototype.getId = function()
{
	return this.rowid;
}

Tablerow.prototype.setId = function(rowid)
{
	this.rowid = rowid;
}

Tablerow.prototype.getCssClass = function()
{
	return this.cssClass;
}

Tablerow.prototype.addCssClass = function(cssClass)
{
	var length = this.cssClass.length;
	this.cssClass[length] = cssClass;
}

Tablerow.prototype.removeCssClass = function(cssClass)
{
	var index = this.cssClass.indexOf(cssClass);
	this.cssClass.splice(index, 1);
}

Tablerow.prototype.addItem = function(item)
{
	this.tabledata[this.tabledata.length] = item;
	this.itemnr++;
}

Tablerow.prototype.removeItem = function(item)
{
	var index = this.cssClass.indexOf(item);
	this.cssClass.splice(index, 1);
	this.itemnr--;
}

Tablerow.prototype.toString = function(){
	var output = "<tr ";
	if (this.getId()!=null) {
		output += "id='"+this.getId()+"' ";
	}
	
	if (this.getCssClass().length > 0) {
		output += "class='";
		
		for (var i = 0; i < this.getCssClass().length; i++) {
			output += this.getCssClass()[i] + " ";
		}
		
		output += "'";
	}
	
	output += ">";

	for(var i = 0; i<this.tabledata.length;i++)
	{
		tbldat = this.tabledata[i];
		output += tbldat.toString();
	}

	output += "</tr>";
	return output;
}