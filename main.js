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
              allResults += `<p>${a.title}</p> <a href="${a.href}">Recipe</a> <img src='${a.thumbnail}'>
      <p>${a.ingredients} </p>`
              results.innerHTML = allResults
            })
          }
        )
      });
