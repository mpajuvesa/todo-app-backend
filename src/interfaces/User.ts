import { Timestamps } from './Common';

export interface User extends Timestamps {
  id?: number;
  username: string;
  password?: string;
  role: string;
}
