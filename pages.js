let apiKey = `178a5cf6321c40ada6e9670b7c28fab4`;
let category = document.getElementById('cat');
let categoryVal = category.value;

let pagehead = document.getElementById('pagehead');
pagehead.innerText = `${categoryVal} Highlights`;

let newsdiv = document.getElementById('newsdiv');
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&category=${categoryVal}&apiKey=${apiKey}`, true);

let news = "";

xhr.onload= function(){
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    for(key in articles){
        news += `
        <div class="p-4 md:w-1/3">
              <div class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <img class="lg:h-48 md:h-36 w-full object-cover object-center" src="${articles[key].urlToImage}" alt="blog">
                <div class="p-6">
                  <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">Date: ${(articles[key].publishedAt).substring(0,10)}</h2>
                  <h1 class="title-font text-lg font-medium text-gray-900 mb-3">${articles[key].title}</h1>
                  <p class="leading-relaxed mb-3">${articles[key].description}</p>
                  <div class="flex items-center flex-wrap ">
                    <a class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0" href = "${articles[key].url}">Read More
                      <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>`
    }
    newsdiv.innerHTML = news;
}
xhr.send();