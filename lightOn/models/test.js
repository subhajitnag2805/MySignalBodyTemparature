const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const testSchema = mongoose.Schema({
    value: {
        type: String
    }
});

const Test = module.exports = mongoose.model('Test', testSchema);
