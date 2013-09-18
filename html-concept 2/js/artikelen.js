function initArtikelen(clickednav)
{
	clearView();
	
	$(clickednav).removeClass("btn-default");
	$(clickednav).addClass("btn-primary");

	navlayout(true);

	var navitems = new Array();
	navitems[0] = new Link("toevoegen","addProduct");
	navitems[1] = new Link("Wijzigen","editProduct");
	addNavbar(navitems);

	$(".view").append("<div class='artikellist col-lg-12'></div>");

	/*get products from localstorage*/
	createTable();
}

$(document).on("click","#addProduct",function(){

	if($(this).hasClass("active")){
		$(this).removeClass("active");
		hideSidebar();
	}
	else
	{
		if($(".navbar-item").hasClass("active"))
		{

		}
		else
		{
			$(this).addClass("active");
			constructSidebar(true);
		}
	}
});

$(document).on("click","#editProduct",function(){
	if (! $(this).hasClass("active")) {
		if($(".navbar-item").hasClass("active"))
		{

		}
		else
		{
			if( $(".selectablerow").hasClass("selected"))
			{
				$(this).addClass("active");
				var id = $(".selectablerow.selected").attr("id");
				constructSidebar(false);

				var db = new ProductenDb();
				var product = db.getProductByNummer(id);

				$("#inputNummer").val(product.getNummer());
				$("#inputNaam").val(product.getNaam());
				$("#inputPrijs").val(product.getPrijs());
				$("#inputType").val(product.getType());
			}
			else
			{
				dialog("Selecteer eerst een artikel aub");
			}
		}
	};
});

$(document).on("click","#btnCancel",function(){
	hideSidebar();
});

$(document).on("click","#btnSave",function(){
	var output = "";

	if($("#inputNummer").val()=="")
	{
		output = "Gelieve eerst een artikelnummer in te geven";
	}
	else
	{
		var nieuw = new Product();
		nieuw.setNummer($("#inputNummer").val());
		nieuw.setNaam($("#inputNaam").val());
		nieuw.setPrijs($("#inputPrijs").val());
		nieuw.setType($("#inputType").val());

		var db = new ProductenDb();
		db.addProduct(nieuw);
		createTable();
		hideSidebar();
	}

	if(output != "")
	{
		dialog(output);
	}
});
$(document).on("click","#btnEdit",function(){
	var nieuw = new Product();
	nieuw.setNummer($("#inputNummer").val());
	nieuw.setNaam($("#inputNaam").val());
	nieuw.setPrijs($("#inputPrijs").val());
	nieuw.setType($("#inputType").val());

	var db = new ProductenDb();
	db.editProduct(nieuw);
	createTable();
	hideSidebar();
});

$(document).on("click","#btnDelete",function(){

	yesnodialog("Wenst u dit artikel echt te verwijderen?",
	function yes()
	{
		var db = new ProductenDb();
		db.removeProduct($("#inputNummer").val());
		createTable();
		hideSidebar();
	},
	function no()
	{
		hideSidebar();
	});
});

$(document).on("click",".dropdown-item",function(){
	$("#inputType").empty();
	var prodtype = $(this).children("a").text()
	$("#inputType").val(prodtype);
});

function createTable()
{
	var db = new ProductenDb();

	var productenheader = db.getArtikelenHeader();

	var producten = db.getProducten();

	var productentabel = new Table();
	productentabel.addCssClass("table-hover");
	productentabel.setHeaderByArray(productenheader);

	var trArray = new Array();
	for (var i = 0; i < producten.length; i++) {
		var tr = new Tablerow();
		tr.addCssClass("selectablerow");
		tr.setId(producten[i].getNummer());

		var td = new Tabledata(producten[i].getNummer());
		tr.addItem(td);

		td = new Tabledata(producten[i].getNaam());
		tr.addItem(td);

		td = new Tabledata(producten[i].getPrijs());
		tr.addItem(td);

		td = new Tabledata(producten[i].getType());
		tr.addItem(td);

		trArray[i] = tr;
	};
	productentabel.setContentByArray(trArray);
	$(".artikellist").empty().append(productentabel.toString());
}

function constructSidebar(booltoevoegen)
{
	$(".artikellist").removeClass("col-lg-12").addClass("col-lg-8");
	$(".view").append("<div class=\"col-lg-4 artikelbar\">");

	var form = new Tag("form");
	form.addCssClass("form-horizontal");
	form.addAttribute("role","form");

	/*line 1*/
	var group = new Tag();
	group.addCssClass("form-group");

	var label = new Tag("label");
	label.addCssClass("col-lg-3");
	label.addCssClass("control-label");
	label.addAttribute("for","inputNummer");
	label.setContent("Artikelnummer");

	group.setContent(label.toHtml());

	var inputcol = new Tag();
	inputcol.addCssClass("col-lg-9");

	var input = new Tag("input");
	input.setId("inputNummer");
	input.addCssClass("form-control");

	if(booltoevoegen == false)
	{
		input.addAttribute("disabled");
	}

	input.addAttribute("type","text");
	input.addAttribute("placeholder","Artikelnummer");

	inputcol.setContent(input.toHtml());
	group.setContent(inputcol.toHtml());

	form.setContent(group.toHtml());

	/*line 2*/
	group = new Tag();
	group.addCssClass("form-group");

	label = new Tag("label");
	label.addAttribute("for","inputNaam");
	label.addCssClass("col-lg-3");
	label.addCssClass("control-label");
	label.setContent("Artikelnaam");

	group.setContent(label.toHtml());

	inputcol = new Tag();
	inputcol.addCssClass("col-lg-9");

	input = new Tag("input");
	input.setId("inputNaam");
	input.addCssClass("form-control");
	input.addAttribute("type","text");
	input.addAttribute("placeholder","Artikelnaam");

	inputcol.setContent(input.toHtml());

	group.setContent(inputcol.toHtml());

	form.setContent(group.toHtml());

	/*line 3*/
	group = new Tag();
	group.addCssClass("form-group");

	label = new Tag("label");
	label.addAttribute("for","inputPrijs");
	label.addCssClass("col-lg-3");
	label.addCssClass("control-label");
	label.setContent("Prijs");

	group.setContent(label.toHtml());

	inputcol = new Tag();
	inputcol.addCssClass("col-lg-9");
	inputcol.addCssClass("input-group");

	var span = new Tag("span");
	span.addCssClass("input-group-addon");
	span.setContent("&euro;");

	inputcol.setContent(span.toHtml());

	input = new Tag("input");
	input.setId("inputPrijs");
	input.addCssClass("form-control");
	input.addAttribute("type","text");
	input.addAttribute("placeholder","Prijs");

	inputcol.setContent(input.toHtml());

	group.setContent(inputcol.toHtml());

	form.setContent(group.toHtml());

	/*line 4*/
	group = new Tag();
	group.addCssClass("form-group");

	label = new Tag("label");
	label.addCssClass("col-lg-3");
	label.addCssClass("control-label");
	label.setContent("Type");

	group.setContent(label.toHtml());

	inputcol = new Tag();
	inputcol.addCssClass("col-lg-9");
	inputcol.addCssClass("input-group");

	input = new Tag("input");
	input.setId("inputType");
	input.addCssClass("form-control");
	input.addAttribute("type","text");
	input.addAttribute("placeholder","Type");
	input.addAttribute("disabled");

	inputcol.setContent(input.toHtml());

	var dropbtn = new Tag();
	dropbtn.addCssClass("input-group-btn");

	var btn = new Tag("button");
	btn.addCssClass("btn");
	btn.addCssClass("btn-default");
	btn.addCssClass("dropdown-toggle");
	btn.addAttribute("data-toggle","dropdown");
	btn.setContent("Selecteer ");

	span = new Tag("span");
	span.addCssClass("caret");
	btn.setContent(span.toHtml());

	dropbtn.setContent(btn.toHtml());

	var ul = new Tag("ul");
	ul.addCssClass("dropdown-menu");
	ul.addCssClass("pull-right");

	var database = new Storage();
	var dritems = database.getObject("producttypes");


	for (var i = 0; i < dritems.length; i++) {
		var li = new Tag("li");
		li.setId(dritems[i]);
		li.addCssClass("dropdown-item");

		var a = new Tag("a");
		a.setContent(dritems[i]);
		a.addAttribute("href","#");

		li.setContent(a.toHtml());

		ul.setContent(li.toHtml());
	};

	dropbtn.setContent(ul.toHtml());

	inputcol.setContent(dropbtn.toHtml());
	group.setContent(inputcol.toHtml());

	form.setContent(group.toHtml());

	if(booltoevoegen == false){
		btn = new Tag("button");
		btn.addCssClass("btn btn-danger");
		btn.setContent("Verwijder");
		btn.setId("btnDelete");

		form.setContent(btn.toHtml());
	}

	btn = new Tag("button");
	btn.addCssClass("btn btn-primary right");
	btn.setContent("Opslaan");
	if(booltoevoegen)
	{
		btn.setId("btnSave");
	}
	else
	{
		btn.setId("btnEdit");
	}

	form.setContent(btn.toHtml());

	btn = new Tag("button");
	btn.addCssClass("btn btn-link right");
	btn.setContent("Cancel");
	btn.setId("btnCancel");

	form.setContent(btn.toHtml());

	$(".artikelbar").append(form.toHtml());
}

function hideSidebar()
{
	$(".artikellist").removeClass("col-lg-8").addClass("col-lg-12");
	$(".artikelbar").remove();
	removeActive();
}

function removeActive()
{
	$(".navbar-item").removeClass("active");
}