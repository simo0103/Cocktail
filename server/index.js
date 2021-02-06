import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";
const schema = fs.readFileSync("schema.graphql", "utf8");

const typeDefs = gql(schema);

const cocktails = [
  {
    name: "Vesper",
    glass: "martini",
    category: "Before Dinner Cocktail",
    ingredients: [
      { unit: "cl", amount: 6, ingredient: "Gin" },
      { unit: "cl", amount: 1.5, ingredient: "Vodka" },
      { unit: "cl", amount: 0.75, ingredient: "Lillet Blonde" },
    ],
    garnish: "Lemon twist",
    preparation: "Shake and strain into a chilled cocktail glass.",
  },
];

const resolvers = {
  Query: {
    cocktails: () => cocktails,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
