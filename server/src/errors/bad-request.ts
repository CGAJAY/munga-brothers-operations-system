import { CustomError } from "./custom-error";
import { IErrorResponse, ISerializedError } from "../types";

export class BadRequestError extends CustomError {
  statusCode = 400;

  constructor(public message: string = "Bad Request") {
    super(message);

    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors(): IErrorResponse<ISerializedError> {
    return {
      success: false,
      errors: [{ message: this.message }],
    };
  }
}