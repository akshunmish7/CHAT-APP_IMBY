const mongoose = require('mongoose');

const url=`mongodb+srv://akshunmish_chat_app:akshun@cluster0.t2lxlw0.mongodb.net/?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => console.log('Connected to DB')).catch((e)=> console.log('Error', e))