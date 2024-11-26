import mongoose from 'mongoose'

const DoctorSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    specialization: { type: String, required: true },
    experience: { type: Number, required: true },
    availableDays: [{ type: String, enum: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'] }],
    consultationFee: { type: Number },
  });
  
  export const Doctor = mongoose.model('Doctor', DoctorSchema);
  