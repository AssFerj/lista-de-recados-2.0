import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField } from '@mui/material';
import React from 'react';

interface EditDialogProps {
  title: string;
  openEditConfirm: boolean;
  cancelText: string;
  confirmText: string;
  itemDescription: any;
  setItemDescription: (ev: React.ChangeEvent<HTMLInputElement>) => void;
  actionCloseEditConfirm: () => void;
  actionEditTask: (item: any) => void;
}

const EditDialog: React.FC<EditDialogProps> = ({
  title,
  openEditConfirm,
  cancelText,
  confirmText,
  itemDescription,
  setItemDescription,
  actionCloseEditConfirm,
  actionEditTask
}) => {
  return (
    <React.Fragment>
      <Dialog
        open={openEditConfirm}
        onClose={actionCloseEditConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <TextField fullWidth value={itemDescription} onChange={setItemDescription} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={actionCloseEditConfirm}>{cancelText}</Button>
          <Button onClick={actionEditTask} autoFocus>
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default EditDialog;
