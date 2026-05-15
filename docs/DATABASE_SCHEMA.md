// Munga_Brothers_MongoDB_Schema.js
const mongoose = require('mongoose');

// User Schema (Admin & Manager only)
const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['Admin', 'Manager'], 
    required: true 
  },
  isActive: { type: Boolean, default: true },
}, { timestamps: true });

// Driver Schema
const driverSchema = new mongoose.Schema({
   firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  licenseNumber: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['Available', 'Busy', 'Offline'], 
    default: 'Available' 
  },
  address: String,
  notes: String,
}, { timestamps: true });

// Truck Schema
const truckSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true, unique: true },
  type: { type: String, required: true }, // e.g., Tipper, Flatbed, Lorry
  capacityTonnes: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Available', 'In Use', 'Maintenance'], 
    default: 'Available' 
  },
  notes: String,
}, { timestamps: true });

// Material Schema
const materialSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: String,
  unitPrice: { type: Number, required: true },
  unit: { type: String, default: 'Tonnes' },
  description: String,
}, { timestamps: true });

// Order Schema
const orderSchema = new mongoose.Schema({
  orderNumber: { type: String, required: true, unique: true },
  customerName: { type: String, required: true },
  customerPhone: { type: String, required: true },
  deliveryLocation: { type: String, required: true },
  totalAmount: { type: Number, required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Dispatched', 'Completed', 'Cancelled'], 
    default: 'Pending' 
  },
  notes: String,
}, { timestamps: true });

// Order Item Schema
const orderItemSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  material: { type: mongoose.Schema.Types.ObjectId, ref: 'Material', required: true },
  quantity: { type: Number, required: true },
  subtotal: { type: Number, required: true },
});

// Delivery Schema
const deliverySchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  driver: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver', required: true },
  truck: { type: mongoose.Schema.Types.ObjectId, ref: 'Truck', required: true },
  status: { 
    type: String, 
    enum: ['Pending', 'Assigned', 'In Transit', 'Delivered', 'Completed', 'Cancelled'], 
    default: 'Pending' 
  },
  assignedAt: Date,
  startedAt: Date,
  completedAt: Date,
  proofOfDelivery: String, // Cloudinary / S3 URL
  notes: String,
}, { timestamps: true });

// SMS Log Schema
const smsLogSchema = new mongoose.Schema({
  recipientPhone: { type: String, required: true },
  message: { type: String, required: true },
  status: { type: String, enum: ['Sent', 'Delivered', 'Failed'], default: 'Sent' },
  delivery: { type: mongoose.Schema.Types.ObjectId, ref: 'Delivery' },
  type: String, // e.g., Assignment, StatusUpdate
}, { timestamps: true });

// Activity Log Schema
const activityLogSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  action: String,
  entity: String, // Order, Delivery, etc.
  entityId: String,
  description: String,
}, { timestamps: true });

module.exports = {
  User: mongoose.model('User', userSchema),
  Driver: mongoose.model('Driver', driverSchema),
  Truck: mongoose.model('Truck', truckSchema),
  Material: mongoose.model('Material', materialSchema),
  Order: mongoose.model('Order', orderSchema),
  OrderItem: mongoose.model('OrderItem', orderItemSchema),
  Delivery: mongoose.model('Delivery', deliverySchema),
  SmsLog: mongoose.model('SmsLog', smsLogSchema),
  ActivityLog: mongoose.model('ActivityLog', activityLogSchema),
};