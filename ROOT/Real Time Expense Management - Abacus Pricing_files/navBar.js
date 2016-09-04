$(document).ready(function() {
  $(".mobile-toggle").on('click', function(){
    $(".mobile-dropdown").fadeToggle("fast");
  });

  $(".drop").on('click', function(){
    $(".dropdown").fadeToggle("fast");
    $(".integrationDropdown").fadeOut("fast");
  });

  $(".integrationDrop").on('click', function(){
    $(".integrationDropdown").fadeToggle("fast");
    $(".dropdown").fadeOut("fast");
  });

  $(document).on( 'keydown', function ( e ) {
    if ( e.keyCode === 27 ) {
      $(".integrationDropdown, .dropdown").fadeOut("fast");
    }
  });

  $(".mobile-dropdown").hide();

  var scroll_pos = 0;
  $(document).scroll(function() {
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 50) {
      $(".navBar").css('border-bottom', '1px solid rgba(0,0,0,0.08)');
    }
    if(scroll_pos < 49) {
      $(".navBar").css('border-bottom', '0px');
    } else {
      $("navBar").css('border-bottom', '0px');
    }
  });

  $(document).mouseup(function (e) {
    var container = $(".dropdown, .integrationDropdown");
    if (!container.is(e.target)
      && container.has(e.target).length === 0)
    {
      container.fadeOut("fast");
    }
  });

});