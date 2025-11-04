const express = require('express');
const router = express.Router();
const { verifyToken, authorizeRoles } = require('../middleware/auth');

// Only owner can add vehicles
router.post('/add', verifyToken, authorizeRoles('owner'), (req, res) => {
  res.json({ message: 'Vehicle added successfully by owner' });
});

module.exports = router;
