import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';

const TaskForm: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [list, setList] = useState<string[]>([]);
  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addTask = () => {
    if (description.length) {
      setList([...list, description]);
    }
  };
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
        type={'text'}
        sx={{ marginBottom: 3 }}
        onChange={e => handleSetDescription(e)}
      />
      <Button variant="contained" fullWidth onClick={addTask}>
        Cadastrar
      </Button>
      {list.map(item => {
        return (
          <Typography variant="body1" key={item}>
            {item}
          </Typography>
        );
      })}
    </React.Fragment>
  );
};

export default TaskForm;
