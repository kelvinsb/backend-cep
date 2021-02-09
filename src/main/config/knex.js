require('dotenv').config()

module.exports = {
  development: {
    client: 'mysql2',
    connection: {
      host: '127.0.0.1',
      user: 'root',
      password: process.env.DATABASE_ROOT_PASSWORD,
      database: process.env.DATABASE_DB_NAME,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },

  staging: {
    client: 'mysql2',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },

  production: {
    client: 'mysql2',
    connection: {
      host: 'database',
      user: 'root',
      password: process.env.DATABASE_ROOT_PASSWORD,
      database: process.env.DATABASE_DB_NAME,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/data/migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },
}
