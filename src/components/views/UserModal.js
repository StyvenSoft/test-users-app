import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from "@mui/material/Grid";
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';

export default function UserModal(props) {
  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.close}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Add new User"}
        </DialogTitle>

        <ValidatorForm
                onSubmit={props.addUser}
            >
                <DialogContent>
                    <Grid container spacing={3}>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Full Name"
                            onChange={props.changeName}
                            name="name"
                            value={props.name}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            label="Age"
                            onChange={props.changeAge}
                            name="age"
                            value={props.age}
                            validators={['required']}
                            errorMessages={['this field is required']}
                            autoComplete='off'
                        />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Street Address"
                                onChange={props.changeAddress}
                                name="address"
                                value={props.address}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <TextValidator
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                label="Email"
                                onChange={props.changeEmail}
                                name="email"
                                value={props.email}
                                validators={['required']}
                                errorMessages={['this field is required']}
                                autoComplete='off'
                            />
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions>
                    <Button type="submit" variant="contained" color="primary">
                       Save
                    </Button>
                    <Button onClick={props.close} variant="contained" color="secondary">
                        Close
                    </Button>
                </DialogActions>
            </ValidatorForm>
      </Dialog>
    </div>
  );
}