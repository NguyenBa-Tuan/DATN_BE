module.exports = {
    routes: [
      {
        method: "GET",
        path: "/order/getByDate",
        handler: "order.getByDate",
        config: {
          policies: [],
        },
      },
      {
        method: "GET",
        path: "/order/getByCurrentDate",
        handler: "order.getByCurrentDate",
        config: {
          policies: [],
        },
      },
    ],
  };
  