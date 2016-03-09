// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: './dev.sqlite3'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'cw_db',
      user:     'cw_admin',
      password: 'cw_password'
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
