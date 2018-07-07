const express = require('express');
const ToDo = require('../models/todos.schema');

const router = express.Router();

router.get('/', (req, res) => {
    console.log('line 7 got to /to-dos GET');
    ToDo.find({}).then((dataFromMongo) => {
        console.log('line 9', dataFromMongo);
        res.send(dataFromMongo);
    }).catch((errFromMongo) => {
        console.log('line 12 catch error', errFromMongo);
        res.sendStatus(500);
    });
});

router.post('/', (req, res) => {
    console.log('line 18 got to /to-dos POST');
    console.log('line 18 toDo POST req.body is:', req.body);
    
    let newToDo = new ToDo(req.body);

    newToDo.save().then((dataFromMongo) => {
        console.log('line 24 POST data from mongo:', dataFromMongo);
        res.sendStatus(201);
    }).catch((errFromMongo) => {
        console.log('POST to mongo failed:', errFromMongo.message);
        res.sendStatus(500);
    }); 
});

router.delete('/:id', (req, res) => {
    console.log('line 33 here is the req.body from frontend:', req.body);
    ToDo.findByIdAndRemove({
        _id : req.params.id
    }).then((dataFromMongo) => {
        console.log('Data returned from Mongo:', dataFromMongo);
        res.sendStatus(202);
    }).catch((errFromMongo) => {
        console.log('line 40 /to-dos DELETE failed. Error:', errFromMongo);
        res.sendStatus(500);
    });
});

module.exports = router;