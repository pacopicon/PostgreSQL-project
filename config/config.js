module.exports = {
    development: {
    url: 'postgres://postgres:password@localhost:5432/bookmark',
    dialect: 'postgres'
  },
    production: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    staging: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres'
  },
    test: {
    url: process.env.DATABASE_URL || 'postgres://postgres:password@localhost:5432/bookmark_test',
    dialect: 'postgres'
  }
};

// {
//   "development": {
//     "username": "root",
//     "password": null,
//     "database": "database_development",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "test": {
//     "username": "root",
//     "password": null,
//     "database": "database_test",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   },
//   "production": {
//     "username": "root",
//     "password": null,
//     "database": "database_production",
//     "host": "127.0.0.1",
//     "dialect": "mysql"
//   }
// }
