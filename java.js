document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'effcb47f6d044603a942fa566963353b'; 
    const apiUrl = `https://api.spoonacular.com/recipes/complexSearch?query=pizza&apiKey=${apiKey}`;
  
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const recipesContainer = document.getElementById('pizza-recipes');
        data.results.forEach(recipe => {
          const recipeCard = document.createElement('div');
          recipeCard.classList.add('recipe-card');
  
          const recipeImage = document.createElement('img');
          recipeImage.src = recipe.image;
          recipeImage.alt = recipe.title;
  
          const recipeTitle = document.createElement('h2');
          recipeTitle.textContent = recipe.title;
  
          recipeCard.appendChild(recipeImage);
          recipeCard.appendChild(recipeTitle);
          recipesContainer.appendChild(recipeCard);
        });
      })
      .catch(error => console.error('Error fetching the API:', error));
  });
  