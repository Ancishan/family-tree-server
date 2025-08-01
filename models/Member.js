const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  gender: { type: String, required: true },
  dob: { type: Date, required: true },
  dod: { type: Date },
  parentId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', default: null },
  spouse: { type: String, default: '' }, 
  photo: { type: String, default: '' }
});

module.exports = mongoose.model('Member', memberSchema);
