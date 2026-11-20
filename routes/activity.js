
let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// connect my router with my model
let Activity = require('../models/activity');

/* Read Operation */
router.get('/', async(req, res, next) => {
    try {
        const Activitylist = await Activity.find();
        res.render('Activities/list', {
            title: 'Activities',
            Activitylist: Activitylist
        });
    }
    catch(err) {
        console.log(err);
        res.render('Activities/list', {
            title: 'Activities',
            Activitylist: [],
            error: 'Error on Server'
        });
    }
});

/* Create Operation */

/* GET - Display Add Activity Page */
router.get('/add', function(req, res, next) {
    res.render('Activities/add', {
        title: 'Add Activity'
    });
});

/* Update Operation */

/* Delete Operation */

module.exports = router;
