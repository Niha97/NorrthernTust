import React from 'react';
import classes from './StatusCard.css';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
// import FontAwesome from 'react-fontawesome';


const styles = {
  card: {
		maxWidth: 445,
		minwidth: 445,
		width: 360,
		height: 400,
		marginBottom: 60,
		borderRadius: '10px',
		display: 'inline-block',
		margin: 30, //outside card
		position:'relative',
  },
  media: {
    height: 0,
		paddingTop: '72.25%', // 16:9 inside card
	},
	edit: {
		position: 'absolute',
		top: 10,
		right: 10,
		opacity: 0.5,
		'&:hover': {
			color: 'black',
			cursor:'pointer',
			opacity: 1,
    }
	}

};


const statuscard = (props)=>{
		const {classes}	= props;
	
		return(			
				<Card className={classes.card} >
          <CardHeader
          title={props.title}
        />
           <CardContent>
          <Typography component="p">
           <p>{props.percent}%</p>
           <p>Completed: {props.completed}</p>
           <p>On Target: {props.target}</p>
          </Typography>
        </CardContent>		   
			  </Card>				
		   
			)
}


statuscard.propTypes = {
  classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(statuscard);
