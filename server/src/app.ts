import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import cookieParser from "cookie-parser";
import morgan from "morgan";

import { NotFoundError } from "./errors";
import { errorHandler } from "./middleware";

const app = express(); // Create Express app instance

// Security headers
app.use(helmet()); // Helps secure Express apps by setting various HTTP headers

// Enable CORS
app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  })
);

// Parse cookies
app.use(cookieParser());

// Compress responses
app.use(compression());

// HTTP request logger
app.use(morgan("dev"));

// Parse JSON and URL-encoded bodies
app.use(express.json());

// Parse URL-encoded bodies (for form submissions)
app.use(
  express.urlencoded({
    extended: true,
  })
);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Welcome to Munga & Brothers Supplies API!");
});

// TODO: Add your API routes here
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/orders", orderRoutes);


// Handle 404 for undefined routes
app.use((req, res, next) => {
  next(new NotFoundError());
});

// Global error handler
app.use(errorHandler);

export default app;