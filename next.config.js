const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "kamlesh_1997",
        mongodb_password: "kamlesh_1997",
        mongodb_cluster: "shah-collections",
        mongodb_database: "my-site-dev",
      },
    };
  }

  return {
    env: {
      mongodb_username: "kamlesh_1997",
      mongodb_password: "kamlesh_1997",
      mongodb_cluster: "shah-collections",
      mongodb_database: "my-site",
    },
  };
};
