// var message = "";
//
// $("#sendMessage").on("click", function() {
//     message = $("#contactform").serialize();
//     $.ajax({
//         url: "//formspree.io/dynamicrealities@gmail.com",
//         method: "POST",
//         data: {message: message},
//         dataType: "json"
//     });
//     alert('Thanks for the email, we\'ll be in touch promptly.');
//     return false;
// });

let submitted = false
$('#gform').on('submit', function(e) {
  $('#gform *').fadeOut(2000);
  $('#gform').prepend('Your submission has been processed...');
});
