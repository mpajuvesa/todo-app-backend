import { Database } from '../Database';
import { Model } from '../../../Interfaces/Common';

export class SequelizeModel implements Model {
  private database: any;
  private model: any;
  get Database() {
    return this.database;
  }

  get Model() {
    return this.model;
  }

  set Model(value) {
    this.model = value;
  }

  /**
   * Model name
   * @param name
   */
  constructor(name: string) {
    this.database = new Database().instance();
    this.Model = this.database.import(name, this.Definition);
  }
  /**
   * Add data
   * @param item
   */
  async add(item: any): Promise<any> {
    const added = await this.Model.create(item).then((res: any) => res.get({ plain: true }));
    return added;
  }

  /**
   * Find item by id
   * @param id
   */
  async find(id: any): Promise<any> {
    const found = await this.Model.findById(id).then((res: any) => res.get({ plain: true }));
    return found;
  }

  /**
   * Update item by id
   * @param id
   * @param item
   */
  async update(id: any, item: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /**
   * Delete item by id
   * @param id
   */
  async delete(id: any): Promise<any> {
    throw new Error("Method not implemented.");
  }

  /**
   * Model definition
   * @param sq
   * @param DataTypes
   */
  Definition(sq: any, DataTypes: any): any {
    throw new Error('Model not implemented');
  }
}
