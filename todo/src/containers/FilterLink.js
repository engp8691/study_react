import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './FilterLink.module.css';

const FilterLink = ({ filter, children }) => {
	return (
		<NavLink
			to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
			className={classes.normalLink}
			activeClassName={classes.activeLink}
			exact={filter === 'SHOW_ALL' ? true : false}
		>
			{children}
		</NavLink>
	)
}

export default FilterLink

