'use strict';

// Implement instances of the 'Product' type
function createElectronicDevice() {
  // TODO: Prompt user for electronic device details (brand and model)
  const brand = prompt('Enter electronic device brand: ');
  const model = prompt('Enter electronic device model: ');
  // TODO: return object containing brand and model
  return {type: 'electronic', brand: brand, model: model};
}

function createBook() {
  // TODO: Prompt user for book details (title and author)
  const title = prompt('Enter book title: ');
  const author = prompt('Enter book author: ');
  // TODO: return object containing title and author
  return {type: 'book', title: title, author: author};
}

// Create instances of 'Product'
const electronicProduct = createElectronicDevice();
const bookProduct = createBook();

// Display the details of each product
function displayProductDetails(product) {
  console.log('Product Type: '.concat(product.type));
  if (product.type === 'electronic') {
    console.log('Brand: '.concat(product.brand));
    console.log('Model: '.concat(product.model));
  } else {
    console.log('Title: '.concat(product.title));
    console.log('Author: '.concat(product.author));
  }
}

console.log('Electronic Device Details:');
displayProductDetails(electronicProduct);
console.log();
console.log('Book Details:');
displayProductDetails(bookProduct);

export {createElectronicDevice, createBook, displayProductDetails};
