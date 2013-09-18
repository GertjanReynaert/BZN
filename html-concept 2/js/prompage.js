$(document).on("click",".prom",function(){
	$(".prom").removeClass("btn-primary").addClass("btn-default");
	$(".prom").children().children().addClass("hidden");

	$(this).removeClass("btn-default").addClass("btn-primary");
	$(this).children().children(".hidden").removeClass("hidden");

	initPromHome($(this).attr("id"));
});

$(document).on("click","#addprom",function(){
	initContact();
	createLayoutHome(false, true, true);
});

$(document).on("click","#btnDeleteProm", function(){
	yesnodialog("Wenst u deze prom echt te verwijderen?",
		function yes()
		{
			var db = new PromDb();
			db.removeProm($("#inputPromnummer").val());
			initPromsTab();
			clearView();
		},
		function no()
		{
			/*do nothing*/
		});
});

$(document).on("click","#editProm",function(){
	dialog("test");
});

function initPromsTab()
{
	var db = new PromDb();
	var proms = db.getProms();

	var prommenu = ["stock","transfer","verkoop","kas"];

	var ul = new Tag("ul");
	ul.setId("tab3");

	for (var i = 0; i < proms.length; i++) {
		var promtag = new Tag("li");
		promtag.addCssClass("btn btn-default btn-block");
		promtag.addCssClass("prom");
		promtag.setId(proms[i].getPromnummer());
		promtag.setContent(proms[i].getNaam());

		var optionsul = new Tag("ul");

		for (var j = 0; j < prommenu.length; j++) {
			var li = new Tag("li");
			li.addCssClass("btn btn-default btn-block hidden");
			li.addCssClass("prom-"+prommenu[j]);
			li.setContent(prommenu[j]);

			optionsul.setContent(li.toHtml());
		};
		promtag.setContent(optionsul.toHtml());
		ul.setContent(promtag.toHtml());
	};
	
	var addprom = new Tag("li");
	addprom.addCssClass("btn btn-success btn-block");
	addprom.setId("addprom");
	addprom.setContent("Prom toevoegen");
	ul.setContent(addprom.toHtml());

	$("#proms").empty().append(ul.toHtml());
}

function initContact()
{
	clearView();

	navlayout(true);

	var navitems = new Array();
	navitems[0] = new Link("Wijzigen","editProm");
	addNavbar(navitems);

	$(".view").append("<div class='prominfo col-lg-12'></div>");
}

function initPromHome(promid)
{
	initContact();

	createLayoutHome(true,false,false);

	/*set info*/
	var db = new PromDb();
	var prom = db.getPromByNummer(promid);
	$("#inputPromnummer").val(prom.getPromnummer());
	$("#inputNaam").val(prom.getNaam());
	$("#inputVoornaam").val(prom.getVoornaam());
	$("#inputStraat").val(prom.getStraat());
	$("#inputNummer").val(prom.getNummer());
	$("#inputGemeente").val(prom.getGemeente());
	$("#inputPostcode").val(prom.getPostcode());
	$("#inputTelefoon").val(prom.getTelefoon());
	$("#inputGsm").val(prom.getGsm());
	$("#inputEmail").val(prom.getEmail());
}

function createLayoutHome(boolhome,booltoevoegen,booledit)
{
	var output = new Tag();
	output.addCssClass("promhomeview");

	var panel = new Tag();
	panel.addCssClass("panel");

	var panelhead = new Tag();
	panelhead.addCssClass("panel-heading");
	panelhead.setContent("Algemeen");
	panel.setContent(panelhead.toHtml());

	var panelbody = new Tag();
	panelbody.addCssClass("panel-body");

	var form = new Tag("form");
	form.addCssClass("form-horizontal");
	form.addAttribute("role","form");

	var arr = ["Promnummer","Naam","Voornaam"];

	for(var i = 0;i<arr.length;i++)
	{
		var formgroup = new Tag();
		formgroup.addCssClass("form-group");

		var label = new Tag("label");
		label.addAttribute("for","input"+arr[i]);
		label.addCssClass("col-lg-1 control-label");
		label.setContent(arr[i]);
		formgroup.setContent(label.toHtml());

		var divinput = new Tag();
		divinput.addCssClass("col-lg-11");

		var input = new Tag("input");
		input.addAttribute("type","text");
		input.addCssClass("form-control");
		input.setId("input"+arr[i]);
		input.addAttribute("placeholder",arr[i]);
		divinput.setContent(input.toHtml());
		formgroup.setContent(divinput.toHtml());
		form.setContent(formgroup.toHtml());
	}
	panelbody.setContent(form.toHtml());
	panel.setContent(panelbody.toHtml());
	output.setContent(panel.toHtml());

	panel = new Tag();
	panel.addCssClass("panel");

	panelhead = new Tag();
	panelhead.addCssClass("panel-heading");
	panelhead.setContent("Adres");
	panel.setContent(panelhead.toHtml());

	panelbody = new Tag();
	panelbody.addCssClass("panel-body");

	form = new Tag("form");
	form.addCssClass("form-horizontal");
	form.addAttribute("role","form");

	var arr = [["Straat","Nummer"],["Gemeente","Postcode"]];

	for(var i = 0;i<arr.length;i++)
	{
		var formgroup = new Tag();
		formgroup.addCssClass("form-group");

		for (var j = 0; j < arr[i].length; j++) {

			var label = new Tag("label");
			label.addAttribute("for","input"+arr[i][j]);
			label.addCssClass("col-lg-1 control-label");
			label.setContent(arr[i][j]);
			formgroup.setContent(label.toHtml());

			var divinput = new Tag();
			divinput.addCssClass("col-lg-5");

			var input = new Tag("input");
			input.addAttribute("type","text");
			input.addCssClass("form-control");
			input.setId("input"+arr[i][j]);
			input.addAttribute("placeholder",arr[i][j]);
			divinput.setContent(input.toHtml());
			formgroup.setContent(divinput.toHtml());
		};
		form.setContent(formgroup.toHtml());
	}

	panelbody.setContent(form.toHtml());
	panel.setContent(panelbody.toHtml());
	output.setContent(panel.toHtml());

	panel = new Tag();
	panel.addCssClass("panel");

	panelhead = new Tag();
	panelhead.addCssClass("panel-heading");
	panelhead.setContent("Contactgegevens");
	panel.setContent(panelhead.toHtml());

	panelbody = new Tag();
	panelbody.addCssClass("panel-body");

	form = new Tag("form");
	form.addCssClass("form-horizontal");
	form.addAttribute("role","form");

	var formgroup = new Tag();
	formgroup.addCssClass("form-group");

	var label = new Tag("label");
	label.addAttribute("for","inputTelefoon");
	label.addCssClass("col-lg-1 control-label");
	label.setContent("Telefoon");
	formgroup.setContent(label.toHtml());

	var divinput = new Tag();
	divinput.addCssClass("col-lg-5");

	var input = new Tag("input");
	input.addAttribute("type","text");
	input.addCssClass("form-control");
	input.setId("inputTelefoon");
	input.addAttribute("placeholder","Telefoon");
	divinput.setContent(input.toHtml());
	formgroup.setContent(divinput.toHtml());

	var label = new Tag("label");
	label.addAttribute("for","inputGsm");
	label.addCssClass("col-lg-1 control-label");
	label.setContent("Gsm");
	formgroup.setContent(label.toHtml());

	var divinput = new Tag();
	divinput.addCssClass("col-lg-5");

	var input = new Tag("input");
	input.addAttribute("type","text");
	input.addCssClass("form-control");
	input.setId("inputGsm");
	input.addAttribute("placeholder","Gsm");
	divinput.setContent(input.toHtml());
	formgroup.setContent(divinput.toHtml());
	form.setContent(formgroup.toHtml());

	var formgroup = new Tag();
	formgroup.addCssClass("form-group");

	var label = new Tag("label");
	label.addAttribute("for","inputEmail");
	label.addCssClass("col-lg-1 control-label");
	label.setContent("Email");
	formgroup.setContent(label.toHtml());

	var divinput = new Tag();
	divinput.addCssClass("col-lg-11");

	var input = new Tag("input");
	input.addAttribute("type","text");
	input.addCssClass("form-control");
	input.setId("inputEmail");
	input.addAttribute("placeholder","Email");
	divinput.setContent(input.toHtml());
	formgroup.setContent(divinput.toHtml());
	form.setContent(formgroup.toHtml());

	panelbody.setContent(form.toHtml());
	panel.setContent(panelbody.toHtml());
	output.setContent(panel.toHtml());

	if(boolhome == false){
		var button = new Tag("button");
		button.addCssClass("btn btn-primary right");
		button.setId("btnEditProm");
		button.setContent("Opslaan");
		output.setContent(button.toHtml());

		button = new Tag("button");
		button.addCssClass("btn btn-link right");
		button.setId("btnCancel");
		button.setContent("Cancel");
		output.setContent(button.toHtml());

		if(booltoevoegen == false)
		{
			button = new Tag("button");
			button.addCssClass("btn btn-danger");
			button.setId("btnDeleteProm");
			button.setContent("Verwijder");
			output.setContent(button.toHtml());
		}
	}

	$(".view").append(output.toHtml());
}