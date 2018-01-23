export interface Timestamps {
  created?: Timestamp;
  modified?: Timestamp
}

interface Timestamp {
  timestamp: string;
  by: {
    id: number;
    username: string;
  };
}

export interface Model {
  name: string;
  
  add(data: any): Promise<any>;
  find(id: any): Promise<any>;
  update(id: any, data: any): Promise<any>;
  delete(id: any): Promise<any>;
}
