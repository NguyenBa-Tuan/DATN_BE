'use strict';

/**
 * product controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::product.product',({ strapi }) => ({
    async updateSize(ctx) {
        const { id } = ctx.params;
        const stock = ctx.request.body.data.stock;
        console.log("🚀 ~ file: product.js:16 ~ updateSize ~ `UPDATE components_size_sizes SET stock=${stock} WHERE id=${id}`:", `UPDATE components_size_sizes SET stock=${stock} WHERE id=${id}`)
        await strapi.db.connection.raw(
          `UPDATE components_size_sizes SET stock=${stock} WHERE id=${id}`
        );
    
        return true;
    },
}));
