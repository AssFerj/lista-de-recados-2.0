import { Alert, Button, Collapse, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import CloseIcon from '@mui/icons-material/Close';
import TaskType from '../types/TaskType';
import generateId from '../utils/generateId';
import ListingTasks from '../components/ListingTasks/ListingTasks';
import TaskForm from '../components/TaskForm/TaskForm';
import ConfirmDialog from '../components/ConfirmDialog/ConfirmDialog';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [description, setDescription] = useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [valid, setValid] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [idRemove, setIdRemove] = useState<number | undefined>();

  const ClickOpenConfirm = (id: number) => {
    setOpenConfirm(true);
    setIdRemove(id);
  };

  const CloseConfirm = () => {
    setOpenConfirm(false);
  };

  useEffect(() => {
    description.length >= 3 ? setValid(true) : setValid(false);
  }, [description]);

  const listTasks = useMemo(() => {
    return tasks.map(item => {
      return (
        <ListingTasks key={item.id} description={item.description} actionConfirm={() => ClickOpenConfirm(item.id)} />
      );
    });
  }, [tasks]);

  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addTask = () => {
    setTasks([...tasks, { id: generateId(), description: description }]);
    setDescription('');
    setOpen(true);
  };

  const deleteTask = () => {
    const index = tasks.findIndex(item => item.id === idRemove);
    if (index !== -1) {
      setTasks(prevState => {
        prevState.splice(index, 1);
        return [...prevState];
      });
    }
    setOpenConfirm(false);
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
          bottom: 5,
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
            {/* <TaskForm title='Cadastrar Tarefas' description={description} buttonText='Cadastrar' actionSetDescription={e => handleSetDescription(e)} actionAddTask={addTask} /> */}
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
            {/* <Dialog
              open={openConfirm}
              onClose={CloseConfirm}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">{'Tem certeza que quer excluir esse recado?'}</DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  <Typography variant="body1">{}</Typography>
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={CloseConfirm}>Cancelar</Button>
                <Button onClick={deleteTask} autoFocus>
                  Excluir
                </Button>
              </DialogActions>
            </Dialog> */}
            <ConfirmDialog
              title={'Tem certeza que quer excluir esse recado?'}
              cancelText="Cancelar"
              confirmText="Excluir"
              openConfirm={openConfirm}
              actionCloseConfirm={CloseConfirm}
              actionDeleteTask={deleteTask}
            />
            {listTasks}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
