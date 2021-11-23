const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, 'must provide a name'],
        trim:true,
        maxlength:[20, 'name can not be more than 20 characters']
    },
    completed:{
        type:Boolean,
        default:false
    },
    due:{
        type:Date,
    },
    stress:{
        type:Number,
        defual:0,
    },
    importance:{
        type:Number,
        defualt:0,
    }
})

module.exports = mongoose.model('Task', TaskSchema)

/*
 - - - - - - - - - - 

fix marking as completed
editing task text

task due date
sort by due data

stress/importance

add/remove task animation 


*/