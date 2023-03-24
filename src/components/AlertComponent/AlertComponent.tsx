import { Collapse, Alert, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { AlertColor } from '@mui/material/Alert';
import React from 'react';

interface AlertComponentProps {
  message: string;
  typeAlert: AlertColor;
  actionShowAlert: boolean;
  actionShowAlertFc: () => void;
}

const AlertComponent: React.FC<AlertComponentProps> = ({ message, typeAlert, actionShowAlert, actionShowAlertFc }) => {
  return (
    <React.Fragment>
      <Collapse
        in={actionShowAlert}
        style={{
          margin: 0,
          padding: 0,
          position: 'absolute',
          zIndex: 999,
          bottom: 5,
          right: 5
        }}
      >
        <Alert
          severity={typeAlert}
          action={
            <IconButton aria-label="close" color="inherit" size="small" onClick={actionShowAlertFc}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          {message}
        </Alert>
      </Collapse>
    </React.Fragment>
  );
};

export default AlertComponent;
