import React, { Component } from 'react';
import ButtonA from './ButtonA.component';
import ButtonB from './ButtonB.component';
import { SharedSnackbarProvider } from './SharedSnackbar.context';

const styles = {
  app: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
};

class App extends Component {
  render() {
    return (
      <div style={styles.app}>
        <SharedSnackbarProvider>
          <ButtonA />
          <ButtonB />
        </SharedSnackbarProvider>
      </div>
    );
  }
}

export default App;

