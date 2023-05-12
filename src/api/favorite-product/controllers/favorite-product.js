"use strict";

/**
 * favorite-product controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::favorite-product.favorite-product",
  ({ strapi }) => ({
    async updateByUserAndProduct(ctx) {
        const userId = ctx.request.body.userId
        const productId = ctx.request.body.productId
      let data = await strapi.db.connection.raw(
        `SELECT * FROM favorite_products WHERE user_id=${userId} AND product_id=${productId}`
      );
      if(data[0][0] !== undefined) {
        await strapi.db.connection.raw(`DELETE FROM favorite_products WHERE user_id = '${userId}' AND product_id = '${productId}'`)
      }else{
        await strapi.db.connection.raw(`INSERT INTO  favorite_products(user_id, product_id) values(${userId},'${productId}')`)
      }

      return true;
    },
  })
);
