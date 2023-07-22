document.addEventListener('DOMContentLoaded', () => 
{
    const jokeContainer = document.getElementById('joke');
    const getJokeBtn = document.getElementById('get-joke');
  
    // Handle form submission to post wishes
    
    // Fetch a random joke from the API
    function fetchJoke() {
        fetch('https://v2.jokeapi.dev/joke/Dark') // Fetching a random joke of any type
          .then((response) => response.json())
          .then((data) => {
            if (data.type === 'twopart') {
              jokeContainer.innerHTML = `
                <p>${data.setup}</p>
                <p>${data.delivery}</p>
              `;
            } else {
              jokeContainer.innerText = data.joke;
            }
          })
          .catch((error) => {
            console.error('Error fetching joke:', error);
          });
      }
    
      // ... Same as before ...
    
      // Initial fetch for the first joke
      fetchJoke();
  
    // Handle button click to get a new joke
    getJokeBtn.addEventListener('click', fetchJoke);
  });


  
  const DOG_API_ENDPOINT = 'https://dog.ceo/api/breeds/image/random';

document.addEventListener('DOMContentLoaded', () => {
  const dogImage = document.getElementById('dog-image');
  const getDogBtn = document.getElementById('get-dog-btn');

  getDogBtn.addEventListener('click', fetchDogImage);

  // Fetch a random dog image from the Dog API
  function fetchDogImage() {
    fetch(DOG_API_ENDPOINT)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === 'success') {
          const imageUrl = data.message;
          displayDogImage(imageUrl);
        } else {
          console.error('Failed to fetch dog image:', data);
        }
      })
      .catch((error) => {
        console.error('Error fetching dog image:', error);
      });
  }

  // Display the dog image on the page
  function displayDogImage(imageUrl) {
    dogImage.src = imageUrl;
  }

  // Initial fetch for the first dog image
  fetchDogImage();
});
$(document).ready(function(){
    var carousel = $('.carousel');
    carousel.carousel();

    $('.carousel-prev').click(function() {
        carousel.carousel('prev');
    });

    $('.carousel-next').click(function() {
        carousel.carousel('next');
    });

    carousel.on('click', '.carousel-control-next, .carousel-control-prev', function() {
        setTimeout(function() {
            var activeIndex = carousel.find('.carousel-item.active').index();
            carousel.find('.carousel-item').css({
                opacity: 0.7,
                filter: 'blur(3px)'
            });
            carousel.find('.carousel-item').eq(activeIndex).css({
                opacity: 1,
                filter: 'blur(0)'
            });
        }, 100);
    });
});
