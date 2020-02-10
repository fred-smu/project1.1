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
currencyCh = ["Albania Lek,ALL",
	"Afghanistan Afghani,AFN",
	"Argentina Peso,ARS",
	"Aruba Guilder,AWG",
	"Australia Dollar,AUD",
	"Azerbaijan Manat,AZN",
	"Bahamas Dollar,BSD",
	"Barbados Dollar,BBD",
	"Belarus Ruble,BYN",
	"Belize Dollar,BZD",
	"Bolivia Bolíviano,BOB",
	"Bosnia and Herzegovina Convertible Mark,BAM",
	"Botswana Pula,BWP",
	"Bulgaria Lev,BGN",
	"Brazil Real,BRL",
	"Brunei Darussalam Dollar,BND",
	"Cambodia Riel,KHR",
	"Canada Dollar,CAD",
	"Cayman Islands Dollar,KYD",
	"Chile Peso,CLP",
	"China Yuan Renminbi,CNY",
	"Colombia Peso,COP",
	"Costa Rica Colon,CRC",
	"Croatia Kuna,HRK",
	"Cuba Peso,CUP",
	"Czech Republic Koruna,CZK",
	"Denmark Krone,DKK",
	"Dominican Republic Peso,DOP",
	"East Caribbean Dollar,XCD",
	"Egypt Pound,EGP",
	"El Salvador Colon,SVC",
	"Euro Member Countries,EUR",
	"Falkland Islands (Malvinas) Pound,FKP",
	"Fiji Dollar,FJD",
	"Ghana Cedi,GHS",
	"Gibraltar Pound,GIP",
	"Guatemala Quetzal,GTQ",
	"Guernsey Pound,GGP",
	"Guyana Dollar,GYD",
	"Honduras Lempira,HNL",
	"Hong Kong Dollar,HKD",
	"Hungary Forint,HUF",
	"Iceland Krona,ISK",
	"India Rupee,INR",
	"Indonesia Rupiah,IDR",
	"Iran Rial,IRR",
	"Isle of Man Pound,IMP",
	"Israel Shekel,ILS",
	"Jamaica Dollar,JMD",
	"Japan Yen,JPY",
	"Jersey Pound,JEP",
	"Kazakhstan Tenge,KZT",
	"Korea (North) Won,KPW",
	"Korea (South) Won,KRW",
	"Kyrgyzstan Som,KGS",
	"Laos Kip,LAK",
	"Lebanon Pound,LBP",
	"Liberia Dollar,LRD",
	"Macedonia Denar,MKD",
	"Malaysia Ringgit,MYR",
	"Mauritius Rupee,MUR",
	"Mexico Peso,MXN",
	"Mongolia Tughrik,MNT",
	"Mozambique Metical,MZN",
	"Namibia Dollar,NAD",
	"Nepal Rupee,NPR",
	"Netherlands Antilles Guilder,ANG",
	"New Zealand Dollar,NZD",
	"Nicaragua Cordoba,NIO",
	"Nigeria Naira,NGN",
	"Norway Krone,NOK",
	"Oman Rial,OMR",
	"Pakistan Rupee,PKR",
	"Panama Balboa,PAB",
	"Paraguay Guarani,PYG",
	"Peru Sol,PEN",
	"Philippines Peso,PHP",
	"Poland Zloty,PLN",
	"Qatar Riyal,QAR",
	"Romania Leu,RON",
	"Russia Ruble,RUB",
	"Saint Helena Pound,SHP",
	"Saudi Arabia Riyal,SAR",
	"Serbia Dinar,RSD",
	"Seychelles Rupee,SCR",
	"Singapore Dollar,SGD",
	"Solomon Islands Dollar,SBD",
	"Somalia Shilling,SOS",
	"South Africa Rand,ZAR",
	"Sri Lanka Rupee,LKR",
	"Sweden Krona,SEK",
	"Switzerland Franc,CHF",
	"Suriname Dollar,SRD",
	"Syria Pound,SYP",
	"Taiwan New Dollar,TWD",
	"Thailand Baht,THB",
	"Trinidad and Tobago Dollar,TTD",
	"Turkey Lira,TRY",
	"Tuvalu Dollar,TVD",
	"Ukraine Hryvnia,UAH",
	"United Kingdom Pound,GBP",
	"United States Dollar,USD",
	"Uruguay Peso,UYU",
	"Uzbekistan Som,UZS",
	"Venezuela Bolívar,VEF",
	"Viet Nam Dong,VND",
	"Yemen Rial,YER",
	"Zimbabwe Dollar,ZWD"]





// "html","css","java","javascript","php","c++","node.js","ASP","JSP","SQL"];
 fredCode();
financeNASDAQ();

// on click on the search button 
$("#search-button").on("click", function (event) {
	event.preventDefault();
	btn_press = true;
	CCflag = false;
	stockSymbol = $("#stockSymbol").val();
	$("#defaultCtry1").html("");
	$("#defaultCtry2").html("");
	$("#defaultCtry3").html("");
	
	financeAPI(stockSymbol);


});
$("#currencyChange").on("change", function (event) {
	var selectVal = $("#currencyChange :selected").text();
	var selectLenght = selectVal.length;
	var newsym = selectVal.slice((selectLenght - 3), selectLenght)
});
// returns the selling price for the Symbol
function financeAPI(stockSymbol) {

	var stockSettings = {
    async: true,
    crossDomain: true,
    // "url": "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en&",
    url:
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-quotes?region=US&lang=en&symbols=" +
      stockSymbol +
      "%252CKC%253DF%252C002210.KS%252CIWM%252CAMECX",
    method: "GET",
    headers: {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      "x-rapidapi-key": "d70d653601mshede7e7ed8e9af16p124362jsn3d74fdf16a19"
    }
  };

	$.ajax(stockSettings).done(function (stockResponse) {
		console.log(stockResponse);
		var cur = stockResponse.quoteResponse.result[0];

		sym1 = cur.symbol;
		marketPrice = cur.regularMarketPrice;
		marketPrice = parseFloat(marketPrice).toFixed(2);
		$("#defaultPrice").text(marketPrice);
		
			lockPrice = marketPrice;
			btn_press = false;
			currencyAPI("EUR", lockPrice);
			currencyAPI("JPY", lockPrice);
			currencyAPI("GBP", lockPrice);
		
		var newListItem = '<li id="searchHist">' + stockSymbol + ' Selling For$' + marketPrice + '</li>';
		$('#searchResult').prepend(newListItem);

	});
}
// set the Nasdq,SNP500,Doe Jones
function financeNASDAQ() {


	var settings = {
    async: true,
    crossDomain: true,
    url:
      "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/get-summary?region=US&lang=en",
    method: "GET",
    headers: {
      "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      // "x-rapidapi-key": "92cebe218cmshe8d74a9c1f090cep1da599jsn481891ebdf92"
      "x-rapidapi-key": "d70d653601mshede7e7ed8e9af16p124362jsn3d74fdf16a19"
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

	console.log(currencySymbols+" "+amountUSD);
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=USD&to=" + currencySymbols + "&amount=" + amountUSD,
		"method": "GET",
		"headers": {
			"x-rapidapi-host": "currency-converter5.p.rapidapi.com",
			"x-rapidapi-key": "92cebe218cmshe8d74a9c1f090cep1da599jsn481891ebdf92"
		}
	};

	$.ajax(settings).done(function (response) {
		rate = "response.rates" + currencySymbols + ".rate";
		console.log(response);
		currencyReturn = response.rates[currencySymbols].rate_for_amount;
		currencyReturn = parseFloat(currencyReturn).toFixed(2);
		if (currencySymbols === "EUR") {
			lockPrice = marketPrice;
			// currencyAPI("EUR", marketPrice);
			$("#defaultCtry1").html(" = " + currencyReturn);
		}
		if (currencySymbols === "JPY") {
			lockPrice = marketPrice;
			// currencyAPI("JPY", marketPrice);
			$("#defaultCtry2").html("= "  + currencyReturn);
		}
		if (currencySymbols === "GBP") {
			lockPrice = marketPrice;
			// currencyAPI("GBP", marketPrice);
			$("#defaultCtry3").html(" = " + currencyReturn);
		}
		if (CCflag) {
			$("#displayCurrencyValue").html(newsym+" = " + currencyReturn);
			displayCurrencyValue
			console.log(CCflag+ "currencyReturn=" + currencyReturn + "   stockSymbol=" + newsym);
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
$("#currencyChange").on("change", function (event) {
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