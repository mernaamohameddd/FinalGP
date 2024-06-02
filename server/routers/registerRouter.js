const express = require('express');
const registerController = require('../controllers/codeController');
const {Router} = require ('express');
const router = Router();

router.post('/CourseRegister', registerController.enrollStudent);

module.exports = router;
