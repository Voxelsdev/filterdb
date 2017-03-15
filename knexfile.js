module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/filterdb_dev'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
