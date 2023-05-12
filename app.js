fetch('https://newsapi.org/v2/everything?q=fashion&from=2021-06-02&sortBy=publishedAt&apiKey=c3308f030508428f87c69cb808f4ac01').then((res)=>{
    return res.json();
}).then((data)=>{
    data.articles.forEach(element => {
        console.log(element.title);    
    });
    
})

// $.getJSON('https://newsapi.org/v2/everything?q=tesla&from=2021-06-02&sortBy=publishedAt&apiKey=c3308f030508428f87c69cb808f4ac01', function(data) {
//         for(var item in data.articles){
//             let obj = JSON.parse(item);
//             console.log(JSON.stringify(obj));
//             document.write(item.url +"<br/>");
//         }
     
//     });
