import { JwtPayload } from "jsonwebtoken";

export type SameSite = boolean | "none" | "strict" | "lax" | undefined;

export interface ISerializedError {
  message: string;
  field?: string;
}

export interface IAPIResponse<T> {
  success: true;
  data: T[] | T;
}

export interface IErrorResponse<T> {
  success: false;
  errors: T[];
}

export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  username: string;
  password: string;
  createdAt: string;
  updatedAt: string;
}

export interface IJWTUser {
  _id: IUser["_id"];
}

// TJWTPayload which extends JWTPayload to include user
export interface IJWTPayload extends JwtPayload {
  user: IJWTUser;
}