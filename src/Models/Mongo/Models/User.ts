import { Model } from '../Model';
import { Schema } from 'mongoose';
import { get as _get, set as _set } from 'lodash';

import { genSalt, hash } from 'bcrypt';

export class User extends Model {
  name = 'user';

  schema() {
    const schema = new Schema({
      username: { type: String, unique: true, required: true, minlength: 5, maxlength: 40 },
      password: { type: String, required: true },
    })
      .pre('save', async function (this: any, next) {
        let user = this;
        const salt = await genSalt(10);
        const password = _get(user, 'password');
        const hashed = await hash(password, salt);
        _set(user, 'password', hashed);
        next();
      })
      .pre('update', async function (this: any, next) {
        let user = this;
        const salt = await genSalt(10);
        const password = _get(user, 'password');
        const hashed = await hash(password, salt);
        _set(user, 'password', hashed);
        next();
      });
    return schema;
  }
}
