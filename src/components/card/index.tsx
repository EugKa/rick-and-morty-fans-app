import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
  Grid, 
  Typography, 
  Button, 
  CardContent, 
  CardMedia, 
  CardActions, 
  Card,
} from '@material-ui/core';
import { ICharacter } from '../../interface/character';
import { Spinner } from '../spinner';
import { CardModal } from '..';
import * as api from '../../api'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    margin: 10
  },
  title: {
    fontSize: 14,
  },
  media: {
    height:300,
  },
});


interface CardItemProps {
  item: ICharacter
}

export const CardItem = ({ item }: CardItemProps) => {
  const [open, setOpen] = useState(false);
  const classes = useStyles();
  const [dataEpp, setDataEpp] = useState<any>([])

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    api.parallelCall(item.episode).then((ep) => {
      setDataEpp(ep)
    })
  }, [item.episode])

  console.log(`item`, dataEpp)

  return (
    <Grid item lg={3} md={4} sm={6} xs={12}>
      <Card className={classes.root} variant="outlined">
        {item.image ? (<CardMedia
          className={classes.media}
          image={item.image}
          title="Paella dish"
        />): <Spinner/>}
        <CardContent>
          <Typography className={classes.title} color="textSecondary" gutterBottom>
            {item.name}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={handleOpen} size="small">Learn More</Button>
        </CardActions>
        {/* {dataEpp.map((eps: any) => <div key={eps.id}>
          <div>
            {eps.episode}{" "}{eps.name}{" "}{eps.air_date}
          </div>
        </div>)} */}
        <CardModal item={item} open={open} handleClose={handleClose}/>
      </Card>
    </Grid>
    
  );
}