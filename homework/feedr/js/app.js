// API's:
// New York Times
// https://developer.nytimes.com/

// Guardian:
// http://open-platform.theguardian.com/explore/

// NewsApi.org
// https://newsapi.org/

// Handlebars templating:
var source = $('#article-template').html();
var template = Handlebars.compile(source);

// 1. Setup AJAX requests to fetch data from each news source
$.ajax({
	type: 'GET',
	url: 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=5d5dc42a397846f086c0876d3fa71d25',
	success: formatNytResponse
})


$.ajax({
	type:'GET',
	url: ' https://content.guardianapis.com/search?api-key=d77930c8-9370-48ed-8674-08927c7b50d9',
	success: formatGuardianResponse
})










// 2. Set up functions to handle each of the above AJAX requests:
// - Use Array's .map method to transform the response into an array of objects that you will pass to the Handlebars template
// - Check out the id=article-template in index.html to see what properties the template expects
// - To properly format article dates, use new Date() and the .toLocaleDateString() method
// Note: not all articles will have all the expected properties :D

function formatNytResponse(response){
	var articles = response.results.map(function(article){
		// date and image logic goes here 
		var image 

		if (article.multimedia[0]) {
			image = article.multimedia[0].url
		} else {
			 image = 'http://pbs.twimg.com/profile_images/942784892882112513/qV4xB0I3_reasonably_small.jpg'
		}

			var date = new Date(article.created_date)

		return {
			title: article.title,
			date: date.toLocaleDateString(),
			image:image,
			type: article.section,
			link: article.url,
		}
		
	})

	var articleTemplates = template(articles)
	$('#main').append(articleTemplates)


}function formatGuardianResponse(response){
		console.log(response)
	var articles = response.response.results.map(function(article){

		var image = 'https://cdn6.aptoide.com/imgs/2/e/5/2e527050ecf27a44c605cb56eacb380e_icon.png?w=240'

		
		var date = new Date(article.webPublicationDate)

		return {
			title: article.webTitle,
			date: date.toLocaleDateString(),
			type: article.sectionName,
			link: article.webUrl,
			image: image,
		}

	})
	var articleTemplates = template(articles)
	$('#main').append(articleTemplates)
}

