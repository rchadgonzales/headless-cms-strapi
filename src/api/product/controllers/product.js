"use strict";

/**
 * product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::product.product");

/*
module.exports = {
  async find(ctx) {
    console.log("products running");
    const products = await strapi.services.product.find(ctx.query);

    return products.map((product) => product.title);
  },
};
*/
/*
module.exports = {
  find(params, populate) {
    console.log("Service called...");
    return strapi.query("product").find(params, populate);
  },
};
*/
