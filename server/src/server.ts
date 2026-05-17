import app from "./app";
import dotenv from "dotenv";

dotenv.config();

/**
 * =========================
 * ENV VARIABLES
 * =========================
 */
const PORT = process.env.PORT || 5000;

/**
 * =========================
 * START SERVER
 * =========================
 */
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});