import { SequelizeModel } from '../Classes/Model';

export class User extends SequelizeModel {
  constructor() {
    super('user');
  }
  
  Definition(sq: any, DataTypes: any) {
    return sq.define('user', {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
        timestamps: false,
      });
  }
}
