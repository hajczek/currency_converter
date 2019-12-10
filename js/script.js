// RESOURCES
// API: fixer.io/signup/free

(function () {

  // Use strict mode 
  "use strict";

  // Define handler for fileds in form
  var startValue = $('#start_value');
  var selectFrom = $('#select_from');
  var resultValue = $('#result_value');
  var selectTo = $('#select_to');

  // Connect with Fixer API
  fetch("http://data.fixer.io/api/latest?access_key=8f4bea7234cec815a1d43fe3c64e07a2&symbols=PLN,EUR,USD,GBP")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      // Define function which convert currencies
      function convert() {
        var newVal = ((startValue.val() / data.rates[selectFrom.val()]) * data.rates[selectTo.val()]);
        resultValue.val(newVal.toPrecision(6));
      }
      // Add actions for field in form, which calls convert function
      startValue.on('input', function (event) {
        convert();
      });
      selectFrom.on('change', function (event) {
        convert();
      });
      selectTo.on('change', function (event) {
        convert();
      });
    })
    .catch(function (error) {
      console.error(error);
    });

})();
