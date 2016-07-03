/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    })

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function() {
        $('.navbar-toggle:visible').click();
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '50px'
        }
    );

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })


    var request;

    $("#form-iw").submit(function(event){

        // Abort any pending request
        if (request) {
            request.abort();
        }
        // setup some local variables
        var $form = $(this);

        // Let's select and cache all the fields
        var $inputs = $form.find("input, select, textarea");

        // Serialize the data in the form
        var serializedData = $form.serialize();

        // Let's disable the inputs for the duration of the Ajax request.
        // Note: we disable elements AFTER the form data has been serialized.
        // Disabled form elements will not be serialized.
        $inputs.prop("disabled", true);


        $.post('/toemail.php', serializedData, function(response) {
            // Log the response to the console
            console.log("Response: " + response);
            if (response == "OK"){
                alertify.success("The message has been sent");
            } else {
                alertify.error("Error sending message. Please try it later");
            }
            $inputs.prop("disabled", false);
        });
        // Prevent default posting of form
        event.preventDefault();
    });

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
