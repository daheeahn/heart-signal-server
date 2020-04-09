import {
  objectType,
  interfaceType,
  queryType,
  stringArg,
  enumType,
  intArg,
  arg,
  makeSchema,
} from "@nexus/schema";
import { ApolloServer } from "apollo-server";
import { prisma } from "../generated/prisma-client";
import schema from "./schema";

const server = new ApolloServer({
  schema,
  context: () => {
    return { prisma };
  },
});

server.listen().then(() => console.log("🚀 Apollo Server On!"));
