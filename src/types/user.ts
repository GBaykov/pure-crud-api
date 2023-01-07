import { v4 as uuid } from 'uuid';

export interface IUSER {
  id?: string;
  username: string;
  age: number;
  hobbies: string[] | [];
}
export type IUSERS = IUSER[] | [];

// export default IUSER;
