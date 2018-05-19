$(document).ready(function(){ 
    $(function(){
        $('#slideshow h4:gt(0)').hide();
        setInterval(function(){
          $('#slideshow :first-child').fadeOut(1500);
          setTimeout(function(){
            $('#slideshow :first-child').next('h4').fadeIn(1500)
             .end().appendTo('#slideshow');
          },1500)},
          5000);
    });
});