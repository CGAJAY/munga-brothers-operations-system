import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // If it's a known app error
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json(err.serializeErrors());
  }

  // Unexpected/unhandled errors
  console.error("🔥 Unexpected Error:", err);

  return res.status(500).json({
    success: false,
    errors: [
      {
        message: "Internal Server Error",
      },
    ],
  });
};