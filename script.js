var stockSymbol = "";
var sym1 = "AAA";
var currencySymbols = "AUD";
var amountUSD;
var marketPrice;
var SNP;
var DJI;
var NASDAQ;
var currencyReturn = "";
var btn_press = false;

// financeNASDAQ();

$("#search-button").on("click", function (event) {
	event.preventDefault();
	btn_press = true;
	stockSymbol = $("#stockSymbol").val();
	financeAPI(stockSymbol);


});

// currencyAPI(currencySymbols, amountUSD);
// financeAPI(stockSymbol);
//  financeNASDAQ();

function financeAPI(stockSymbol) {

	var stockSettings = {
		"async": true,
		"crossDomain": true,
		// "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en&",
		"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=" + stockSymbol + "%252CKC%253DF%252C002210.KS%252CIWM%252CAMECX",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
			"x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
		}
	};

	$.ajax(stockSettings).done(function (stockResponse) {
		console.log(stockResponse);
		var cur = stockResponse.quoteResponse.result[0];

		sym1 = cur.symbol;
		marketPrice = cur.regularMarketPrice;
		marketPrice = parseFloat(marketPrice).toFixed(2);
		$("#defaultPrice").text(marketPrice);
		if (btn_press) {
			currencyAPI("EUR", marketPrice);

			currencyAPI("JPY", marketPrice);

			currencyAPI("GBP", marketPrice);
			btn_press = false;
		}
	});
}

function financeNASDAQ() {


	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
			"x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
		}
	};

	$.ajax(settings).done(function (response) {
		var cur = response.marketSummaryResponse;
		// SNP = response.marketSummaryResponse.result[0].regularMarketPrice.raw;
		SNP = cur.result[0].regularMarketPrice.raw;
		DJI = cur.result[1].regularMarketPrice.raw;
		NASDAQ = cur.result[2].regularMarketPrice.raw;
		// stockResponse.quoteResponse.result[0];
		// console.log(response);
		// console.log("snp =" + SNP);
		// console.log("dow =" + DJI);
		// console.log("nasdaq =" + NASDAQ);
		$("#dow").text(DJI);
		$("#Sp500").text(SNP);
		$("#nasdaq").text(NASDAQ);



		/*****************display filds for this api call */
		// <div class="col" id="dow">DOW</div>
		// <div class="col" id="Sp500">SP 500</div>
		// <div class="col" id="nasdaq">NASDAQ</div>
		/************************vars */
		// SNP = 999.99;
		// DJI = 999.99;
		// NASDAQ = 999.99;
	});
}
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
/******************************************************************** */
// {quoteResponse: {…}}
// quoteResponse:
// result: Array(5)
// 0:
// language: "en-US"
// region: "US"
// quoteType: "EQUITY"
// triggerable: true
// quoteSourceName: "Nasdaq Real Time Price"
// currency: "USD"
// sharesOutstanding: 4375479808
// marketCap: 1401422479360
// sourceInterval: 15
// exchangeTimezoneName: "America/New_York"
// exchangeTimezoneShortName: "EST"
// pageViews: {shortTermTrend: "DOWN", midTermTrend: "UP", longTermTrend: "UP"}
// gmtOffSetMilliseconds: -18000000
// esgPopulated: false
// tradeable: true
// components: (260) ["^NQDMXJPLMAUD", "^NQDOG", "^NQUSBLM", "^NQSHYL", "^QIV", "^NQDXUSMLTCGN", "^NQUS500LCGN", "^NQUSB9572LMCADN", "^NQGMOIN", "^NQSXYN", "^NQGS", "^NQNALMEURN", "^NQUSB9000LMJPYN", "^NQUSB9572LMN", "^NQUSBLMCAD", "^NQUSB9000LMEURN", "^NQDMXKRJPYN", "^NQDMXKRLMAUDN", "^NQNA9000LMGBPN", "^NQUSB9570LMJPY", "^NQDMXJPLMAUDN", "^NQDMXKRLMAUD", "^NQUSBLMJPY", "^NDXCHF", "^NQNA9000LMEUR", "^AIX", "^NQNA9000LMCAD", "^NQGXGBLMN", "^NQDMXKRLCJPY", "^NQUSB9000LMEUR", "^NQDXUSLCEUR", "^NQUSB9572LMAUDN", "^NQDXUSLCG", "^CAPEXA", "^CPQ", "^CPQNTR", "^NQUSB9000LMCAD", "^NQDM9000LMJPY", "^NQG9000LMCADN", "^NQDMXKRAUD", "^NQDMXKRLMGBPN", "^NQGXGBLMGBPN", "^NQDM9000LMEURN", "^NQGXJPLMJPYN", "^NQNALMCADN", "^NQUSBLMEUR", "^NQG9000LMGBP", "^NQDM9000LMJPYN", "^NQNALMJPY", "^DWANQTL", "^MSH", "^NDX", "^NQGXGBLMJPY", "^QCRD", "^NQUSB9570LMGBPN", "^IXCO", "^NQGXJPLMJPY", "^NQDMXKR", "^NQDMXGBLMCADN", "^NQUSB9000LMJPY", "^NQDMXKRLCN", "^NQGXGBLMEURN", "^NQGXJPLMCAD", "^NQGXJPLMEUR", "^XNDXNNRCHF", "^DWARJFMU", "^NQUSB9572LMEUR", "^NQDMXJPLMGBPN", "^NQDMXJPLMN", "^NQUSB9572LMCAD", "^NQSXY", "^NQDM9000LMAUD", "^NQDMXKRLCJPYN", "^NQDMXKRLMCADN", "^NQDMXKRLCEUR", "^NQUSB9000LMN", "^NQDXUSLC", "^NQUSB9570LMAUDN", "^NQGXGBLMJPYN", "^NQUSB9572LMEURN", "^NQG9000LMJPYN", "^NQUSBLMEURN", "^NQDMXKRJPY", "^NQDMXKRLCCAD", "^NQUSB9570LM", "^NQDMXKRLCEURN", "^NQUSMLTCG", "^NQG9000LMAUD", "^NQGXJPLMGBPN", "^QMI", "^NQUSB9000LMCADN", "^IXIC", "^NQNALM", "^NQUS500LC", "^NQDMXGBLMJPY", "^NQNALMAUD", "^NQNA9000LMN", "^NQVMVUS", "^NQDXUSLCN", "^NQGXGBLMAUD", …]
// fiftyTwoWeekLowChange: 151.87001
// market: "us_market"
// marketState: "REGULAR"
// shortName: "Apple Inc."
// priceHint: 2
// targetPriceMean: 330.04
// exchange: "NMS"
// exchangeDataDelayedBy: 0
// regularMarketPrice: 320.29
// regularMarketTime: 1580921186
// regularMarketChange: 1.4400024
// regularMarketOpen: 323.52
// regularMarketDayHigh: 324.73
// regularMarketDayLow: 318.955
// regularMarketVolume: 15887317
// regularMarketChangePercent: 0.45162377
// regularMarketDayRange: "318.955 - 324.73"
// regularMarketPreviousClose: 318.85
// bid: 320.6
// ask: 320.63
// bidSize: 8
// askSize: 8
// messageBoardId: "finmb_24937"
// fullExchangeName: "NasdaqGS"
// dividendYield: 1
// longName: "Apple Inc."
// averageDailyVolume3Month: 28920791
// beta: 1.244671
// fiftyTwoWeekLowChangePercent: 0.9017338
// fiftyTwoWeekRange: "168.42 - 327.85"
// fiftyTwoWeekHighChange: -7.5599976
// fiftyTwoWeekHighChangePercent: -0.023059318
// fiftyTwoWeekLow: 168.42
// fiftyTwoWeekHigh: 327.85
// earningsTimestamp: 1580247000
// earningsTimestampStart: 1588085940
// earningsTimestampEnd: 1588608000
// trailingPE: 25.429934
// dividendsPerShare: 3.04
// dividendRate: 3.08
// epsTrailingTwelveMonths: 12.595
// symbol: "AAPL"
/**********************END************************* */



function currencyAPI(currencySymbols, amountUSD) {

	// console.log("inprice =" + amountUSD);
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=" + currencySymbols + "&amount=" + amountUSD,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
			"x-rapidapi-key": "3b8ee98b70mshf74d3fe848bde7dp1f7b3ajsn392bc6e2ea65"
		}
	};


	// $.ajax(settings).done(function (response) {
	// 	console.log(response);
	// });

	$.ajax(settings).done(function (response) {
		rate = "response.rates" + currencySymbols + ".rate";
		// rateTwo
		// ."+currencySymbols+".rate"
		console.log(response);
		//var currencyReturn = response.rates.AUD.rate;
		currencyReturn = response.rates[currencySymbols].rate_for_amount;
		currencyReturn = parseFloat(currencyReturn).toFixed(2);
		console.log("$---" + currencySymbols);
		console.log("$---" + currencyReturn);
		if (currencySymbols === "EUR") {
			currencyAPI("EUR", marketPrice);
			console.log("EUR=" + marketPrice);
			console.log("currencyReturn=" + currencyReturn);
			$("#defaultCtry1").text("EUR = " + currencyReturn);
		}
		if (currencySymbols === "JPY") {
			$("#defaultCtry2").text("JPY = " + currencyReturn);
			console.log("JPY=" + marketPrice);
			console.log("currencyReturn=" + currencyReturn);
		}
		if (currencySymbols === "GBP") {
			$("#defaultCtry3").text("GBP = " + currencyReturn);
			console.log("GBP=" + marketPrice);
			console.log("currencyReturn=" + currencyReturn);
		}
	
	});
}

/************************Response Sample************************************ */
// {amount: "1.0000", base_currency_code: "USD", base_currency_name: "US Dollar", rates: {…}, status: "success", …}
// amount: "1.0000"
// base_currency_code: "USD"
// base_currency_name: "US Dollar"
// rates:
// AUD: {currency_name: "Australian Dollar", rate: "1.4880", rate_for_amount: "1.4880"}
// __proto__: Object
// status: "success"
// updated_date: "2020-02-05"
// __proto__: Object
/************************************************ */
// url to Currency Symbols https://www.xe.com/symbols.php
