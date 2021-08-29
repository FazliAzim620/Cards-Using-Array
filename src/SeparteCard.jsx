import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';



function SeparteCard(props){

    return(
        <>
          <Grid item xs={12} sm={4} md={4} lg={3} >
            <Card style={{border:'1px',boxShadow:'5px 10px 20px gray',height:"65vh"}}  >
               <CardActionArea>
                    <CardMedia width={'30%'} height={'20%'}>
                 <img style={{marginLeft:'20p',width:'100%', height:'300px'}} src={props.imurl} alt="" />
                    </CardMedia>
                 <CardContent>
                 <Typography variant="h6" component="h6">
                {props.title}
                 </Typography>
                 <Typography variant="body" justify='center' component="p">
                 {props.content}
                 </Typography>
             
                 </CardContent>
                 <Button variant="contained" color='primary' style={{margin:'15px'}}><a href={props.linkside} target="blank">Visit</a></Button>
                 </CardActionArea>
              </Card>
             </Grid>
        
      
       </>
     
    )
        }
        export default SeparteCard;