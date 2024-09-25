import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from "./graphql";
import "./config/dotenv.config.ts";
import { startStandaloneServer } from "@apollo/server/standalone";

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
});

startStandaloneServer(server);
