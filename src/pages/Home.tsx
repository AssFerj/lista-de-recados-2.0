import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import TaskType from '../types/TaskType';
import generateId from '../utils/generateId';
import ListingTasks from '../components/ListingTasks/ListingTasks';
import TaskForm from '../components/TaskForm/TaskForm';
import DeleteDialog from '../components/DeleteDialog/DeleteDialog';
import AlertComponent from '../components/AlertComponent/AlertComponent';

const Home: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [description, setDescription] = useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [valid, setValid] = useState<boolean>(false);
  const [openConfirm, setOpenConfirm] = React.useState(false);
  const [taskRemove, setTaskRemove] = useState<TaskType | undefined>();

  const ClickOpenConfirm = (itemRemove: TaskType) => {
    setOpenConfirm(true);
    setTaskRemove(itemRemove);
  };

  const CloseConfirm = () => {
    setOpenConfirm(false);
  };

  useEffect(() => {
    description.length >= 3 ? setValid(true) : setValid(false);
  }, [description]);

  const listTasks = useMemo(() => {
    return tasks.map(item => {
      return <ListingTasks key={item.id} description={item.description} actionConfirm={() => ClickOpenConfirm(item)} />;
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

  const showAlert = () => {
    setOpen(true);
    return (
      <AlertComponent
        typeAlert="error"
        message="Recado excluído com sucesso!"
        actionShowAlert={open}
        actionShowAlertFc={() => {
          setOpen(false);
        }}
      />
    );
  };

  const deleteTask = () => {
    // const dangerAlert = () => {
    //   setOpen(true);
    //   return (
    //     <AlertComponent
    //       typeAlert="error"
    //       message="Recado excluído com sucesso!"
    //       actionShowAlert={open}
    //       actionShowAlertFc={() => {
    //         setOpen(false);
    //       }}
    //     />
    //   );
    // };

    const index = tasks.findIndex(item => item.id === taskRemove?.id);
    if (index !== -1) {
      setTasks(prevState => {
        prevState.splice(index, 1);
        return [...prevState];
      });
    }
    setOpenConfirm(false);
    showAlert();
  };

  return (
    <React.Fragment>
      <AlertComponent
        typeAlert="success"
        message="Recado adicionado com sucesso!"
        actionShowAlert={open}
        actionShowAlertFc={() => {
          setOpen(false);
        }}
      />

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
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'start',
            marginTop: '5em'
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
            {/* <TaskForm
              title="Cadastrar Tarefas"
              description={description}
              buttonText="Cadastrar"
              actionSetDescription={e => handleSetDescription(e)}
              actionAddTask={addTask}
            /> */}
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
            <DeleteDialog
              title={'Tem certeza que quer excluir esse recado?'}
              cancelText="Cancelar"
              confirmText="Excluir"
              itemDescription={taskRemove?.description}
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
