import Grid from '@material-ui/core/Grid';
import SeparteCard from './SeparteCard';
import React from 'react';
import Array from './ArryofLink';
const MyCard=()=>{
 

  

    return(
       <>
       <Grid container spacing={3} >

       {Array.map((value)=>(

      <SeparteCard 
      title={value.title}
      content={value.content}
      imurl={value.imgurl} 
      linkside={value.side}/>
     
       ))}
     
        
         
    </Grid>
       </>
       )
   
}
export default MyCard;