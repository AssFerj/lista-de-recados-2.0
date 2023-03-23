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

interface ConfirmDialogProps {
  title: string;
  openConfirm: boolean;
  cancelText: string;
  confirmText: string;
  actionCloseConfirm: () => void;
  actionDeleteTask: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  title,
  openConfirm,
  cancelText,
  confirmText,
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
            <Typography variant="body1">{}</Typography>
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

export default ConfirmDialog;
