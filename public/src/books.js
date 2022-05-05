const findAuthorById = (authors, id) => {
  const authorFound = authors.find((author) => author.id === id);
    return authorFound;
}

const findBookById = (books, id) => {
  const bookFound = books.find((book) => book.id == id);
    return bookFound;
}

function findReturnedBooks(books) {
  return books.filter((book) => book.borrows.every((borrow) => borrow.returned === true));
}
function partitionBooksByBorrowedStatus(books) {
  let returnedBooks = findReturnedBooks(books);
  let borrowedBooks = books.filter((book) => book.borrows.some((borrow) => borrow.returned === false));
  let totalBooks = [[...borrowedBooks], [...returnedBooks]];
  return totalBooks;  
}

function getBorrowersForBook(book, accounts) {
  return book.borrows.map((borrow) => {let account = accounts.find((account) => account.id === borrow.id);
   return {...borrow, ...account};
})
  .slice(0, 10);
}
module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
