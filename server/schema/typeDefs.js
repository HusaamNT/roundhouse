const gql = require("graphql-tag")

const typeDefs = gql`
    type Product {
        _id: ID!
        product_name: String!
        price: Number!
        stock: Number!
        category_id: [Category]
    }
    type Category
    `