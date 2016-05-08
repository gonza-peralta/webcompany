$('#submit').click(function(){
    $(location).attr('href', 'mailto:peraltag@gmail.com?subject='
                             + encodeURIComponent("This is my subject")
                             + "&body=" 
                             + encodeURIComponent("This is my body")
    );
    /*alert( "Handler for .click() called." );*/
});