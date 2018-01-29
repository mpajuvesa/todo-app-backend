import * as mongoose from 'mongoose';
let db: any = null;

export class Database {
  async instance(): Promise<any> {
    if (!db) {
      console.log('connecting')
      db = await mongoose.connect('mongodb://127.0.0.1/todo-app');
      return db;
    }
    return db;
  }
}

