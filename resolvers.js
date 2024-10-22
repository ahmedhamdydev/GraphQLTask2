const resolvers = {
  Query: {
    getProduct: async (_, { id }, { dataSources }) => {
      try {
        const product = await dataSources.productAPI.getProductById(id);
        if (!product) {
          throw new Error(`Product with ID ${id} not found.`);
        }
        return product;
      } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch product. Please try again later.');
      }
    },
  },
};

module.exports = resolvers;
