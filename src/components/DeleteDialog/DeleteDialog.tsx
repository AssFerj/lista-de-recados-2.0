import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Typography,
  DialogActions,
  Button
} from '@mui/material';
import React from 'react';

interface DeleteDialogProps {
  title: string;
  openConfirm: boolean;
  cancelText: string;
  confirmText: string;
  itemDescription: any;
  actionCloseConfirm: () => void;
  actionDeleteTask: () => void;
}

const DeleteDialog: React.FC<DeleteDialogProps> = ({
  title,
  openConfirm,
  cancelText,
  confirmText,
  itemDescription,
  actionCloseConfirm,
  actionDeleteTask
}) => {
  return (
    <React.Fragment>
      <Dialog
        open={openConfirm}
        onClose={actionCloseConfirm}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <Typography variant="body1">{itemDescription}</Typography>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={actionCloseConfirm}>{cancelText}</Button>
          <Button onClick={actionDeleteTask} autoFocus>
            {confirmText}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteDialog;
