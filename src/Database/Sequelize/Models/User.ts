import { Database } from '../Database';
import { Model as IModel } from '../../../interfaces/Common';

export class User implements IModel {
  database: any;
  Model: any;
  constructor() {
    this.database = new Database().instance();
    this.Model = this.database.import('user', Model);
  }

  async add(data: any): Promise<any> {
    const user: any = await this.Model.create(data).then((res: any) => res.get({ plain: true }));
    return user;
  }
  async find(id: any): Promise<any> {
    const user = await this.Model.findById(id).then((res: any) => res.get({ plain: true }));
    return user;
  }
  update(id: any, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
}

const Model = (sq: any, DataTypes: any) => {
  return sq.define('user', {
    username: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
      timestamps: false,
    });
}
