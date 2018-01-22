import { Timestamps } from './Common';

export interface Task extends Timestamps {
  id?: string;
  title: string;
  description?: string;
}
