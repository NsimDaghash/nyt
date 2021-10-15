let url = `https://api.nytimes.com/svc/topstories/v2/world.json?api-key=HFeTx0WVb2Do3GUXCmxa0ETWWyiDs8mS`;

let headlines = document.querySelector(".headlines")
async function getdata(){
    const data = await(await( fetch(url))).json()
    data.results.map(article => {
        console.log(article.title);

         let a = document.createElement('a');
         a.setAttribute('href', article.url);
        // // console.log(article.url);
         a.innerHTML = article.title;
         let p =document.createElement("p");
        p.innerHTML = article.abstract;

         let img = document.createElement("img");
         img.setAttribute('src',article.multimedia[0].url);
        
        headlines.appendChild(a);
        headlines.appendChild(img);
        headlines.appendChild(p);
     
    })
}

getdata();

