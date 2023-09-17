'use strict';

// Create an empty array named 'cart' to store the items
const cart = [];

// Use 'while' loop to keep prompting until an empty item name is entered
while (true) {
  // Prompt user for item name, price, and quantity
  const itemName = prompt('Enter item or press Enter to finish: ');

  // Break the loop if an empty item name is entered
  if (itemName === '') {
    break;
  }

  const itemPrice = parseFloat(prompt('Enter item price: '));
  const itemQuantity = parseFloat(prompt('Enter item quantity: '));

  // Create an item object and add it to the 'cart' array
  const newItem = {name: itemName, price: itemPrice, quantity: itemQuantity};
  cart.push(newItem);
}

// Calculate the total cost using the 'map' and 'reduce' functions
const totalCost = cart
  .map(item => item.price * item.quantity)
  .reduce((sum, cost) => sum + cost, 0);

// Display the total cost to the user
alert(`Total cost of the shopping cart: $${totalCost.toFixed(2)}`);
