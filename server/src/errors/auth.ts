import { CustomError } from "./custom-error";
import { IErrorResponse, ISerializedError } from "../types";

export class AuthError extends CustomError {
  statusCode: number;

  constructor(
    public message: string = "Unauthorized",
    statusCode: number = 401
  ) {
    super(message);

    this.statusCode = statusCode;

    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors(): IErrorResponse<ISerializedError> {
    return {
      success: false,
      errors: [{ message: this.message }],
    };
  }
}