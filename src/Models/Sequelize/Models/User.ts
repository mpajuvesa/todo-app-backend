import { Model } from '../Classes/Model';
import * as _ from 'lodash';

export class User extends Model {
  constructor() {
    super('user');
  }

  async add(item: any): Promise<any> {
    const added = await this.Model.create(item)
      .then((res: any) => res.get({ plain: true }))
    // .then((user: any) => _.omit(user, 'password'));
    return added;
  }

  async find(id: any): Promise<any> {
    const found = await this.Model.scope('withPassword').findById(id).then((res: any) => res.get({ plain: true }));
    return found;
  }

  Definition(sq: any, DataTypes: any) {
    return sq.define('user', {
      username: DataTypes.STRING,
      password: DataTypes.STRING
    }, {
        timestamps: false,
        defaultScope: {
          attributes: { exclude: ['password'] }
        },
        scopes: {
          withPassword: {
            attributes: { include: ['password'] }
          }
        }
      });
  }
}
