import * as Sequelize from 'sequelize';
import * as _ from 'lodash';

export class Database {

  private static connection: any;

  instance(): any {
    if (!Database.connection) {
      this.create();
    }
    return Database.connection;
  }

  constructor(config?: any) {
  }

  private create() {
    const env: string = process.env.DATABASE_CONFIG || ''
    const options = JSON.parse(env);
    this.connect(options);
  }

  private connect(options: any) {
    if (!this.validateConfig(options)) {
      throw new Error('No database options provided');
    }

    Database.connection = new Sequelize(options.database, options.username, options.password, {
      host: options.host,
      dialect: options.dialect,
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
    });
  }

  private validateConfig(config: any): boolean {
    return config.host && config.username && config.password && config.database && config.dialect;
  }

}
