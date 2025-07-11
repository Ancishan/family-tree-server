const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', default: null },
  photo: { type: String, default: '' }
});

module.exports = mongoose.model('Member', memberSchema);
