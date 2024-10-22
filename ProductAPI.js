const { RESTDataSource } = require('apollo-datasource-rest');

class ProductAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.v1.products.example.com/'; 
  }

  async getProductById(id) {
    return this.get(`products/${id}`);
  }
}

module.exports = ProductAPI;
