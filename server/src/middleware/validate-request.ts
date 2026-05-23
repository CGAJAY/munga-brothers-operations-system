import { Request, Response, NextFunction } from "express";
import { z } from "zod";
import { RequestValidationError } from "../errors/request-validation";

export const validateRequest =
  (schema: z.ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);

    if (!result.success) {
      const errors = result.error.issues.map((issue) => ({
        message: issue.message,
        field: issue.path.join("."),
      }));

      return next(new RequestValidationError(errors));
    }

    req.body = result.data;
    next();
  };