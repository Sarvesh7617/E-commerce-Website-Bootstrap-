$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.backtop').fadeIn();
    } else {
      $('.backtop').fadeOut();
    }
  });

  // Smooth scrolling to top
  $('.backtop a').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 800); // Adjust the speed as needed
    return false;
  });

  // Quantity increment and decrement
  $('.quantity').each(function() {
    var $this = $(this);
    var min = parseInt($this.attr('min'));
    var max = parseInt($this.attr('max'));

    $this.parent().find('.fa-minus').click(function() {
      var value = parseInt($this.val());
      if (value > min) {
        $this.val(value - 1);
      }
    });

    $this.parent().find('.fa-plus').click(function() {
      var value = parseInt($this.val());
      if (value < max) {
        $this.val(value + 1);
      }
    });
  });
  $(`#form`).submit(function(e){
    e.preventDefault();    // prevents the form from submitting if any validation fails.
  
    var name=$(`#name`).val().trim();
    var email=$(`#email`).val().trim();
    var msg=$(`#msg`).val().trim();

    $(".error").remove();

    var isValidForm=true;

    if (name.length<1)
      {
        $(`#name`).after(`<span class="error">^ This field is not Empty</span>`);
        isValidForm=false;
      }
    if (email.length<1)   
      { 
        $(`#email`).after(`<span class="error">^ This field is not Empty</span>`);
        isValidForm=false;
      }
    if (msg.length<1)  
      {
        $(`#msg`).after(`<span class="error">^ This field is not Empty</span>`);
        isValidForm=false;
      }  
      return isValidForm;  
  });
});
