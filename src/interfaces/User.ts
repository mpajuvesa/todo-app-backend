import { Timestamps } from './Common';

export interface User extends Timestamps {
  id?: any;
  username: string;
  password?: string;
  role: string;
}
