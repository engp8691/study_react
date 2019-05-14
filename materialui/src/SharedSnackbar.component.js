import { IconButton, Snackbar } from '@material-ui/core';
import { Close } from '@material-ui/icons';
import React from 'react';
import { SharedSnackbarConsumer } from './SharedSnackbar.context';

const SharedSnackbar = () => (
	<SharedSnackbarConsumer>
		{({ snackbarIsOpen, message, closeSnackbar }) => {
			console.log(9, "Caobi dele");

			return (
				<Snackbar
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'left',
					}}
					open={snackbarIsOpen}
					autoHideDuration={6000}
					onClose={closeSnackbar}
					message={message}
					action={[ <IconButton key="close" color="inherit" onClick={closeSnackbar}> <Close /> </IconButton>, ]}
				/>
			);
		}}
	</SharedSnackbarConsumer>
);

export default SharedSnackbar;

