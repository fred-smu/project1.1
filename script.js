var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to=AUD&from=AUD&amount=1",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
		"x-rapidapi-key": "SIGN-UP-FOR-KEY"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});

// "x-rapidapi-host": "currency-converter5.p.rapidapi.com",
		// "x-rapidapi-key": "SIGN-UP-FOR-KEY"
// var apiKeyIEX = "pk_763e2cfab41b4f2a829f6d797f97d59d" ;
// var settings = {
// 	"async": true,
//     "crossDomain": true,
//     // "url":"https://sandbox.iexapis.com/stable/stock/aapl/batch?types=quote,news,chart&range=1m&last=10&token=Tsk_0d5eb8542aaf46589e416a56c7218537"
// 	"url": "https://investors-exchange-iex-trading.p.rapidapi.com/stock/msft/effective-spreadx-rapidapi-key"+apiKeyIEX,
// 	"method": "GET",
	
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// "headers": {
//     "x-rapidapi-host": "investors-exchange-iex-trading.p.rapidapi.com",
//     "x-rapidapi-key": "SIGN-UP-FOR-KEY"
// }

/************************************************************************** */
// var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
//     "method": "GET",
//     "headers": {
//         "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
//         "x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
//     }
// }

// $.ajax(settings).done(function (response) {
//     console.log(response);
// });