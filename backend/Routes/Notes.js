const  express = require("express");
const router = express.Router();
const fetchuser = require('../Middlewares/FetchUser');
const {body, validationResult }=require('express-validator')
const Notes = require("../Models/Note");

// Route 1 get all notes
router.get('/fetchall', fetchuser, async(req,res)=>{
    try {
        
        const Id=req.body.id;
        const notes = await Notes.find({user:Id});
        res.json(notes);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal server error!')        
    }
});

// Route 2 create a note
router.post('/create', fetchuser, [
    body('title','Please enter a valid title!').isLength({min:4}),
    body('tag','Please enter a valid tag!').isLength({min:3}),
    body('description','Please enter a valid description!').isLength({min:5})
], async(req,res)=>{
    try {
         
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json(errors);
        }
        const user = req.body.id;
        if(!user){
            return res.status(401).send('Please enter a valid token!');
        }
        const {title, description, tag} = req.body;
        console.log(title, user)
        const notes = new Notes({
            user: user, title , description, tag 
        });
        const saved = await notes.save();

        res.json(saved);

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Internal server error!')        
    }
});

// Route 3 : Update a note
router.put('/update/:id', fetchuser,  [
    body('title','Please enter a valid title!').isLength({min:4}),
    body('tag','Please enter a valid tag!').isLength({min:3}),
    body('description','Please enter a valid description!').isLength({min:5})],
    async(req,res)=> {
    try {
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).send(errors)
        }
        const user = req.body.id; // Get the id from middleware
        const existing =await Notes.findById(req.params.id);
        if(!existing){
            // Note doesn't exist on requested id , return right back
            return res.status(404).send('Not found');
        }
        console.log(existing.user, req.params.id)
        if(existing.user.toString() !== req.body.id){
            // Intent to update someone else's note
            return res.status(402).send('Not allowed!');
        }
        // Set the newly updated data for the note and pass it to the function 
        const newNote = {
            title : req.body.title,
            description : req.body.description,
            tag : req.body.tag
        }
        const updated = await Notes.findByIdAndUpdate(req.params.id, {$set : newNote}, {new : true});
        res.json(updated);

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({'Internal server error!': error});
    }
});

//  Route 4 Delete a note
router.delete('/delete/:id', fetchuser, async(req, res)=>{
    try {
        const user = req.body.id;
        let note = await Notes.findById(req.params.id);
        if(!note){
            return res.status(404).send('Not found on the requested Id!');
        }
        if(note.user.toString() !== req.body.id){
            return res.status(402).send('Not Allowed!');
        }
        const deleted = await Notes.findByIdAndDelete(req.params.id);
  
        res.json({'Success' : 'Note has been deleted successfully!','note' : deleted})
         
    } catch (error) {
        console.log(error.message);
        return res.status(500).send('Internal server error!')
    }
})
module.exports=router