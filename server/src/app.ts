import express from "express";

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
 * HEALTH CHECK ROUTE
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
 * API ROUTES (REGISTER HERE LATER)
 * =========================
// app.use("/api/v1/orders", orderRoutes);
// app.use("/api/v1/drivers", driverRoutes);
// app.use("/api/v1/auth", authRoutes);
 */

/**
 * =========================
 * 404 HANDLER
 * =========================
 */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

export default app;