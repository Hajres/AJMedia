$(document).ready(function(){
	$("body").scrollspy({target: "", offset: 10, delay: "slow"})
	// Add smooth scrolling to all links inside a navbar
	$(".lets-talk, .arrow-down-header, .goUp-index a").on('click', function(event){

  // Prevent default anchor click behavior
  event.preventDefault();

  // Store hash (#)
  var hash = this.hash;

  // Using jQuery's animate() method to add smooth page scroll
  // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area (the speed of the animation)
  $('html, body').animate({
    scrollTop: $(hash).offset().top
  }, 1000, function(){

    // Add hash (#) to URL when done scrolling (default click behavior)
    window.location.hash = hash;
  });
});



 $(".facebook-grid-wrapper").hover(function(){
	$(".facebook-grid-content").slideToggle();
	$(".fbLayover").slideToggle("fast");
});

  

  $(".twitter-background").hover(function(){
    var twitterLayer = $(this).attr("href");
    $("#"+twitterLayer).toggle();
   
  });




$(".dribbble-grid").hover(function(){
  $(".dribbble-grid .wrapper").fadeToggle();
  $(".follow-us").fadeToggle();
});



 



$(".footer-social-links li, .main-social-links li ").hover(function(){
  $(this).toggleClass("opacity");
  


});




$('.main-social-links li').hover(function(){
    var socialEffect = $(this).attr('data-effect');
    $('#'+socialEffect).toggle();


});





  function inputEvent() {
    event.preventDefault
    $(this).next().show();
    $(this).prev(). animate({
    fontSize: '14px',
    top: '30px'
  }, 'fast');
   

  if($(this).val().length > 1) {
    $(this).next().removeClass('glyphicon-remove-circle').addClass('glyphicon-ok-circle');
    $(this).css('color','#00b5ec');
}
  else {
    $(this).next().removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle');
    $(this).css('color', '#fa805f');
   }
  }


  function Email(){
    event.preventDefault
    $(this).next().show();
    $(this).prev().animate({
    fontSize: '14px',
    top: '30px'
  }, 'fast');

    if($(this).val() ===('.com') ) {
        $(this).next().removeClass('glyphicon-remove-circle').addClass('glyphicon-ok-circle');
        $(this).css("color", "#00b5ec");
    }

     else {
    $(this).next().removeClass('glyphicon-ok-circle').addClass('glyphicon-remove-circle');
    $(this).css('color', '#fa805f');
   }

  }

  function focusOut() {
    $(this).prev().animate({
      color: "red",
      fontSize: "16px",
      top: '60px'
    }, "fast");
  }
 
  $('#name, #help').focus(inputEvent).keyup(inputEvent).focusout(focusOut);
  $('#e-mail').focus(Email).keyup(Email).focusout(focusOut);
  
  $('#letsTalk-footer').click(function(){
    $('form .glyphicon-remove-circle').show();
  });
  



});

