function Table()
{
	this.tableheader = new Array();
	this.tablecontent = new Array();
	this.tablefooter = new Array();
	this.cssClass = new Array();
	this.cssClass[0] = "table";
	this.tableId = "";
}

Table.prototype.getId = function()
{
	return this.tableId;
}

Table.prototype.setId = function(tableId)
{
	this.tableId = tableId;
}

Table.prototype.getCssClass = function()
{
	return this.cssClass;
}

Table.prototype.addCssClass = function(cssClass)
{
	var length = this.cssClass.length;
	this.cssClass[length] = cssClass;
}

Table.prototype.removeCssClass = function(cssClass)
{
	var index = this.cssClass.indexOf(cssClass);
	this.cssClass.splice(index, 1);
}

//getter en setter voor header

Table.prototype.getHeader = function()
{
	return this.tableheader;
}

Table.prototype.setHeaderByArray = function(tableheader)
{
	this.tableheader = tableheader;
}

Table.prototype.setHeaderByTableData = function(tabledataheader)
{
	this.tableheader[this.tableheader.length+1] = tabledataheader;
}

//getter en setter voor content

Table.prototype.getContent = function()
{
	return this.tablecontent;
}

Table.prototype.setContentByArray = function(tablecontent)
{
	this.tablecontent = tablecontent;
}

Table.prototype.setContentByTableRow = function(tablerow)
{
	this.tablecontent[this.tablecontent.length+1] = tablerow;
}

Table.prototype.removeContentByTableRow = function(tablerow)
{
	var index = this.tablecontent.indexOf(tablerow);
	this.tablecontent.splice(index, 1);
}

//getter en setter voor footer

Table.prototype.getFooter = function()
{
	return this.tablefooter;
}

Table.prototype.setFooterByArray = function(tablefooter)
{
	this.tablefooter = tabledatafooter;
}

Table.prototype.setFooterByTableData = function(tabledatafooter)
{
	this.tablefooter[this.tablefooter.length+1] = tabledatafooter;
}

Table.prototype.toString = function()
{
	var output = "<table ";
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

	if(this.tableheader.length>0){
		output += "<thead>";
		for(var i = 0;i<this.tableheader.length;i++)
		{
			var th = this.tableheader[i];
			output += th.toString();
		}
		output += "</thead>"
	}

	if(this.tablecontent.length>0){
		output += "<tbody>";
		for(var i = 0; i<this.tablecontent.length;i++)
		{
			output += this.tablecontent[i].toString();
		}
		output += "</tbody>";
	}

	if(this.tablefooter.length>0){
		output += "<tfoot>";
		for(var i = 0;i<this.tablefooter.length;i++)
		{
			output += "<td>";
			output += this.tablefooter[i];
			output += "</td>"
		}
		output += "</tfoot>"
	}

	output += "</table>";

	return output;
}