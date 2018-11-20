var express = require('express');
var router = express.Router();
var Person = require('../../models/person');

router.get('/:id', (req, res) => {
    var model = {
        title: 'Person Details',
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
        res.render('view/view', model);
    });
});

module.exports = router;