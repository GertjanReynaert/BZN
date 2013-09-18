function dialog(tekst) {
	setTitle("Opgepast");
	setText(tekst);
	hideSave(true);
	setCancelText("Close");
	activate();
}

function customdialog(titel, tekst, canceltekst, showsave, savetekst) {
	setTitel(titel);
	setText(tekst);
	setCancelText(canceltekst);
	hideSave(showsave);
	setSaveText(saveTekst);
	activate();
}

function yesnodialog(tekst, yesFn, noFn)
{
	setTitle("Opgepast");
	setText(tekst);
	hideSave(false);
	setCancelText("Cancel");
	setSaveText("Ok");

	$(".save").on("click", yesFn);
	$(".cancel").on("click", noFn);

	activate();
}

function clearmodal() {
	removeTitle();
	removeText(); 
	hideSave(false);
	removeSaveText();
	removeCancelText();
}

function setTitle(titel)
{
	$(document).ready(function(){
		$(".modal-title").append(titel);
	});
}

function removeTitle()
{
	$(document).ready(function(){
		$(".modal-title").empty();
	});
}

function setText(text)
{
	$(document).ready(function(){
		$(".modal-text").append(text);
	});
}

function removeText()
{
	$(document).ready(function(){
		$(".modal-text").empty();
	});
}

function setCancelText(text)
{
	$(document).ready(function(){
		$(".cancel").append(text);
	});
}
function removeCancelText()
{
	$(document).ready(function(){
		$(".cancel").empty();
	});
}

function setSaveText (text)
{
	$(document).ready(function(){
		$(".save").append(text);
	});
}

function removeSaveText()
{
	$(document).ready(function(){
		$(".save").empty();
	});
}

function hideSave(bool)
{
	$(document).ready(function(){
		if(bool)
		{
			$(".save").addClass("hidden");
		}
		else
		{
			$(".save").removeClass("hidden");
		}
	});
}

function activate()
{
	$(document).ready(function(){
		$('#myModal').modal('show');
	});
}

function closeModal()
{
	clearmodal();
	$(document).ready(function(){
		$('#myModal').modal('hide');
	});
}

$(document).ready(function(){
	$(".close").on("click", function(){
		closeModal();
	});
	$(".cancel").on("click", function(){
		closeModal();
	});
	$(".save").on("click", function(){
		closeModal();
	});
});