$(document).ready(function(){
    $('#contactUs').on('submit', function(e) {  //Don't foget to change the id form
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
    var data = $(this).serialize();
    $.ajax({
        url:'contact-us.php', //===PHP file name====
        data: data,
        type:'POST',
        success:function(data){
          console.log(data);
          //Success Message == 'Title', 'Message body', Last one leave as it is
          swal("Thank you for contacting us.", 
          "We have received your enquiry and will get back to you within 1-3 business days.", "success");
          document.getElementById("contactUs").reset(); //Clear form after submit
        },
        error:function(data){
          //Error Message == 'Title', 'Message body', Last one leave as it is
          swal("Oops...", "Something went wrong, please try again later.!", "error");
          document.getElementById("contactUs").reset(); //Clear form after submit
        }
      });
    });
  });