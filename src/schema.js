const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    users: [User]
    posts: [Post]
  }

  type Mutation {
    createUser(email: String!, first_name: String!): User!
    createPost(dear: String, content: String): Post!
  }

  #
  type User {
    id: ID!
    email: String!
    first_name: String
    last_name: String
  }

  type Post {
    id: ID!
    dear: String
    content: String
  }
`;

module.exports = {
  typeDefs
};
