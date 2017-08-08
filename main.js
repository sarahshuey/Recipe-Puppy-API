let results = document.querySelector('.results')
fetch('http://recipepuppyproxy.herokuapp.com/api/?q=omelet')
  .then(
    function(response) {
      if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      response.json().then(function(data) {
        console.log('data', data);
        let allResults =''
        console.log('all results', allResults);
          data.results.forEach(function(a) {
              allResults += `<div class ='eachResult'><p class = 'title'>${a.title}</p> <div class ='pic'><img src='${a.thumbnail}'></div> <a href="${a.href}">Recipe</a>
      <p class = 'ingredients'>${a.ingredients} </p></div>`
      // if a.thumbnail===''(a.thumbnail = <img src="http://via.placeholder.com/350x150">)
              results.innerHTML = allResults
            })
            // if a.thumbnail===''(a.thumbnail = <img src="http://via.placeholder.com/350x150">)
          }
        )
      });
