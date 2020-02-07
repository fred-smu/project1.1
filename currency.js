var num = $("<input>");
var calculateBtn = $(".calculate");
var currencySymbols = $(".currency");
var amountUSD;

$(".calcuate").on("click", function() {
  event.preventDefault();

  amountUSD = $("#userInput").val();
  var currencyArr = ["EUR", "JPY", "GBP"];
  for (var i = 0; i < currencyArr.length; i++) {
    currencyCall(currencyArr[i]);
  }
});

$(".currency").on("click", function() {
  console.log($(this).val());
});

function currencyCall(location) {
  if (location.length > 3) {
    alert("Use a valid Code");
  }

  settings = {
    async: true,
    crossDomain: true,
    url:
      "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=" +
      location +
      "&amount=" +
      amountUSD,
    method: "GET",
    headers: {
      "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
      "x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
    }
  };
  $.ajax(settings).done(function(response) {
    console.log(location);
    var symbolDiv = $(`<div>${location}: </div>`);
    var priceSpan = $(`<span id='${location}'></span>`);
    if (location !== "EUR" && location !== "JPY" && location !== "GBP") {
      $("#newSymbol").html("");
      priceSpan.text(
        parseFloat(response.rates[location].rate_for_amount).toFixed(2)
      );
      symbolDiv.append(priceSpan);
      $("#newSymbol").append(symbolDiv);
    }
    else{
      $(`#${location}`).text(parseFloat(response.rates[location].rate_for_amount).toFixed(2))
    }
  });
}

$("#search").click(function() {
  var sym = $("#searchSymbol").val().toUpperCase();
  currencyCall(sym);
});
