import React from 'react'
import EditNoteIcon from '@mui/icons-material/EditNote';
import Button from '@mui/material/Button';

const First = ({setIsQuizStarted}) => {


  return (
   <>
   <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center'}}>
      <div style={{height:'472px', width:'627px'}}>
        <div style={{justifySelf:'center'}}>
        <EditNoteIcon fontSize='large' style={{color:'gray'}}/>
        </div>
       <p style={{fontWeight:'600', fontSize:'40px', textAlign:'center', marginTop:'20px'}}>Sentence Construction</p>
       <p style={{fontWeight:'400', fontSize:'20px', color:'rgba(124, 129, 129, 1)', textAlign:'center', marginBottom:'40px'}}>Select the correct words to complete the sentence by arranging the provided options in the right order.</p>

       <div style={{display:'flex', justifyContent:'space-around'}}>

        <div style={{display:'flex', flexDirection:'column'}}>
            <p style={{fontWeight:'500', fontSize:'20px', textAlign:'center'}}>Time Per Question</p>
            <p style={{fontWeight:'500', fontSize:'18px', color:'rgba(124, 129, 129, 1)', textAlign:'center'}}>30 seconds</p>
        </div>
        <hr style={{color:'rgba(124, 129, 129, 1)'}}/>
        <div style={{display:'flex', flexDirection:'column'}}>
            <p style={{fontWeight:'500', fontSize:'20px', textAlign:'center'}}>Total Questions</p>
            <p style={{fontWeight:'500', fontSize:'18px', color:'rgba(124, 129, 129, 1)', textAlign:'center'}}>10</p>
        </div>
    
       </div>

       <div style={{justifySelf:'center', marginTop:'20px'}}>
        <Button onClick={()=> setIsQuizStarted(true)} variant='contained' sx={{backgroundColor:'rgba(69, 63, 225, 1)', width:'140px', height:'42px', borderRadius:'8px'}}>Start</Button>
       </div>

      </div>
    </div>
   </>
  )
}

export default First