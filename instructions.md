1 - create repo on github
2 - on Terminal: npm init (this creates packages.json)
3 - on Terminal: npm install --save pg pg-hstore sequelize (downloads sequelize ORM)
4 - on Terminal: npm install -g sequelize-cli
5 - on Terminal: make sure that you install globally any deprecated files, for ex.:
  - npm install-g minimatch
  - npm install -g graceful-fs
  - npm install -g lodash
 6 - on Terminal: touch .sequelizerc
 7 - in .sequelizerc, add:
    var path = require('path');

    module.exports = {
      'config': path.resolve('./', 'config/config.js'),
      'migrations-path': path.resolve('./', 'server/migrations'),
      'seeders-path': path.resolve('./', 'server/seeders'),
      'models-path': path.resolve('./', 'server/models')
    };
6 - on Terminal: sequelize init
8 - in models/index.js: make sure that this file reads "config/config.js" instead of "config/config.json", the default file.
9 - in config/config.js, replace all configuration with:
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
10 - in models/index.js, replace the following lines:

  `- var config = require(__dirname + '/../../config/config.js')[env];
  + var config = require(__dirname + '/../../config/config')[env];`

  `- var sequelize = new Sequelize(config.database, config.username, config.password, config);
  + var sequelize = new Sequelize(config.url, config);`

11 -
