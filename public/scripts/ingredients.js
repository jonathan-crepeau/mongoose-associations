console.log('ingredients.js reporting for duty..');

const btn = document.getElementById('add-ingredient');
const nameField = document.getElementById('ingredient-name');
const originField = document.getElementById('ingredient-origin');
const ingredientList = document.getElementById('ingredient-list');

const handleClick = (event) => {
    console.log('Add ingredient button clicked..');

    const newIngredient = {
        title: nameField.value,
        origin: originField.value,
    }

    fetch('http://localhost:3011/api/v1/ingredient', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newIngredient)
    })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .catch((error) => console.log(error));

    nameField.value = '';
    originField.value = '';
    getAllIngredients();
};

btn.addEventListener('click', handleClick);


const getAllIngredients = () => {
    fetch('http://localhost:3011/api/v1/ingredient', {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => render(data))
        .catch((error) => console.log(error));
}

const render = (ingredientArr) => {
    const template = ingredientArr.map((ingredient) => {
        return `
            <li id=${ingredient._id}>${ingredient.title} (${ingredient.origin})</li>
        `
    }).join('');

    ingredientList.innerHTML = '';
    ingredientList.insertAdjacentHTML('afterbegin', template);
}

getAllIngredients();