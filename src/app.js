// Ingredients of the burger along with the price
var ingredients = {
  Patty: 80,
  Cheese: 10,
  Tomatoes: 20,
  Onions: 20,
  Lettuce: 20
};

// Current state of the ingredients in the burger
var state = {
  Patty: true,
  Cheese: true,
  Tomatoes: true,
  Onions: true,
  Lettuce: true
};

// Toggle the state of an ingredient
function toggleIngredient(ingredient) {
  state[ingredient] = !state[ingredient];
  renderAll();
}

// Render functions for each ingredient
function renderPatty() {
  let patty = document.querySelector("#patty");
  patty.style.display = state.Patty ? "inherit" : "none";
}

function renderCheese() {
  let cheese = document.querySelector("#cheese");
  cheese.style.display = state.Cheese ? "inherit" : "none";
}

function renderTomatoes() {
  let tomatoes = document.querySelector("#tomato");
  tomatoes.style.display = state.Tomatoes ? "inherit" : "none";
}

function renderOnions() {
  let onions = document.querySelector("#onion");
  onions.style.display = state.Onions ? "inherit" : "none";
}

function renderLettuce() {
  let lettuce = document.querySelector("#lettuce");
  lettuce.style.display = state.Lettuce ? "inherit" : "none";
}

// Render all ingredients
function renderAll() {
  renderPatty();
  renderCheese();
  renderTomatoes();
  renderOnions();
  renderLettuce();
  renderButtons();
  renderIngredientsBoard();
  renderPrice();
}

// Challenge 1: Make the ingredient buttons pop up based on their current active state
function renderButtons() {
  for (let ingredient in state) {
    let button = document.querySelector(".btn-" + ingredient.toLowerCase());
    if (state[ingredient]) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
}

// Challenge 2: Show the customer only the ingredients that they've selected on the chalkboard
function renderIngredientsBoard() {
  let chalkboard = document.querySelector("#ingredients-board");
  chalkboard.innerHTML = "Ingredients: ";
  for (let ingredient in state) {
    if (state[ingredient]) {
      chalkboard.innerHTML += ingredient + ", ";
    }
  }
}

// Challenge 3: Calculate and display the cost of the burger
function renderPrice() {
  let totalPrice = 0;
  for (let ingredient in state) {
    if (state[ingredient]) {
      totalPrice += ingredients[ingredient];
    }
  }
  document.querySelector(".price-details").innerText = "Total Price: INR " + totalPrice;
}

// Initial rendering
renderAll();