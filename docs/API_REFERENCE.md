# Munga & Brothers API Documentation (Updated)

**Base URL**: `/api/v1`

## Authentication
- `POST /auth/login` - Login for Admin, Manager, Driver
- `POST /auth/register` - Admin only

## Users & Drivers
- `GET /users` - Admin only
- `GET /drivers` - Admin & Manager

## Orders
- `POST /orders` - Manager & Admin
- `GET /orders` - Role based
- `GET /orders/:id`

## Dispatch (Managed by Manager)
- `POST /deliveries/assign` - { orderId, driverId, truckId } → Manager only
- `GET /deliveries/pending`

## Driver Endpoints
- `GET /driver/assignments` - Current driver's assignments
- `PATCH /deliveries/:id/status` - Driver can update own delivery

## Protected by JWT + Role Middleware
