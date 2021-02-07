import { ApolloServer, gql } from "apollo-server";
import * as fs from "fs";
import { cocktails } from "./cocktails.js";
const schema = fs.readFileSync("schema.graphql", "utf8");

const typeDefs = gql(schema);

const resolvers = {
  Query: {
    // cocktail: (args) => cocktails,
    cocktail(args) {
      return cocktails;
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
