$(document).ready(function(){
	$("#mainTabs a").click(function(e){
		e.preventDefault();
		$(this).tab("show");
	});
	$("#bannerContent").show("drop", {}, 2500);
});