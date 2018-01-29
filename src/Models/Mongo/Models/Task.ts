import { Model } from '../Model';
import { Schema } from 'mongoose';
import { get as _get, set as _set } from 'lodash';

import { genSalt, hash } from 'bcrypt';

export class Task extends Model {
  name = 'task';

  schema() {
    const schema = new Schema({
      username: String,
      password: String,
    });

    schema.pre('save', async (next) => {
      let user = this;
      console.log({ next })
      const salt = await genSalt(10);
      const password = _get(user, 'password');
      console.log({ salt, password })
      const hashes = await hash(password, salt);
      _set(user, 'password', hash);
      console.log(user)
      next();
    });
    return schema;
  }
}
