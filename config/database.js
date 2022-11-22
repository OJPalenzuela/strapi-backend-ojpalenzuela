module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "containers-us-west-57.railway.app"),
      port: env.int("DATABASE_PORT", 5870),
      database: env("DATABASE_NAME", "railway"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "0rK9Ku2tG30O4Hhj5SEx"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
