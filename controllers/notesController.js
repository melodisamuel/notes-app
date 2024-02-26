const Note = require('../models/notes');
const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/appError');

exports.createNote = catchAsync(async (req, res, next) => {
    console.log(req.body);
    const note = await Note.create(req.body)

    
    res.status(201).json({
        status: 'success',
        results: note.length,    
        data: {
            note
        }
    })
})

exports.readNote = catchAsync(async (req, res, next) => {
    const note = await Note.findById(req.params.id);


    if (!note) {
        return next(new AppError('No notes found with that ID', 404))
    }
    res.status(200).json({
        status: "success",
        data: {
            note,
        }
    })
})

exports.updateNote = catchAsync(async (req, res, next) => {
    const note = await Note.findByIdAndUpdate(req.params.id, req.body, { new: true })
    
    if (!Note) {
        return next(new AppError('No note found with that ID', 404))
    }

    res.status(200).json({
        status: "success",
        message: "Notes updated sucessfully",
        data: {
            note
        }
    })
})

exports.deleteNote = catchAsync(async (req, res, next) => {
    const note = await Note.findByIdAndDelete(req.params.id);

    if (!Note) {
        return next(new AppError('No note found with that ID', 404))
    }

    res.status(200).json({
        status: "success",
        data: null 
    })
})