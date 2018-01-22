import { Timestamps } from './Common';

export interface Task extends Timestamps {
  id?: any;
  title: string;
  description?: string;
}
