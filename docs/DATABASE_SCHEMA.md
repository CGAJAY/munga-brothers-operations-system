# Munga Brothers — MongoDB Database Schema

## Overview

This document defines the MongoDB schema architecture for the Munga Brothers logistics and materials delivery management system.

The system manages:

- Admin & Manager users
- Drivers
- Trucks
- Materials
- Orders
- Deliveries
- SMS notifications
- Activity logs

---

# Collections

- Users
- Drivers
- Trucks
- Materials
- Orders
- OrderItems
- Deliveries
- SmsLogs
- ActivityLogs

---

# User Schema

Represents authenticated dashboard users.

Roles:
- Admin
- Manager

```js
{
  firstName: String,
  lastName: String,
  email: String,
  phone: String,
  password: String,
  role: 'Admin' | 'Manager',
  isActive: Boolean
}
```

## Notes

- Email must be unique
- Password should be hashed using bcrypt
- Used for authentication & RBAC

---

# Driver Schema

Represents truck drivers.

```js
{
  firstName: String,
  lastName: String,
  phone: String,
  licenseNumber: String,
  status: 'Available' | 'Busy' | 'Offline',
  address: String,
  notes: String
}
```

## Notes

- Phone number is unique
- Status controls dispatch availability

---

# Truck Schema

Represents trucks in the fleet.

```js
{
  registrationNumber: String,
  type: String,
  capacityTonnes: Number,
  status: 'Available' | 'In Use' | 'Maintenance',
  notes: String
}
```

## Notes

- Registration number must be unique
- Status helps track operational availability

---

# Material Schema

Represents construction or transport materials.

```js
{
  name: String,
  category: String,
  unitPrice: Number,
  unit: String,
  description: String
}
```

## Notes

Default unit:
- Tonnes

Examples:
- Sand
- Ballast
- Hardcore
- Cement

---

# Order Schema

Represents customer orders.

```js
{
  orderNumber: String,
  customerName: String,
  customerPhone: String,
  deliveryLocation: String,
  totalAmount: Number,
  status:
    | 'Pending'
    | 'Dispatched'
    | 'Completed'
    | 'Cancelled',
  notes: String
}
```

## Notes

- Order number must be unique
- One order can contain multiple order items

---

# OrderItem Schema

Represents materials inside an order.

```js
{
  order: ObjectId,
  material: ObjectId,
  quantity: Number,
  subtotal: Number
}
```

## Relationships

- Belongs to one Order
- References one Material

---

# Delivery Schema

Represents delivery execution and dispatch operations.

```js
{
  order: ObjectId,
  driver: ObjectId,
  truck: ObjectId,

  status:
    | 'Pending'
    | 'Assigned'
    | 'In Transit'
    | 'Delivered'
    | 'Completed'
    | 'Cancelled',

  assignedAt: Date,
  startedAt: Date,
  completedAt: Date,

  proofOfDelivery: String,
  notes: String
}
```

## Notes

Proof of delivery:
- Cloudinary URL
- S3 URL
- Signed image upload

---

# SMS Log Schema

Tracks outbound SMS notifications.

```js
{
  recipientPhone: String,
  message: String,
  status: 'Sent' | 'Delivered' | 'Failed',
  delivery: ObjectId,
  type: String
}
```

## Examples

Types:
- Assignment
- StatusUpdate
- DeliveryConfirmation

---

# Activity Log Schema

Tracks important system actions.

```js
{
  user: ObjectId,
  action: String,
  entity: String,
  entityId: String,
  description: String
}
```

## Examples

- Created Order
- Assigned Driver
- Updated Delivery Status
- Cancelled Delivery

---

# Relationships Overview

## Order Flow

Order
→ OrderItems
→ Delivery
→ SMS Notifications
→ Activity Logs

---

# Core System Relationships

## Order → OrderItems

One-to-Many

```txt
Order
 └── OrderItems[]
```

---

## Order → Delivery

One-to-One (initial MVP)

```txt
Order
 └── Delivery
```

---

## Delivery → Driver

Many-to-One

```txt
Delivery
 └── Driver
```

---

## Delivery → Truck

Many-to-One

```txt
Delivery
 └── Truck
```

---

# Recommended Future Improvements

## Suggested Enhancements

### Customer Collection

Instead of storing customer data directly in orders:

```js
Customer {
  name,
  phone,
  email,
  address
}
```

Benefits:
- repeat customers
- analytics
- customer history

---

### Payment Tracking

Add:

```js
Payment {
  order,
  amount,
  method,
  status
}
```

---

### GPS Tracking

Add truck live location support:

```js
currentLocation: {
  lat: Number,
  lng: Number
}
```

---

### Soft Deletes

Add:

```js
deletedAt: Date
```

instead of permanent deletion.

---

### Audit Metadata

Add:

```js
createdBy
updatedBy
```

for accountability.

---

# Recommended Indexes

## Users

```js
email
```

## Drivers

```js
phone
licenseNumber
```

## Trucks

```js
registrationNumber
```

## Orders

```js
orderNumber
customerPhone
status
createdAt
```

## Deliveries

```js
status
driver
truck
order
```

---

# Recommended Backend Stack

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose

## Authentication

- JWT
- HTTP-only cookies
- bcrypt

## File Uploads

- Cloudinary
- AWS S3

## SMS

- Africa's Talking
- Twilio

---

# Architecture Notes

Recommended architecture style:

```txt
Controller
→ Service
→ Repository
→ Database
```

Avoid:
- fat controllers
- business logic inside routes

---

# Status Lifecycle

## Order Status

```txt
Pending
→ Dispatched
→ Completed
```

Possible exit:
```txt
Cancelled
```

---

## Delivery Status

```txt
Pending
→ Assigned
→ In Transit
→ Delivered
→ Completed
```

Possible exit:
```txt
Cancelled
```

---

# Security Recommendations

- Hash passwords
- Validate all input
- Use rate limiting
- Use Helmet middleware
- Sanitize Mongo queries
- Restrict admin-only routes
- Validate file uploads

---

# Scalability Considerations

As the system grows:

- move SMS to queues
- introduce Redis
- use background workers
- add event-driven architecture
- introduce analytics dashboards
- separate dispatch module

---

# End of Document