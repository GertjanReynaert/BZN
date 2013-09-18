function Tag(tagname)
{
	if(tagname != null)
	{
		this.tagType = tagname;
	}
	else
	{
		this.tagType = "div";
	}

	this.tagId = "";
	this.cssClass = new Array();
	this.attribute = new Array();

	this.tagcontent = "";
}

Tag.prototype.getTag = function()
{
	return this.tagType;
}

Tag.prototype.setTag = function(tagtype)
{
	this.tagType = tagtype;
}

Tag.prototype.getContent = function()
{
	return this.tagcontent;
}

Tag.prototype.setContent = function(tagcontent)
{
	this.tagcontent += tagcontent;
}

Tag.prototype.getId = function()
{
	return this.tagId;
}

Tag.prototype.setId = function(tagId)
{
	this.tagId = tagId;
}

Tag.prototype.getCssClass = function()
{
	return this.cssClass;
}

Tag.prototype.addCssClass = function(cssClass)
{
	var length = this.cssClass.length;
	this.cssClass[length] = cssClass;
}

Tag.prototype.removeCssClass = function(cssClass)
{
	var index = this.cssClass.indexOf(cssClass);
	this.cssClass.splice(index, 1);
}

Tag.prototype.getAttribute = function()
{
	return this.attribute;
}

Tag.prototype.addAttribute = function(attributename,attribute)
{
	var length = this.attribute.length;

	var att = new Array();
	att[0] = attributename;
	att[1] = attribute;

	this.attribute[length] = att;
}

Tag.prototype.toHtml = function()
{
	var output = "<";
	output += this.tagType;
	output += " ";

	if(this.tagId != "")
	{
		output += "id='"+this.tagId+"' ";
	}

	if(this.cssClass.length>0)
	{
		output += "class='";
		for(var i=0;i<this.cssClass.length;i++)
		{
			output += this.cssClass[i] + " ";
		}
		output += "'"
	}

	if(this.attribute.length>0)
	{
		output += " ";
		for (var i = 0; i < this.attribute.length; i++) {
			output += this.attribute[i][0];
			if( this.attribute[i][1] != null)
			{
				output += "=\"";
				output += this.attribute[i][1];
				output += "\""
			}
			else
			{
				output += " ";
			}
		};
	}
	output +=">";
	

	output += this.tagcontent;

	output += "</";
	output += this.tagType;
	output += ">";

	return output;
}