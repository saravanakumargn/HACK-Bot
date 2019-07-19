const mongoose = require('mongoose');

const cameraDataSchema = new mongoose.Schema({
  CameraID: {
    type: String,
    required: true
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
      required: true
    },
    coordinates: {
      type: [Number],
      required: true
    }
  }
}, { timestamps: true });

const CameraData = mongoose.model('User', cameraDataSchema);

module.exports = CameraData;
