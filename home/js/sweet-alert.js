// Alert Redirect to Another Link NCVT MIS
    $(document).on('click', '#ncvtmis', function(e) {
        swal({
        title: "Are you sure?", 
        text: "This link will take you to an external web site. https://ncvtmis.gov.in/Pages/Marksheet/Validate.aspx", 
        type: "warning",
        confirmButtonText: "Yes !",
        showCancelButton: true
        })
          .then((result) => {
          if (result.value) {
          window.open('https://ncvtmis.gov.in/Pages/Marksheet/Validate.aspx', '_blank');
          
          } 
        })
    });

    // Alert Redirect to Another Link APPRENTICE
    $(document).on('click', '#apprentice', function(e) {
        swal({
        title: "Are you sure?", 
        text: "This link will take you to an external web site. https://apprenticeshipindia.org", 
        type: "warning",
        confirmButtonText: "Yes !",
        showCancelButton: true
        })
          .then((result) => {
          if (result.value) {
    window.open('https://apprenticeshipindia.org/', '_blank');
          }
        })
    });

  //Alert Redirect to Another Link SKILL INDIA
$(document).on('click', '#skillindia', function(e) {
        swal({
        title: "Are you sure?", 
        text: "This link will take you to an external web site. https://skillindia.nsdcindia.org", 
        type: "warning",
        confirmButtonText: "Yes !",
        showCancelButton: true
        })
          .then((result) => {
          if (result.value) {
    window.open('https://skillindia.nsdcindia.org/', '_blank');
          }
        })
    });
//Alert Redirect to Another Link NATS
$(document).on('click', '#NATS', function(e) {
        swal({
        title: "Are you sure?", 
        text: "This link will take you to an external web site. https://portal.mhrdnats.gov.in/boat/login/user_login.action", 
        type: "warning",
        confirmButtonText: "Yes !",
        showCancelButton: true
        })
          .then((result) => {
          if (result.value) {
    window.open('https://portal.mhrdnats.gov.in/boat/login/user_login.action', '_blank');
          }
        })
    });
//Alert Redirect to Another Link NCS
$(document).on('click', '#NCS', function(e) {
        swal({
        title: "Are you sure?", 
        text: "This link will take you to an external web site. https://www.ncs.gov.in/", 
        type: "warning",
        confirmButtonText: "Yes !",
        showCancelButton: true
        })
          .then((result) => {
          if (result.value) {
    window.open('https://www.ncs.gov.in/', '_blank');
          }
        })
    });
//Alert Redirect to Another Link NCS
$(document).on('click', '#DGT', function(e) {
        swal({
        title: "Are you sure?", 
        text: "This link will take you to an external web site. https://dgt.gov.in/", 
        type: "warning",
        confirmButtonText: "Yes !",
        showCancelButton: true
        })
          .then((result) => {
          if (result.value) {
    window.open('https://dgt.gov.in/', '_blank');
          }
        })
    });
//Alert information
$(document).on('click', '#comesoon', function (e) {
  swal(
  'This app will be available soon.',
  'Please wait  <b style="color:cornflowerblue;">with patience.</b>',
  'info');

});
//Alert information
$(document).on('click', '#soon', function (e) {
  swal(
  'This app will be available soon.',
  'Please wait  <b style="color:cornflowerblue;">with patience.</b>',
  'info');

});

//Alert information
$(document).ready(function(){
  $('#contactForm').on('submit',function(e) {  //Don't foget to change the id form
  $.ajax({
      url:'contact.php', //===PHP file name====
      data:$(this).serialize(),
      type:'POST',
      success:function(data){
        console.log(data);
        //Success Message == 'Title', 'Message body', Last one leave as it is
      swal("Your data has been successfully saved.", "Thank you for contacting us.You will get a reply within 24 to 48 hours.", "success");
      },
      error:function(data){
        //Error Message == 'Title', 'Message body', Last one leave as it is
      swal("Oops...", "Something went wrong :(", "error");
      }
    });
    e.preventDefault(); //This is to Avoid Page Refresh and Fire the Event "Click"
  });
});
// clear data
