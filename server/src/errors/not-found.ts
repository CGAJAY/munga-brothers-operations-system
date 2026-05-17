import { StatusCodes } from "http-status-codes";
import { CustomError } from "./custom-error";
import { IErrorResponse, ISerializedError } from "../types";

export class NotFoundError extends CustomError {
  statusCode = StatusCodes.NOT_FOUND;

  constructor() {
    super("Route not found");

    Object.setPrototypeOf(this, new.target.prototype);
  }

  serializeErrors(): IErrorResponse<ISerializedError> {
    return {
      success: false,
      errors: [{ message: this.message }],
    };
  }
}