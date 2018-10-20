let urlParam = document.currentScript.getAttribute('url-param');
console.log( "urlParam: ", urlParam);

$( document ).ready(function() {
    console.log( "document ready!" );
	$( "#header" ).load( `${urlParam}_header.html`, () => {
		$( "#loading").remove();
		$( ".container-fluid").show();
	});
	$( "#footer" ).load( `${urlParam}_footer.html`);
});