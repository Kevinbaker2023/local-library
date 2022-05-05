function findAccountById(accounts, id) {
  const accountFound = accounts.find((account) => account.id === id);
    return accountFound;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
    return accounts;
}

function getTotalNumberOfBorrows(account, books) {
  let totalBorrowed = 0;
    for (let borrow= 0; borrow < books.length; borrow++) {
      for (let borrowsId = 0; borrowsId < books[borrow].borrows.length; borrowsId++) {
        if (account.id === books[borrow].borrows[borrowsId].id) {
          totalBorrowed += 1;
      }
    }
  }
  return totalBorrowed;
}

function getBooksPossessedByAccount(account, books, authors) {
  let result = [];
  let borrowedTotal = [];
    books.forEach((piece) => {
      const borrowed = piece.borrows;
    const book = {
      id: piece.id,
      title: piece.title,
      genre: piece.genre,
      authorId: piece.authorId,
      author: {},
      borrows: {},
    };
    const {id, title, genre, authodId, author, borrows} = book;

      borrowed.forEach((borrow) => {
        if (borrow.id === account.id && borrow.returned === false) {
          result.push(book);
          borrowedTotal.push(borrow);
          book.borrows = borrowedTotal;
          book.author = authors.filter((author) => author.id === book.authorId)[0];
        }      
      });
  });
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
