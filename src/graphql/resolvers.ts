export default {
  Query: {
    dahee: (_: any, __: any, { some }) => {
      console.log(some);
      return "I am dahee";
    },
  },
};
