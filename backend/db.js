const mongoose = require('mongoose'); 

const dbURI='mongodb://0.0.0.0:27017/upNote?tls=false&readPreference=primaryPreferred';

const connect =()=>{
    mongoose.connect(dbURI, {useUnifiedTopology:true}).then(()=>{
        console.log('connected');
     }).catch(e=>{
        console.log(e);
        res.json({'error':'Server error occurred!'})
     })
}

module.exports=connect;