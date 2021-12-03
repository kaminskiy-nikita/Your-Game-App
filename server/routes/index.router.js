const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    res.send('My Game App');
  } catch (error) {
    console.log(error.message);
    res.status(500).end();
  }
});

module.exports = router;
