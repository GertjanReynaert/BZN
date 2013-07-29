$('document').ready(function() {
	$(".selectablerow").click(function(){
		$(".selected").removeClass("selected");

		$(this).addClass("selected");
	});

});