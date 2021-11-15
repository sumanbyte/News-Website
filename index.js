let apiKey = `178a5cf6321c40ada6e9670b7c28fab4`;
let source = `bbc-news`;
let newsdiv = document.getElementById('newsdiv');

let news = "";

let xhr = new XMLHttpRequest();

xhr.open('GET', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

xhr.onload = function(){
    if(this.status == 200){
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(json)
        for(key in articles){
            news += `<div class="py-8 flex flex-wrap md:flex-nowrap">
            <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <span class="mt-1 text-gray-500 text-sm">Date</span>
                <span class="mt-1 text-gray-500 text-sm">${(articles[key].publishedAt).substring(0,10)}</span>
            </div>
            <div class="md:flex-grow">
                <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">${articles[key].title}</h2>
                <p class="leading-relaxed font-bold">${articles[key].description}</p>
                <details>
                <summary>Read More</summary>
                ${(articles[key].content).substring(0, (articles[key].content).length-13)}...
                <a class = "text-blue-700" href="${articles[key].url}" target = "_blank">Read More</a>
              </details>
            </div>
        </div>`
        }
        newsdiv.innerHTML = news;
    }else{
        console.log('Some error occured.')
    }
}

xhr.send();