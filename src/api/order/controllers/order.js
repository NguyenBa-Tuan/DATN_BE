'use strict';

/**
 * order controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::order.order',({ strapi }) => ({
    async getByDate(ctx) {
        let data = await strapi.db.connection.raw(
          `SELECT SUM(total_price) as 'totalPrice', DATE_FORMAT(orders.created_at,'%m/%Y') as 'date' FROM orders GROUP BY YEAR(orders.created_at) DESC, MONTH(orders.created_at);`
        );
    
        return data;
      },
      async getByCurrentDate(ctx) {
        let data = await strapi.db.connection.raw(
          `select SUM(total_price) as 'totalPrice' , COUNT(*) as 'numberBuyer' from orders where MONTH(orders.created_at) = MONTH(now()) and YEAR(orders.created_at) = YEAR(now())`
        );
    
        return data;
      },
}));
