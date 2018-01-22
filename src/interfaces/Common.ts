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
