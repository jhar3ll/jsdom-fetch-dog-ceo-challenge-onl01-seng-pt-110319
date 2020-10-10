//const { response } = require("express")

document.addEventListener('DOMContentLoaded', function(){
    let allBreeds = []
    fetchImages()
    fetchBreeds()
})
    /* on page load
- fetch the images using the url above ⬆️    √
- parse the response as `JSON`              √
- add image elements to the DOM **for each**🤔 image in the array √         */     
function fetchImages() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
      .then(function(response) {
          return response.json()
        })
      .then(function(json) {
        json.message.forEach(image => addImage(image))
      })
    }

  function addImage(imageUrl) {
    let container = document.getElementById('dog-image-container');
    let newImage = document.createElement('img');
    newImage.src = imageUrl;
    container.append(newImage);
  }

 /* After the first challenge is completed, add JavaScript so that:
- on page load, fetch all the dog breeds using the url above ⬆️
- add the breeds to the page in an `<ul>` (take a look at the included `index.html`)
*/

function fetchBreeds() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    fetch(breedUrl)
        .then(function(response) {
          return response.json()
        })
        .then(function(json) {
          breeds = Object.keys(json.message)
          breeds.forEach(breed => addBreed(breed))
          filterBreeds()
        })
      }
    
      function addBreed(breeds) {
        let container = document.getElementById('dog-breeds')
        let newBreed = document.createElement('li')
        newBreed.textContent = breeds
        container.append(newBreed)
        newBreed.addEventListener('click', changeColor)
      }
      
      /* 
      Once all of the breeds are rendered in the `<ul>`, add JavaScript so that the
        font color of a particular `<li>` changes _on click_. This can be a color of
        your choosing.

        When the user clicks any of the dog breed list items, the color the text should
       change.
        */

      function changeColor(event) {
        event.target.style.color = 'green';
      }

      /* 
        Once we are able to load _all_ of the dog breeds onto the page, add JavaScript
        so that the user can filter breeds that start with a particular letter using a
        dropdown.
        */

      function filterBreeds() {
          let dropdown = document.querySelector('#breed-dropdown')
          let filteredDogs = document.getElementById('dog-breeds')

          startsWithA = breeds.filter((breed) => breed.startsWith('a'))
          startsWithB = breeds.filter((breed) => breed.startsWith('b'))
          startsWithC = breeds.filter((breed) => breed.startsWith('c'))
          startsWithD = breeds.filter((breed) => breed.startsWith('d'))
             
            dropdown.addEventListener('change', event => {
            if (event.target.value === 'a'){
                filteredDogs.innerHTML = ""
                startsWithA.forEach(breed => addBreed(breed))
            } else if (event.target.value === 'b'){
                filteredDogs.innerHTML = ""
                startsWithB.forEach(breed => addBreed(breed))
            } else if (event.target.value === 'c'){
                filteredDogs.innerHTML = ""
                startsWithC.forEach(breed => addBreed(breed))
            } else if (event.target.value === 'd'){
                filteredDogs.innerHTML = ""
                startsWithD.forEach(breed => addBreed(breed))
            }
      })
    }

    

   