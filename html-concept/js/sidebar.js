$('document').ready(function() {
	resetSelected();
	$("#"+defaultactive).addClass("selected");

	addClickListeners();
});

var list = ["articles","own_sales","control_center","sales_points"];
var secondmenuitems = [["own_sales","secondmenu_own_sales"]];
var defaultactive = list[0];

function resetSelected(){
	for (var i = 0; i < list.length; i++) {
		if($("#"+list[i]).hasClass("selected"))
		{
			$("#"+list[i]).removeClass("selected");
		}
	};
	
	hideSecondMenu();
}

function hideSecondMenu()
{
	$(".secondmenu").hide();
	$(".wrapper").css("width","100%");
}

function addClickListeners()
{
	for (var i = 0; i < list.length; i++) {
		$("#"+list[i]).click(function(){
			resetSelected();
			$(this).addClass("selected");
			var elem = this;
			$.each(secondmenuitems,function(i, value){
				if(elem.id == value[0])
				{
					$("#"+value[1]).show();
					$(".wrapper").css("width","85%");
				}

			});
		});
	}
}
