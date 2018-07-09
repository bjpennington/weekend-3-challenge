// bring in express and to-do schema
const express = require('express');
const ToDo = require('../models/todos.schema');

// establish router
const router = express.Router();

// GET function for /to-dos
router.get('/', (req, res) => {
    // pull all ToDo database data from mongo
    ToDo.find({}).then((dataFromMongo) => {
        // send all data to frontend
        res.send(dataFromMongo);
        // capture and send error from mongo
    }).catch((errFromMongo) => {
        console.log(errFromMongo);
        res.sendStatus(500);
    });
});

// POST function for /to-dos
router.post('/', (req, res) => {
    // create new variable based on to-do schema to house posted data from front end
    let newToDo = new ToDo(req.body);
    // save new variable to mongo database
    newToDo.save().then((dataFromMongo) => {
        // send 201 created status back to front end
        res.sendStatus(201);
        // capture and send error from mongo
    }).catch((errFromMongo) => {
        console.log(errFromMongo);
        res.sendStatus(500);
    });
});

// DELETE function for /to-dos
router.delete('/:id', (req, res) => {
    // search ToDo database for relevant id and remove from database
    ToDo.findByIdAndRemove({
        _id: req.params.id
        // send 200 okay status back to front end
    }).then((dataFromMongo) => {
        res.sendStatus(200);
        // caputre and send error from mongo
    }).catch((errFromMongo) => {
        console.log(errFromMongo);
        res.sendStatus(500);
    });
});

// PUT function for /to-dos
router.put('/:id', (req, res) => {
    // search ToDo database for relevant id and update with data sent from front end
    ToDo.findByIdAndUpdate(req.params.id, req.body)
        // send 200 okay status back to front end
        .then((dataFromMongo) => {
            res.sendStatus(200);
            // capture and send error from mongo
        }).catch((errFromMongo) => {
            console.log(errFromMongo);
            res.sendStatus(500);
        });
});

// export router
module.exports = router;