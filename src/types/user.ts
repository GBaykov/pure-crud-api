export interface IUSER {
  id?: string;
  username: string;
  age: number;
  hobbies: string[] | [];
}
export interface IRequestPutUser {
  username?: string;
  age?: number;
  hobbies?: string[] | [];
}

export type IUSERS = IUSER[] | [];

export interface IuserRequest {
  id?: string;
  username?: string;
  age?: number;
  hobbies?: string[] | [];
}

// export default IUSER;
