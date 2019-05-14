import { Button } from '@material-ui/core';
import React from 'react';

const styles = {
  button: {
    margin: 8,
  },
};

const ButtonB = () => (
      <Button
        style={styles.button}
        variant="raised"
        color="secondary"
        onClick={
			() => {
				console.log(19, "Button clicked");
			}
		}
      >
        Button B
      </Button>
);

export default ButtonB;


