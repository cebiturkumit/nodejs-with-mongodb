var express = require('express');
var router = express.Router();
var Person = require('../../models/person');

router.get('/', (req, res) => {
    var model = {
        title: 'Add New Person',
        data: null
    };
    res.render('form/form', model);
});

router.get('/:id', (req, res) => {
    var model = {
        title: 'Edit Person',
        data: null
    };
    Person.findById(req.params.id, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            model.data = data;
            model.title += (': ' + data.name + ' ' + data.surname);
        }
        res.render('form/form', model);
    });
});

router.post('/', (req, res) => {
    var person = new Person(req.body);
    person.save((err, data) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

router.post('/:id', (req, res) => {
    Person.findByIdAndUpdate(req.params.id, req.body, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });
});

module.exports = router;