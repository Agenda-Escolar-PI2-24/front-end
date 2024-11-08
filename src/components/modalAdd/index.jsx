import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DashContext } from '../../contexts/dashboardContext';
import { useContext } from 'react';
import { FormControl, TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export default function CustomizedDialogs() {

  const { modalAddOpen, handleAddClose } = useContext(DashContext) 

  return (
    <>
      <BootstrapDialog
        onClose={handleAddClose}
        aria-labelledby="customized-dialog-title"
        open={modalAddOpen}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          Modal title
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleAddClose}
          sx={(theme) => ({
            position: 'absolute',
            right: 8,
            top: 8,
            color: theme.palette.grey[500],
          })}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
        <FormControl fullWidth={true}>
            {/* <TextField 
                id="email"
                required="true" 
                margin="dense"
                type="email" 
                label="Email" 
                variant="outlined" 
                color="secondary"
                onChange={(e) => setEmail(e.target.value)}
                error={Boolean(errors.email)}
                helperText={errors.email}
            />
            <TextField 
                id="password" 
                required="true" 
                margin="dense"
                type="password" 
                label="Senha" 
                variant="outlined" 
                onChange={(e) => setPassword(e.target.value)}
                error={Boolean(errors.password)}
                helperText={errors.password}
            /> */}
        </FormControl>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleAddClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </>
  );
}