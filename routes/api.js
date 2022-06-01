const express = require('express');
const router = express.Router();
const Company = require('../models/company');

router.get('/companies', (req, res, next) => {
  // This will return all the data
  Company.find({})
    .then((data) => {
      res.json(data)
    })
    .catch(next);
});

router.post('/companies', (req, res, next) => {
  if (req.body.name) {
    Company.create(req.body)
      .then((data) => res.json(data))
      .catch(next);
  } else {
    res.json({
      error: 'The input field is empty',
    });
  }
});

router.delete('/companies/:id', (req, res, next) => {
    Company.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.json(data))
    .catch(next);
});

module.exports = router;