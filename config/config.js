module.exports = {
  development: {
    username: "nfdc",
    password: "Odoc@1$ilm",
    database: "events",
    host: "119.82.68.149",
    dialect: "mysql",
    logging: false,
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: "root",
    password: null,
    database: "database_production",
    host: "127.0.0.1",
    dialect: "mysql",
  },
};
