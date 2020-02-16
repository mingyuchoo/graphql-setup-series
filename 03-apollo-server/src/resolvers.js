const { find, filter } = require("lodash");

const books = require("../data/books");

const resolvers = {
  Query: {
    book: (parent, args, context, info) =>
      filter(books, { author: args.author }),
    books: () => books
  }
};

module.exports = resolvers;
