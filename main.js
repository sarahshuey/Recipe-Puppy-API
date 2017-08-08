let button = document.querySelector('#but')
      but.addEventListener('click', function () {
        let input = document.querySelector('#input');
        console.log('value = ', input.value);
        let work = input.value
let results = document.querySelector('.results')
fetch(`http://recipepuppyproxy.herokuapp.com/api/?q=${work}`)
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
              allResults += `<div class ='eachResult'><p class = 'title'>${a.title}</p> <div class ='pic'><a href="${a.href}"><img  src='${a.thumbnail|| "http://via.placeholder.com/100x80"}'></a></div>
      <p class = 'ingredients'>${a.ingredients} </p></div>`
              results.innerHTML = allResults
            })
          }
        )
      })
      });
