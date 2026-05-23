export const APP_NAME = "Munga & Brothers Supplies";

export const API_PREFIX = "/api/v1";

export const PORT = process.env.PORT || 5000;

export const NODE_ENV = process.env.NODE_ENV || "development";

export const MONGO_URI = process.env.MONGO_URI;

export const USER_ROLES = {
  ADMIN: "ADMIN",
  MANAGER: "MANAGER",
//   DRIVER: "DRIVER",
} as const;

export const ORDER_STATUS = {
  PENDING: "PENDING",
  ASSIGNED: "ASSIGNED",
  IN_TRANSIT: "IN_TRANSIT",
  DELIVERED: "DELIVERED",
  CANCELLED: "CANCELLED",
} as const;

export const SMS_EVENTS = {
  DRIVER_ASSIGNMENT: "DRIVER_ASSIGNMENT",
  DELIVERY_UPDATE: "DELIVERY_UPDATE",
  ADMIN_ALERT: "ADMIN_ALERT",
} as const;