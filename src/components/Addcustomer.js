import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Addcustomer (props) {
const [open, setOpen] = React.useState(false);

const [customer, setCustomer] = React.useState({brand: '', model: '', color: '', fuel: '',
year: '', price: ''})

const handleClickOpen = () => {
    setOpen(true);
};

const handleClose = () => {
    setOpen(false);
};

const handleInputChange = (e) => {
    setCustomer({...customer, [e.target.name]:e.target.value})
};

const addCustomer = () => {
    props.saveCustomer(customer);
    handleClose();
};

  return (
    <div>
      <Button style={{margin: 10}} variant="outlined" color="primary" onClick={handleClickOpen}>
        Add car
      </Button>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">New car</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            name='brand'
            value={customer.brand}
            label="Brand"
            onChange={e => handleInputChange(e)}
            fullWidth
          />
           <TextField
            margin="dense"
            name='model'
            value={customer.model}
            label="Model"
            onChange={e => handleInputChange(e)}
            fullWidth
          />
           <TextField
            margin="dense"
            name='color'
            value={customer.color}
            label="Color"
            onChange={e => handleInputChange(e)}
            fullWidth
          />
           <TextField
            margin="dense"
            name='fuel'
            value={customer.fuel}
            label="Fuel"
            onChange={e => handleInputChange(e)}
            fullWidth
          />
           <TextField
            margin="dense"
            name='year'
            value={customer.year}
            label="Year"
            onChange={e => handleInputChange(e)}
            fullWidth
          />
           <TextField
            margin="dense"
            name='price'
            value={customer.price}
            label="Price"
            onChange={e => handleInputChange(e)}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={addCustomer} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
    )
}