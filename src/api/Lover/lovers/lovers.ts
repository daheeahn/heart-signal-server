import { Ctx } from "../../../interface";

export default {
  Query: {
    lovers: async (_, __, { prisma }: Ctx) => {
      // isAuthenticated(request);
      const lovers = await prisma.lovers();

      //   const sorted = lovers.sort(byGender);
      //   const females = sorted.filter((lover) => lover.gender === FEMALE);
      //    const males = sorted.filter((lover) => lover.gender === MALE);
      //   return { females, males };
      return lovers;
    },
  },
};
