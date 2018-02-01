const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const testOneSchema = mongoose.Schema({
    valueOne: {
        type: Array
    }
});

const TestOne = module.exports = mongoose.model('TestOne', testOneSchema);
