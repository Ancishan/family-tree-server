const express = require('express');
const router = express.Router();
const Member = require('../models/Member');

// Get all members
router.get('/', async (req, res) => {
  try {
    const members = await Member.find();
    res.json(members);
  } catch (err) {
    console.error('GET error:', err);
    res.status(500).json({ error: 'Failed to get members' });
  }
});

// Add a new member (admin only)
router.post('/', async (req, res) => {
  try {
    console.log('Request body:', req.body); 
    const { name, gender, dob, dod, parentId, spouse, photo } = req.body;

    if (!name || !gender || !dob) {
      return res.status(400).json({ error: 'Name, Gender, and DOB are required.' });
    }

    const newMember = new Member({
      name,
      gender,
      dob: new Date(dob),
      dod: dod ? new Date(dod) : undefined, // ✅ Safe dod assignment
      parentId: parentId || null,
      spouse: spouse || '',
      photo: photo || ''
    });

    const savedMember = await newMember.save();
    res.status(201).json(savedMember);

  } catch (err) {
    console.error('POST error:', err);
    res.status(500).json({ error: 'Failed to add member' });
  }
});

module.exports = router;
