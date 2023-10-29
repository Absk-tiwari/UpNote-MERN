const mongoose = require('mongoose'); 
const dbURI='mongodb://192.168.93.154:27017/upNote?tls=false&readPreference=primaryPreferred';

const connect =()=>{
    mongoose.connect(dbURI, {useUnifiedTopology:true}).then(()=>{
        console.log('connected');
     }).catch(e=>{
        console.log(e); 
     })
}

module.exports=connect;