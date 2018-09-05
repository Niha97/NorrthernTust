import React from 'react';
import classes from './Header.css';
import {NavLink} from 'react-router-dom';

const header=(props)=>{
	return(
			<div className={classes.header}>
				<nav className={classes.nav}>
					<ul className={classes.ul}>
						<li className={classes.li}><NavLink className={classes.a} to="/" exact>OVERVIEW</NavLink></li>
						<li className={classes.li}><NavLink className={classes.a} to="/#contact">TASKS</NavLink></li>
						<li className={classes.li}><NavLink className={classes.a} to="/register">DOCUMENTS</NavLink></li>
						<li className={classes.li}><NavLink className={classes.a} to="/blog">TEAM</NavLink></li>
            <li className={classes.li}><NavLink className={classes.a} to="/blog">GLOBAL MATTER</NavLink></li>
					</ul>
				</nav>				
			</div>			
		);
}


export default header;