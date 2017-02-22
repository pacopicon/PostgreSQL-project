1 - create repo on github
2 - on Terminal: npm init (this creates packages.json)
3 - on Terminal: npm install --save pg pg-hstore sequelize (downloads sequelize ORM)
4 - on Terminal: touch .sequelizerc
5 - in .sequelizerc:
    var path = require('path');

    module.exports = {
      'config': path.resolve('./', 'config/config.js'),
      'migrations-path': path.resolve('./', 'server/migrations'),
      'seeders-path': path.resolve('./', 'server/seeders'),
      'models-path': path.resolve('./', 'server/models')
    };
6 - 
