const { AuthenticationError } = require("apollo-server");
const { authors, books } = require("./faker");
const { User, Post } = require("./data/store");

const Mutation = {
  // addBook: (_, { title, cover_image_url, average_rating, authorId }) => {
  //   book_id++;

  //   const newBook = {
  //     id: book_id,
  //     title,
  //     cover_image_url,
  //     average_rating,
  //     author_id
  //   };

  //   books.push(newBook);
  //   return newBook;
  // },

  createUser: async (_, { email, first_name }) => {
    return User.create({
      email: email,
      first_name: first_name
    }).then(user => {
      return user;
    });
  },

  createPost: async (_, { dear, content }, { user }) => {
    try {
      const email = await user;
      const newPost = await Post.create({
        dear: dear,
        content: content
      });
      return newPost;
    } catch (e) {
      throw new AuthenticationError("pls log in");
    }
  }
};

module.exports = { Mutation };
