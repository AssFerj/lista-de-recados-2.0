import { Alert, Box, Button, Collapse, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
// import TaskForm from '../components/TaskForm/TaskForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import TaskType from '../types/TaskType';
import generateId from '../utils/generateId';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [description, setDescription] = useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [valid, setValid] = useState<boolean>(false);

  useEffect(() => {
    description.length >= 3 ? setValid(true) : setValid(false);
  }, [description]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addTask = () => {
    // if (tasks.length) {
    setTasks([...tasks, { id: generateId(), description: description }]);
    setDescription('');
    setOpen(true);
    // }
  };

  return (
    <React.Fragment>
      {/* Alert Component Start */}
      <Collapse
        in={open}
        style={{
          margin: 0,
          padding: 0,
          position: 'absolute',
          zIndex: 999,
          top: 5,
          right: 5
        }}
      >
        <Alert
          severity="success"
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2 }}
        >
          Recado adicionado com sucesso!
        </Alert>
      </Collapse>
      {/* Alert Component End */}

      <Grid
        container
        style={{
          height: '100vh',
          backgroundImage: 'url(https://source.unsplash.com/random)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          padding: '1.5rem'
        }}
      >
        <Container
          maxWidth="xl"
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <AppBar />
          <Grid
            item
            xl={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              color: 'text.primary',
              maxWidth: '30%',
              padding: '1rem',
              margin: '1rem',
              borderRadius: '.5rem'
            }}
          >
            {/* <TaskForm /> */}
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
              value={description}
              onChange={e => handleSetDescription(e)}
            />
            <Button variant="contained" fullWidth onClick={addTask} disabled={!valid}>
              Cadastrar
            </Button>
          </Grid>
          <Grid
            item
            xl={12}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '1rem'
            }}
          >
            {tasks.map(item => {
              return (
                <Box
                  key={item.id}
                  style={{
                    width: '30em',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                    padding: '.5rem',
                    marginBottom: '1rem',
                    borderRadius: '.5rem'
                  }}
                >
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Typography variant="body1" padding={'.5rem 1rem'}>
                      {item.description}
                    </Typography>
                    <Button>
                      <EditIcon />
                    </Button>
                    <Button>
                      <DeleteIcon />
                    </Button>
                  </Box>
                </Box>
              );
            })}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
