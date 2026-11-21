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

/* POST - Process Add Activity */
router.post('/add', async(req, res, next) => {
    try {
        await Activity.create({
            name: req.body.name,
            course: req.body.course,
            dueDate: req.body.dueDate,
            comment: req.body.comment,
            status: req.body.status || 'Pending'
        });
        res.redirect('/activities');
    }
    catch(err) {
        console.log(err);
        res.redirect('/activities');
    }
});

/* Update Operation */
/* GET - Display Edit Page */
router.get('/edit/:id', async(req, res, next) => {
    try {
        const activity = await Activity.findById(req.params.id);
        res.render('Activities/edit', {
            title: 'Edit Activity',
            activity: activity
        });
    }
    catch(err) {
        console.log(err);
        res.redirect('/activities');
    }
});

/* POST - Process Edit */
router.post('/edit/:id', async(req, res, next) => {
    try {
        await Activity.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            course: req.body.course,
            dueDate: req.body.dueDate,
            comment: req.body.comment,
            status: req.body.status
        });
        res.redirect('/activities');
    }
    catch(err) {
        console.log(err);
        res.redirect('/activities');
    }
});

/* Delete Operation */
/* POST - Mark as Completed */
router.post('/complete/:id', async(req, res, next) => {
    try {
        await Activity.findByIdAndUpdate(req.params.id, { status: 'Completed' });
        res.redirect('/activities');
    }
    catch(err) {
        console.log(err);
        res.redirect('/activities');
    }
});

/* POST - Delete Activity */
router.post('/delete/:id', async(req, res, next) => {
    try {
        await Activity.findByIdAndDelete(req.params.id);
        res.redirect('/activities');
    }
    catch(err) {
        console.log(err);
        res.redirect('/activities');
    }
});

module.exports = router;