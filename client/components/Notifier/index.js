import React from 'react';
import SnackBar from '@material-ui/core/Snackbar';

let openSnackBarFunc;

class Notifier extends React.Component {
  state = {
    open: false,
    message: '',
  };

  componentDidMount() {
    openSnackBarFunc = this.openSnackBar;
  }

  openSnackBar = (message) => {
    this.setState({
      open: true,
      message,
    });
  };

  handleSnackBarClose = () => {
    this.setState({
      open: false,
      message: '',
    });
  };

  render() {
    const { open, message } = this.state;
    return (
      <SnackBar
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        message={<span id="message-id">{message}</span>}
        autoHideDuration={3000}
        open={open}
        onClose={this.handleSnackBarClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
      />
    );
  }
}

export function openSnackBar(message) {
  openSnackBarFunc(message);
}

export default Notifier;
