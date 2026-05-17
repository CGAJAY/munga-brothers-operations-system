import express from "express";
import { NotFoundError } from "./errors";
import { errorHandler } from "./middleware";

const app = express();

/**
 * =========================
 * CORE MIDDLEWARES
 * =========================
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * =========================
 * HEALTH CHECK
 * =========================
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: "API is healthy 🚀",
  });
});

/**
 * =========================
 * ROUTES (REGISTER LATER)
 * =========================
 */
// app.use("/api/v1/orders", orderRoutes);
// app.use("/api/v1/auth", authRoutes);

/**
 * =========================
 * 404 HANDLER (CATCH ALL)
 * =========================
 */
app.all("*", (req, res, next) => {
  next(new NotFoundError());
});

/**
 * =========================
 * GLOBAL ERROR HANDLER
 * =========================
 */
app.use(errorHandler);

export default app;