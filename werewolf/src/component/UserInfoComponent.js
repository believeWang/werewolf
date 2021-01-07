import React, {Component} from 'react';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import TextField from "@material-ui/core/TextField";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";


const UserInfoComponent = ({ className, setName, setRoomCode,...rest }) => {
  const [open, setOpen] = React.useState(true);
  const [tempName, setTempName] = React.useState(null);
  const [room, setRoom] = React.useState(null);

  let handleClickOpen = () => {
    setOpen(true);
  };

  let handleClose = () => {
    setOpen(false);
  };

  let save = () => {
    setOpen(false);
    setName(tempName);
    setRoomCode(room);
  };

  let setEnteredName = (event) => {
    setTempName( event.target.value);
  };
  let setEnteredRoom = (event) => {
    setRoom( event.target.value);
  };
  return (
      <div>
        <Dialog open={open} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Chat</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your name
            </DialogContentText>
            <TextField
                autoFocus
                autoComplete='off'
                margin="dense"
                id="name"
                label="Name"
                type="name" onChange={setEnteredName}
                fullWidth
            />
            <TextField
                autoComplete='off'
                margin="dense"
                id="room"
                label="Room"
                onChange={setEnteredRoom}
                fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={save} color="primary">
              Save
            </Button>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </div>
  )
}

export default UserInfoComponent;
