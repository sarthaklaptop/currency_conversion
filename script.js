const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '0ea0d06bb2msh9a9e9216f20b903p168a39jsn9a30cbb49336',
		'X-RapidAPI-Host': 'currency-converter-by-api-ninjas.p.rapidapi.com'
	}
};


async function convert() {

    let e = document.querySelector("#baseCurrency");

    topicName = e.value;

    baseCurrency = e.options[e.selectedIndex].text; 

    let u = document.querySelector("#endCurrency");

    topicName = u.value;

    endCurrency = u.options[u.selectedIndex].text; 

    let bm = document.querySelector("#input-value-text");

    let baseAmount = bm.value;

    const response = await fetch(`https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${baseCurrency}&want=${endCurrency}&amount=${baseAmount}`, options);
    
    const converted = await response.json();

    console.log(converted);

    let outputValue = await converted?.new_amount;

    document.querySelector("#output-value-text").value = outputValue;

    // newValue = newValue;

    // outputValue = 

    outputValue = await console.log(outputValue)
}


