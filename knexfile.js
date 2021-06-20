const pgConnection =
  process.env.DATABASE_URL || "postgresql://postgres@localhost/api/events";

module.exports = {
  development: {
    client: "sqlite3",
    useNullAsDefault: true,
    connection: {
      filename: "./api/data/potluck.db3",
    },
    migrations: {
      directory: "./api/data/migrations",
    },
    seeds: {
      directory: "./api/data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: pgConnection,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./api/data/migrations",
    },
    seeds: {
      directory: "./api/data/seeds",
    },
  },
};
