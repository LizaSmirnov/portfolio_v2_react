// import React from 'react';
// error is   Line 26:  'React' must be in scope when using JSX  react/react-in-jsx-scope
import {
    Grid,
    Typography,
    Button,
    List,
    ListItem,
    ListItemText,
  } from '@material-ui/core';
  
  
  export const Welcome = (props) => {
    console.log(props);
    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography
            variant='h1'
            style={{
              color: props.isTextColorRed ? 'red' : 'black',
              backgroundColor: props.isTextColorRed ? 'black' : '#fff',
            }}
          >
            Hi my name is {props.name}
          </Typography>
          <Button
            variant='contained'
            onClick={() => {
              console.log(props.myObject.firstName)
            }}
          >
            Click me
          </Button>
        </Grid>
        {
          props.favoriteThings.length === 0 ?
            <Grid item xs={12}>
              <Typography variant='body1'>
                No favorite things
              </Typography>
            </Grid>
            :
            <Grid item xs={12}>
              <List>
                {
                  props.favoriteThings.map((thing, index) => {
                    return (
                      <ListItem key={index}>
                        <ListItemText >{thing}</ListItemText>
                      </ListItem>
                    );
                  })
                }
              </List>
            </Grid>
        }
      </Grid>
    );
  };
  