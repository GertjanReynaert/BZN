$(document).on("click",".selectablerow",function(){
	$(".selected").removeClass("selected");
	$(this).addClass("selected");
});