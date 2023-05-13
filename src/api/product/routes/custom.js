module.exports = {
    routes: [
      {
        method: "PUT",
        path: "/size/:id",
        handler: "product.updateSize",
        config: {
          policies: [],
        },
      },
    ],
  };
  