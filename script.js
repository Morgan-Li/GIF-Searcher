const img = document.querySelector('img')
const submit = document.getElementById('submitBtn');
submit.addEventListener("click", () => {
  const userInput = form.search.value;
  console.log(userInput);
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=${userInput}`, {mode: 'cors'})
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  })
  .catch(e => {
    console.log(e)
  })
})

fetch('https://api.giphy.com/v1/gifs/translate?api_key=bb2006d9d3454578be1a99cfad65913d&s=cat', {mode: 'cors'})
  .then(function(response) {
    return response.json()
  })
  .then(function(response) {
    img.src = response.data.images.original.url
  })
  .catch(e => {
    console.log(e)
  })