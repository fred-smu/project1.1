var stockSymbol = "";
var sym1 = "AAA";
var currencySymbols = "AUD";
var amountUSD;
var marketPrice;
var SNP;
var DJI;
var NASDAQ;
var currencyReturn = "";
var CCflag = false;
var btn_press = false;
var btn_select = false;
var lockPrice;
var newsym;
currencyCh = [
	"Albania Lek,ALL",
	    "Argentina Peso,ARS",
	    "Australia Dollar,AUD",
	    "Azerbaijan Manat,AZN",
	    "Belarus Ruble,BYN",
	    "Bulgaria Lev,BGN",
	    "Brazil Real,BRL",
	    "Brunei Darussalam Dollar,BND",
	    "Cambodia Riel,KHR",
	    "Canada Dollar,CAD",
	    "Chile Peso,CLP",
	    "China Yuan Renminbi,CNY",
	    "Croatia Kuna,HRK",
	    "Czech Republic Koruna,CZK",
	    "Denmark Krone,DKK",
	    "Egypt Pound,EGP",
	    "Euro Member Countries,EUR",
	    "Hong Kong Dollar,HKD",
	    "Hungary Forint,HUF",
	    "Iceland Krona,ISK",
	    "India Rupee,INR",
	    "Indonesia Rupiah,IDR",
	    "Iran Rial,IRR",
	    "Israel Shekel,ILS",
	    "Japan Yen,JPY",
	    "Kazakhstan Tenge,KZT",
	    "Korea (South) Won,KRW",
	    "Kyrgyzstan Som,KGS",
	    "Laos Kip,LAK",
	    "Lebanon Pound,LBP",
	    "Macedonia Denar,MKD",
	    "Malaysia Ringgit,MYR",
	    "Mexico Peso,MXN",
	    "Nepal Rupee,NPR",
	    "New Zealand Dollar,NZD",
	    "Norway Krone,NOK",
	    "Oman Rial,OMR",
	    "Pakistan Rupee,PKR",
	    "Philippines Peso,PHP",
	    "Poland Zloty,PLN",
	    "Qatar Riyal,QAR",
	    "Romania Leu,RON",
	    "Russia Ruble,RUB",
	    "Saudi Arabia Riyal,SAR",
	    "Serbia Dinar,RSD",
	    "Singapore Dollar,SGD",
	    "South Africa Rand,ZAR",
	    "Sri Lanka Rupee,LKR",
	    "Sweden Krona,SEK",
	    "Switzerland Franc,CHF",
	    "Taiwan New Dollar,TWD",
	    "Thailand Baht,THB",
	    "Turkey Lira,TRY",
	    "Ukraine Hryvnia,UAH",
	    "United Kingdom Pound,GBP",
	    "United States Dollar,USD",
	    "Uzbekistan Som,UZS",
	    "Viet Nam Dong,VND"]





// "html","css","java","javascript","php","c++","node.js","ASP","JSP","SQL"];
 fredCode();
financeNASDAQ();
// on click og the search button 
$("#search-button").on("click", function (event) {
	event.preventDefault();
	// document.getElementById("#currencyChange").value = "Select";
	// document.getElementById("mySelect").value = "banana";
	btn_press = true;
	stockSymbol = $("#stockSymbol").val();
	financeAPI(stockSymbol);


});
$("#currencyChange").on("click", function (event) {
	var selectVal = $("#currencyChange :selected").text();
	var selectLenght = selectVal.length;
	var newsym = selectVal.slice((selectLenght - 3), selectLenght)
});
// returns the selling price for the Symbol
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
			lockPrice = marketPrice;
			btn_press = false;
			currencyAPI("EUR", marketPrice);
			currencyAPI("JPY", marketPrice);
			currencyAPI("GBP", marketPrice);
		};
		var newListItem = '<li id="searchHist">' + stockSymbol + ' Selling For$' + marketPrice + '</li>';
		$('#searchResult').prepend(newListItem);

	});
}
// set the Nasdq,SNP500,Doe Jones
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
		SNP = cur.result[0].regularMarketPrice.raw;
		DJI = cur.result[1].regularMarketPrice.raw;
		NASDAQ = cur.result[2].regularMarketPrice.raw;
		// $("#dow").text(DJI);
		// $("#Sp500").text(SNP);
		// $("#nasdaq").text(NASDAQ);
		$("#dow").html(DJI);
		$("#sp500").html(SNP);
		$("#nasdaq").html(NASDAQ);
	});
}
// currencyApi pass it 2 vars the 1) 3 letter Symbolfor the output example "AUD"
//								  2) the ammount to change into    example "753.01"
// url to Currency Symbols https://www.xe.com/symbols.php
function currencyAPI(currencySymbols, amountUSD) {
	// currencySymbols = "AWG";
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://currency-converter5.p.rapidapi.com/currency/historical/2018-02-09?format=json&to=" + currencySymbols + "&from=USD&amount=" + amountUSD,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
			"x-rapidapi-key": "92cebe218cmshe8d74a9c1f090cep1da599jsn481891ebdf92"
		}
	}
	
	

	$.ajax(settings).done(function (response) {
		rate = "response.rates" + currencySymbols + ".rate";
		console.log(response);
		console.log(currencySymbols+" + "+amountUSD);
		currencyReturn = response.rates[currencySymbols].rate_for_amount;
		currencyReturn = parseFloat(currencyReturn).toFixed(2);
		if (currencySymbols === "EUR") {
			lockPrice = marketPrice;
			// currencyAPI("EUR", marketPrice);
			$("#defaultCtry1").html(" " + currencyReturn);
		}
		if (currencySymbols === "JPY") {
			lockPrice = marketPrice;
			// currencyAPI("JPY", marketPrice);
			$("#defaultCtry2").html(" " + currencyReturn);
		}
		if (currencySymbols === "GBP") {
			lockPrice = marketPrice;
			// currencyAPI("GBP", marketPrice);
			$("#defaultCtry3").html(" " + currencyReturn);
		}
		if (CCflag) {
			$("#displayCurrencyValue").html(currencySymbols+" = " + currencyReturn);
			console.log("currencyReturn=" + currencyReturn + "   stockSymbol=" + currencySymbols);
			CCflag = false;
		}
	});
}

//populates the dropdown box
function fredCode() {
	var nameTag = "<option value='0'>Select</option>";
	for (let index = 0; index < currencyCh.length; index++) {
		const name = currencyCh[index];
		nameTag += "<option value='" + name + "'>" + name + "</option>"
	}
	document.getElementById('currencyChange').innerHTML = nameTag;
}
//gets the selected item and calls the currencyAPI to set the value
$("#currencyChange").on("click", function (event) {
	CCflag = true;
	var selectVal = $("#currencyChange :selected").text();
	var selectLenght = selectVal.length;
	newsym = selectVal.slice((selectLenght - 3), selectLenght)
	currencyAPI(newsym, lockPrice);
	
	console.log("newsym =" + newsym);
	console.log($("#currencyChange :selected").text()); // The text content of the selected option
	console.log($("#currencyChange :selected").val()); // The value of the selected option
	console.log("lockprice=" + lockPrice + "   stockSymbol=" + newsym);
});