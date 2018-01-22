import * as mysql from 'mysql';
import { promisify } from 'util';

import { Storage as IStorage } from '../interfaces/Storage';

export class Storage implements IStorage {

  constructor(options: any) {

  }

  create(data: any, id?: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  read(id?: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  update(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }
  delete(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

}
