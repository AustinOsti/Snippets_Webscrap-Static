const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://news.ycombinator.com';

//make HTTP request to url using axios to get website content
axios.get(url)
.then(function(response){
	getData(response.data);
})
.catch(function(error){
	console.log(error);
});

//parse the HTML with Cheerio.js
let getData = function(html){
	data = [];
	const $ = cheerio.load(html);
	$('table.itemlist tr td:nth-child(3)')
	.each(function(i, elem){
		data.push({
			title: $(elem).text(),
			link: $(elem).find('a.storylink').attr('href')
		});
	});
	console.log(data);
}



