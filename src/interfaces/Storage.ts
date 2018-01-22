export interface Storage {
  create(): Promise<any>;
  read(): Promise<any>;
  update(): Promise<any>;
  delete(): Promise<any>;
}
