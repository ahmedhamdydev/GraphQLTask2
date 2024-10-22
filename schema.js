const { gql } = require("apollo-server");

const typeDefs = gql`
  type Product {
    id: ID!
    name: String!
    description: String
  }

  type Query {
    getProduct(id: ID!): Product
  }
`;

module.exports = typeDefs;
