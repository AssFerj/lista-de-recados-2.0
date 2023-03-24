import { Button, TextField, Typography } from '@mui/material';
import React from 'react';

interface TaskFormProps {
  title: string;
  description: string;
  buttonText: string;
  actionSetDescription: () => Event;
  // actionAddTask: () => Void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  title,
  description,
  buttonText,
  actionSetDescription /*actionAddTask*/
}) => {
  return (
    <React.Fragment>
      <Typography variant="h6" mb={5}>
        {title}
      </Typography>
      <TextField
        id="task-description"
        label="Descrição"
        variant="standard"
        fullWidth
        type={'text'}
        sx={{ marginBottom: 3 }}
        value={description}
        onChange={actionSetDescription}
      />
      <Button variant="contained" fullWidth /*onClick={actionAddTask}*/>
        {buttonText}
      </Button>
    </React.Fragment>
  );
};

export default TaskForm;
