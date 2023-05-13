"use strict";

/**
 * card controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::card.card", ({ strapi }) => ({
  async findByUser(ctx) {
    const { userId } = ctx.params;
    let data = await strapi.db.connection.raw(
      `SELECT *, SUM(stock) AS 'count'
            FROM cards
            WHERE user_id = ${userId}
            GROUP BY product_id, size`
    );

    return data;
  },

  async updateByUser(ctx) {
    const { userId } = ctx.params;

    await strapi.db.connection.raw(
      `
            DELETE FROM cards WHERE user_id = '${userId}' AND product_id = '${ctx.request.body.data.product_id}' AND size = '${ctx.request.body.data.size}';
            `
    );

    await strapi.db.connection.raw(
      `INSERT INTO  cards (product_id, size, stock, user_id) values(${ctx.request.body.data.product_id},
                '${ctx.request.body.data.size}',
                ${ctx.request.body.data.count},${userId}) 
            `
    );

    let data = await strapi.db.connection.raw(
      `SELECT *, SUM(stock) AS 'count'
              FROM cards
              WHERE user_id = ${userId}
              GROUP BY product_id, size`
    );

    return data; 
  },

  async deleteByUser(ctx) {
    const { userId } = ctx.params;
    if(ctx.request.body.data.product_id && ctx.request.body.data.size){
        await strapi.db.connection.raw(
            `DELETE FROM cards WHERE user_id = '${userId}' AND product_id = '${ctx.request.body.data.product_id}' AND size = '${ctx.request.body.data.size}';`
          );
    }else{
        await strapi.db.connection.raw(
          `DELETE FROM cards WHERE user_id = '${userId}';`
        );
    }
    let data = await strapi.db.connection.raw(
        `SELECT *, SUM(stock) AS 'count'
                FROM cards
                WHERE user_id = ${userId}
                GROUP BY product_id, size`
      );

    return data[0];
  },
}));
