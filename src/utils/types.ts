export class CreateUserParams {
  username: string;
  password: string;
}

export class UpdateUserParams {
  username: string;
  password: string;
}

export type CreateUserProfileParams = {
  firstName: string;
  lastName: string;
  age:number
  dob: string;
}

export type CreateUserPostParams = {
  title: string;
  description: string;
}