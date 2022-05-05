function getTotalBooksCount(books) {
  let totalBooks = books.reduce((total) => {
    return total + 1;
  }, 0)
  return totalBooks;
}

function getTotalAccountsCount(accounts) {
    let totalAccounts = accounts.reduce((total) => {
      return total + 1;
    }, 0)
    return totalAccounts;
  }


function getBooksBorrowedCount(books) {
  let borrowed = books.filter((book) => book.borrows.filter((check) => check.returned === false).length > 0);
  return borrowed.length;
}

function getMostCommonGenres(books) {
  let common = {};
    books.forEach((book) => {
      if (common[book.genre]) {
        common[book.genre]++;
      } else {
        common[book.genre] = 1;
      }
    })
    let result = Object.entries(common).map(([name, count]) => {
      return {name, 
        count};
    })
    result.sort((resultA, resultB) => resultB.count - resultA.count);
    return result.slice(0, 5);
}

function getMostPopularBooks(books) {
  let result = books.map((book) => {
    return {name: book.title, count: book.borrows.length};
  })
  result.sort((resultA, resultB) => resultB.count - resultA.count);
  return result.slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  let popularAuthor = [];
    authors.forEach((author) => {
      let authorCount = { name : `${author.name.first} ${author.name.last}`,
      count: 0
  };
      books.forEach((book) => {
        if (author.id === book.authorId) {
          authorCount.count += book.borrows.length;
      }
    });
      popularAuthor.push(authorCount)
    });
        popularAuthor.sort((authorA, authorB) => authorB.count - authorA.count);
        return popularAuthor.slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
