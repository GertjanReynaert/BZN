function navlayout(bool)
{
	$("section").append("<div class='view'></div>");
	if(bool){
		$("section").prepend("<div class='actionbar'></div>");
	}
	else
	{
		$(".view").addClass("fullheight");
	}
}

function addNavbar(listitems)
{
	var html = "<div class='navbar navbar-static-top'>";
	html += "<ul class='nav navbar-nav'>";

	for(var i = 0; i<listitems.length;i++)
	{
		var linkitem = listitems[i];
		html += "<li id=\""+listitems[i].getHyperlink()+"\" class='navbar-item'><a href='#'>";
		html += listitems[i].getDisplaytext();
		html += "</a></li>";
	}

	html += "</ul></div>";

	$(".actionbar").append(html);
}