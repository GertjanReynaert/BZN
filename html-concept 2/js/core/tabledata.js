function Tabledata(item) {
	if (item!=null) {
		this.item = item;
	}
	else {
		this.item = "";
	}
	
	this.tdId = "";
	this.cssClass = new Array();
	this.toString = toString;
}

Tabledata.prototype.getId = function() {
	return this.tdId;
}

Tabledata.prototype.setId = function(dataId){
	this.tdId = dataId;
}

Tabledata.prototype.getItem = function(){
	return this.item;
}

Tabledata.prototype.setItem = function(item){
	this.item = item;
}

Tabledata.prototype.getCssClass = function()
{
	return this.cssClass;
}

Tabledata.prototype.addCssClass = function(cssClass)
{
	var length = this.cssClass.length;
	this.cssClass[length] = cssClass;
}

Tabledata.prototype.removeCssClass = function(cssClass)
{
	var index = this.cssClass.indexOf(cssClass);
	this.cssClass.splice(index, 1);
}

function toString(){
	var output = "<td ";
	if (! this.getId()==null) {
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
	output += this.item.toString();
	output += "</td>";
	return output;
}