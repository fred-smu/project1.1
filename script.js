var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
		"x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spread",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
// 		"x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// var settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=AUD&to=AUD&amount=1",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
// 		"x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

