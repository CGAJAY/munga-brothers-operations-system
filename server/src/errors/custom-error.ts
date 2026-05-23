import { IErrorResponse, ISerializedError } from "../types";

export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor(message: string) {
    super(message);

    // Fix prototype chain for instanceof checks
    Object.setPrototypeOf(this, new.target.prototype);
  }

  abstract serializeErrors(): IErrorResponse<ISerializedError>;
}