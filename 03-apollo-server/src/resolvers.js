import { find, filter } from "lodash";

import books from "./models";

const resolvers = {
  Query: {
    book: (parent, args, context, info) =>
      filter(books, { author: args.author }),
    books: () => books
  }
};

export default resolvers;
