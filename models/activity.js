
const mongoose = require('mongoose');

// Activity Model
let activityModel = mongoose.Schema({
    name: String,
    course: String,
    dueDate: Date,
    description: String,
    status: String
},
{
    collection: "activities"
});

module.exports = mongoose.model('Activity', activityModel);
