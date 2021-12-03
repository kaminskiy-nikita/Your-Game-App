const express = require('express');
const { User } = require('../db/models')

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
    try {
      const users = await User.findAll();
      res.json({ users });
    } catch (error) {
      console.log(error.message);
      res.status(500).end();
    }
  })
  .put(async (req, res) => {
    try {
      const { userId, result } = req.body;

      const user = await User.findOne({
        where: { id: +userId }
      })

      user.result = +result;

      await user.save();

      res.json({ isChangedResult: true });
    } catch (error) {
      console.log(error.message);
      res.status(500).end();
    }
  })

module.exports = router;
