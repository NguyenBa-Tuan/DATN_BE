module.exports = {
  routes: [
    {
      method: "GET",
      path: "/cards/user/:userId",
      handler: "card.findByUser",
      config: {
        policies: [],
      },
    },
    {
      method: "PATCH",
      path: "/cards/user/:userId",
      handler: "card.updateByUser",
      config: {
        policies: [],
      },
    },
    {
      method: "PUT",
      path: "/cards/deleteByUser/:userId",
      handler: "card.deleteByUser",
      config: {
        policies: [],
      },
    },
  ],
};
