var express = require('express');
var router = express.Router();
var Person = require('../../models/person');

router.get('/', (req, res) => {
    var model = {
        title: 'List Persons',
        data: null
    };
    Person.find((err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            model.data = data;
        }
        res.render('list/list', model);
    });
});

module.exports = router;