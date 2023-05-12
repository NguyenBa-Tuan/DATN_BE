module.exports = {
    routes: [
      {
        method: "PUT",
        path: "/favorite-products/put",
        handler: "favorite-product.updateByUserAndProduct",
        config: {
          policies: [],
        },
      },
    ],
  };
  