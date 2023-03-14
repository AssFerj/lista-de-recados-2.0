import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const TaskForm: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  // const [list, setList] = useState<string>('');

  // const handleSetDescription = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log(description);
  //   setDescription('');
  //   return;
  // };

  // const handleSetList = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setList(e.target.value);
  //   // console.log(list);
  // };

  return (
    <React.Fragment>
      <Typography variant="h6" mb={5}>
        Cadastrar Tarefas
      </Typography>
      <TextField
        id="task-description"
        label="Descrição"
        variant="standard"
        fullWidth
        sx={{ marginBottom: 3 }}
        onChange={e => setDescription(e.target.value)}
      />
      <Button variant="contained" fullWidth>
        Cadastrar
      </Button>
      <Typography>{description}</Typography>
    </React.Fragment>
  );
};

export default TaskForm;
