import mongoose from 'mongoose'

const PatientSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    medicalHistory: [{ type: String }],
    age: { type: Number, required: true },
    gender: { type: String, enum: ['male', 'female', 'other'], required: true },
    bloodGroup: { type: String, enum: ['A+', 'A-', 'B+', 'B-', 'O+', 'O-', 'AB+', 'AB-'] },
    emergencyContact: { type: String },
  });
  
  export const Patient =  mongoose.model('Patient', PatientSchema);
  