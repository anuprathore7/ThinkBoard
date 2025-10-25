import {Note} from '../models/note.model.js'
export const getNotes = async (req ,res)=>{
   try {
     const notes = await Note.find().sort({createdAt : -1});
     res.status(200).json(notes);
   } catch (error) {
    console.log(`Error in fetching notes: ${error}`);
    res.status(500).json({message : "Error in fetching notes"});
    
   }
}


export const getNotesById = async (req , res) =>{
  try {
    const note = await Note.findById(req.params.id);
     if (!note) return res,status(404).json({message : "Note not found"})
     
      res.status(200).json(note);
    
  } catch (error) {
    console.log(`Error is happening ${error}`)
    res.status(500).json({message : "Error in fetching note by id"});
  }
}

export const CreateNotes = async (req ,res)=>{
    try {
        const {title , content} = req.body;
        const newNote = new Note({ title , content});
        const SavedNote = await newNote.save();
        res.status(201).json(SavedNote);

    } catch (error) {
        console.error(`Error in creating in notes :${error}`);
        res.status(500).json({message : "Error in creating notes"});
        
    }
}

export const updateNotes = async (req ,res)=>{
  try {
     const {title , content} = req.body;
     const updatedNote =await Note.findByIdAndUpdate(req.params.id , {title , content} , {
        new : true
     });
     if (!updatedNote) return res.status(404).json({message : "Note not found"});

     res.status(200).json(updatedNote);
    
  } catch (error) {
    console.log(`Error in updating notes : ${error}`);
    res.status(500).json({message : "Error in updating notes"});
    
  }

}
export const deleteNotes = async (req ,res)=>{
   try {
    const deleteNotes =await Note.findByIdAndDelete(req.params.id )

    if (!deleteNotes) return res.status(404).json({message : "Note not found"});

    res.status(200).json({message : "Note deleted successfully"});
    
   } catch (error) {
    console.log(`Error in deleting notes : ${error}`);
    res.status(500).json({message : "Error in deleting notes"});
   }
}