console.log('recipes.js reporting for duty..');

const btn = document.getElementById('add-recipe');
const nameField = document.getElementById('recipe-name');
const recipeList = document.getElementById('recipe-list');


// SECTION - Event Handler (Add Recipe Button)
const handleClick = (e) => {
    console.log('Add Recipe button clicked.');

    const newRecipe = {
        name: nameField.value,
        ingredients: []
    }

    fetch('http://localhost:3011/api/v1/recipe', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newRecipe),
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

    nameField.value = '';
    getAllRecipes();
}

btn.addEventListener('click', handleClick);


// SECTION - List All Recipes
const getAllRecipes = () => {
    fetch('http://localhost:3011/api/v1/recipe', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => render(data))
        .catch((error) => console.log(error));
}

const render = (recipeArr) => {
    const listItems = recipeArr.map((recipe) => {
        return `
            <li id=${recipe._id}>${recipe.name}</li>
        `
    }).join('');
    recipeList.innerHTML = '';
    recipeList.insertAdjacentHTML('afterbegin', listItems);
};

getAllRecipes();
