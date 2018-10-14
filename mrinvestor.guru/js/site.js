$( ".container-fluid").hide();
$( "#header" ).load( "./Templates/_Header.html", () => {
	$( ".container-fluid").show();
});
$( "#footer" ).load( "./Templates/_Footer.html");
