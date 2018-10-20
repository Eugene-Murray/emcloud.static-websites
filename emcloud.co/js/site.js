
$( document ).ready(function() {
    console.log( "document ready!" );
    
    $( ".container-fluid").hide();
    $( "#header" ).load( "./Templates/_Header.html", () => {
        $( ".container-fluid").show();
    });
    $( "#footer" ).load( "./Templates/_Footer.html");
});
