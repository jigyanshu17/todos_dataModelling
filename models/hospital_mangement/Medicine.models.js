import mongoose from 'mongoose'

// Sub-Schema for Dosage Information
const DosageSchema = new mongoose.Schema({
  quantity: { type: Number, required: true }, // e.g., 500 (mg)
  frequency: { type: String, required: true }, // e.g., "twice a day"
  duration: { type: String, required: true }, // e.g., "7 days"
});

// Sub-Schema for Manufacturer Details
const ManufacturerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  address: { type: String },
  contact: { type: String },
});

// Main Medicine Schema
const MedicineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  manufacturer: { type: ManufacturerSchema, required: true },
  expiryDate: { type: Date, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  dosage: { type: DosageSchema }, // Optional sub-schema for dosage
  description: { type: String }, // Additional details about the medicine
});

export const Medicine = mongoose.model('Medicine', MedicineSchema);
