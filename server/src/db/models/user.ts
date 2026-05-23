import mongoose, { Schema, Document, Model } from "mongoose";
import { UserRole } from "../../types";


export interface IUser extends Document {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  role: UserRole;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      index: true,
    },

    phone: {
      type: String,
      required: false,
    },

    password: {
      type: String,
      required: true,
      minlength: 6,
      select: false, // IMPORTANT: Never return password by default
    },

    role: {
      type: String,
      enum: ["Admin", "Manager"],
      default: "Manager",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

// INDEXES
userSchema.index({ email: 1 }); // Index on email for faster lookups


export const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", userSchema);