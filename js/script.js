$(document).ready(function () {
  $('td').click(function () {
    var casella = $(this);
    $.ajax(
     {
       url: "https://flynn.boolean.careers/exercises/api/random/int",
       method: "GET",
       success: function (data) {
        casella.append(data.response)
        if (data.response <= 5) {
          casella.css('background-color', 'yellow');
        } else{
          casella.css('background-color', 'green')
        }
       },
       error: function (richiesta, stato, errori) {
         alert("E' avvenuto un errore. " + errore);
       }
     }
   );
  });
});
