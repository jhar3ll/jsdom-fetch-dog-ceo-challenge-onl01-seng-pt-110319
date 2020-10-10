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
        })
      }
    
      function addBreed(breeds) {
        let container = document.getElementById('dog-breeds')
        let newBreed = document.createElement('li')
        newBreed.textContent = breeds
        container.append(newBreed)
        newBreed.addEventListener('click', changeColor)
      }
      
      function changeColor(event) {
        event.target.style.color = 'green';
      }

      function filterBreeds() {
          let dropdown = document.querySelector('#breed-dropdown')
                
            dropdown.addEventListener('change', event => {
            if (event.value === "a"){
                console.log("A")
            } else if (event.value === "b"){
                console.log("B")
            }
      })
    }
