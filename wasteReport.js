//Waste Report Model: This will store details about the waste report, such as the issue type (missed pickup, overflowing bin, etc.), the location,
 //and the status.

const mongoose = require('mongoose');

const wasteReportSchema = new mongoose.Schema({
  location: String,
  issueType: { type: String, enum: ['Missed Pickup', 'Overflowing Bin', 'Bulk Pickup Request'], required: true },
  description: String,
  reportedAt: { type: Date, default: Date.now },
  status: { type: String, enum: ['Open', 'Resolved', 'In Progress'], default: 'Open' },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true } // Assuming users are registered
});

const WasteReport = mongoose.model('WasteReport', wasteReportSchema);
