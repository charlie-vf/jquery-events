$(document).ready(function() {
    $("#stream1_btn").on("click", function() {
        $(".stream1").show();
        $(".stream1").show("slow");
        $(".stream1").show("medium");
        $(".stream1").show("fast");
        $(".stream1").show(1000);
   });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
   });
   $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
   });
}); 


// The slideDown() function slides down a hidden HTML element, so it becomes visible.

// The slideToggle() function shows an element if it's hidden, or hides it if 
// it's visible.

// The fadeIn() function fades in the hidden element.

// The fadeOut() function fades out a visible element.

// The fadeToggle() function shows an element if it's hidden, or hides it if 
// it's visible.

// The fadeTo() function enables you to fade an HTML element partially in or out, 
// thus making it transparent.
// You pass two parameters: the speed, which is in milliseconds; and the opacity, 
// which is between zero and one, which tells you how much you wish to fade the 
// element.
// 0 is fully transparent (hidden) and 1 is fully opaque (shown).