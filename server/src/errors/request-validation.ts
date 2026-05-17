import { ISerializedError, IErrorResponse } from "../types";
import { CustomError } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;

  constructor(public errors: ISerializedError[]) {
    super("Request validation error");

    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors(): IErrorResponse<ISerializedError> {
    return {
      success: false,
      errors: this.errors,
    };
  }
}