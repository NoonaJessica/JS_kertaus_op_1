export {}; // hack to ignore Book from task 4
// TODO: Define a type alias named 'Book' with appropriate properties

type Book = {
  title: string;
  author: string;
  publicationYear: number;
};

// TODO: Implement the promptForBook function
function promptForBook(): Book {
  // TODO: Prompt user for book details (title, author, publication year)
  const bookTitle = prompt('Enter book title: ');
  const bookAuthor = prompt('Enter book name: ');
  const bookPublicationYear = parseInt(prompt('Enter publication year:'));

  // TODO: Create an object of type 'Book' with the entered values
  const book: Book = {
    title: bookTitle,
    author: bookAuthor,
    publicationYear: bookPublicationYear
  };
  return book;
}

// TODO: Call the promptForBook function to get the book details
const bookDetails = promptForBook();

// TODO: Display the details of the book object to the user
console.log("Book Details:");
console.log(`Title: ${bookDetails.title}`);
console.log(`Author: ${bookDetails.author}`);
console.log(`Publication Year: ${bookDetails.publicationYear}`);
