export interface Storage {
  create(data: any, id?: any): Promise<any>;
  read(id?: any): Promise<any>;
  update(id: any): Promise<any>;
  delete(id: any): Promise<any>;
}
