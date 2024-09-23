const express = require('express');
const router = express.Router();
const hp = require('../controller/HpController');

router.get('/', hp.nom);
router.get('/2nd', hp.second);
router.get('/3rd', hp.third);
router.get('/4rth', hp.fourth);
router.get('/5th', hp.fifth);
module.exports = router;