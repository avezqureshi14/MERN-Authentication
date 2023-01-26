const mongoose = require('mongoose');
const DB = 'mongodb+srv://final-avez:final@cluster0.43qnmdt.mongodb.net/?retryWrites=true&w=majority'

mongoose.set('strictQuery', false);
mongoose.connect(DB,{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=>{
    console.log("Database Connected")
}).catch((err)=>{
    console.log(err)
})