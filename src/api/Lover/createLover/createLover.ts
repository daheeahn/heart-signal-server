import { Ctx } from "../../../interface";

export default {
  Mutation: {
    createLover: (_, { name, gender, season, firstEpNum }, { prisma }: Ctx) => {
      return prisma.createLover({
        name,
        gender,
        season,
        firstEpNum,
      });
    },
  },
};
