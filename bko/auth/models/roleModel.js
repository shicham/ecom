const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const roleSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name required'],
	  minlength: [2, 'Too short password'],
	  maxlength: [255, 'Too long password'],
    },
	description: {
      type: String,
	  minlength: [2, 'Too short password'],
	  maxlength: [5000, 'Too long password'],
    },
	code: {
      type: String,
      required: [true, 'Name required'],
      unique: true,
      lowercase: true,
	  minlength: [2, 'Too short password'],
	  maxlength: [255, 'Too long password'],
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

const Role = mongoose.model('Role', roleSchema);

module.exports = Role;