# System Design Document
**Project:** Munga & Brothers Supplies Digital Operations & Logistics System  
**Version:** 1.0  
**Date:** May 13, 2026  

## 1. User Roles & Permissions (Final)

| Role       | Key Permissions |
|------------|-----------------|
| **Admin**  | Full system access, user management, system configuration, all reports |
| **Manager**| Create/edit orders, dispatch (assign drivers & trucks), manage deliveries, view reports |
| **Driver** | **No system login or dashboard access** |

**Important Note:** Drivers will **only receive SMS notifications** on their phone when assigned a delivery. They will not have any login credentials or access to the system.

## 2. System Architecture

- **Frontend**: React.js + Vite + TailwindCSS (Admin & Manager Dashboard only)
- **Backend**: Node.js + Express.js + Mongoose
- **Database**: MongoDB
- **Authentication**: JWT + HTTP-only cookies (Admin & Manager only)
- **SMS Integration**: Africa's Talking API
- **File Storage**: Cloudinary / AWS S3 (for proof of delivery photos)
- **Hosting**: Render & Vercel

## 3. Key Business Rules

- One driver and one truck can be assigned to only **one active delivery** at a time.
- Managers handle all dispatching.
- Delivery status workflow: `Pending` → `Assigned` → `In Transit` → `Delivered` → `Completed` / `Cancelled`
- Proof of delivery (photo) must be uploaded by Manager.
- All actions are audited.

## 4. MongoDB Collections (Schema Overview)

- **Users** (Admin & Manager only)
- **Drivers**
- **Trucks**
- **Orders**
- **Deliveries**
- **OrderItems**
- **SMSLogs**
- **ActivityLogs**

*(Read the full Mongoose at [System Design](DB_SCHEMA.js))*

## 5. Core Modules

- Public Marketing Website
- Authentication & User Management
- Order Management
- Dispatch & Delivery Management
- Driver & Fleet Management
- SMS Notification Engine
- Reporting & Analytics
- Audit & Activity Logging

## 6. Detailed User Flows

**Main Flow (Order → Delivery)**
1. Manager creates Order + Order Items
2. Manager goes to Dispatch → Assigns Driver + Truck
3. System creates Delivery record + sends **SMS** to Driver
4. Driver carries out delivery
5. Manager updates status to "In Transit" / "Delivered" and uploads proof photo
6. System completes delivery and sends confirmation SMS to Driver

## 7. Non-Functional Requirements

- System must be mobile responsive (especially for Managers on site)
- SMS delivery success rate > 95%
- Average page load < 2 seconds
- Support up to 50 concurrent users initially
- Data backup daily
- Basic security (rate limiting, input validation, password hashing)

## 8. Security Considerations

- JWT authentication with refresh tokens
- Role-based access control (RBAC)
- Passwords hashed with bcrypt
- Sensitive data encryption where necessary
- Input sanitization to prevent NoSQL injection

## 9. SMS Notification Templates

- New Delivery Assignment
- Delivery Status Updated
- Delay Reminder (future)

## 10. Assumptions & Constraints

- Drivers do not need system login (only SMS)
- Proof of delivery will be uploaded by Manager
- Internet required for Managers to update status
- Phase 1 does not include GPS tracking or mobile app

## 11. Out of Scope (Phase 2)

- Driver mobile app
- Live GPS tracking
- Customer portal
- Automated accounting
- AI route optimization