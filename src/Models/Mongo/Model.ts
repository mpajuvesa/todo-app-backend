import * as mongoose from 'mongoose';
// import { database } from './Database';
import { Schema } from 'mongoose';

import { Model as IModel } from '../../Interfaces/Common';

export class Model implements IModel {
  name = ''
  Schema: any;
  constructor(db: any) {
    this.Schema = db.model(this.name, this.schema());
  }

  async add(data: any): Promise<any> {
    const created = await this.Schema.create(data);
    return created;
  }
  async find({ key, value }: any): Promise<any> {
    console.log({ key, value })
    let obj: any = {}
    obj[key] = value;
    const found = await this.Schema.findOne(obj);
    return found;
  }
  async update(id: any, data: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  async delete(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  protected schema(): mongoose.Schema {
    throw new Error('Schema not implemented.');

  }
}
