const express = require('express');
const noteController = require('../controllers/notesController');
const AppError = require('../utils/appError');

const router = express.Router();


router.route('/create-note').post(noteController.createNote);
router.route('/read-note/:id').get(noteController.readNote);
router.route('/update-note/:id').patch(noteController.updateNote);
router.route('/delete-note/:id').delete(noteController.deleteNote);

module.exports = router;