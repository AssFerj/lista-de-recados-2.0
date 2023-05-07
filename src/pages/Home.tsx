import { Box, Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import TaskType from '../types/TaskType';
import generateId from '../utils/generateId';
import AlertComponent from '../components/AlertComponent/AlertComponent';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { addTask, removeTask, selectAll } from '../store/modules/tasksSlice';
import DeleteDialog from '../components/Dialog/DeleteDialog';
import { useNavigate } from 'react-router-dom';
import Copyright from '../components/Copyright/Copyright';
import usersSlice, { selectByEmail } from '../store/modules/usersSlice';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [description, setDescription] = useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const [valid, setValid] = useState<boolean>(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);
  const [taskRemove, setTaskRemove] = useState({} as TaskType);
  // const TasksRedux = useAppSelector(selectAll);
  const logedUser = useAppSelector(state => state.userReducer);
  const dispatch = useAppDispatch();
  const user = useAppSelector(state => selectByEmail(state, logedUser.email));

  const CloseDeleteConfirm = () => {
    setOpenDeleteConfirm(false);
  };

  // useEffect(() => {
  //   if (!logedUser) {
  //     navigate('/');
  //   }
  // }, [logedUser]);

  useEffect(() => {
    description.length >= 3 ? setValid(true) : setValid(false);
  }, [description]);

  // useEffect(() => {
  //   if (logedUser) {
  //     const taskToList = logedUser.tasks.filter(task => task.userId === logedUser.email);
  //     console.log(taskToList);
  //     // setTasksOfLogedUser(taskToList);
  //   }
  // }, [tasksOfLogedUser]);

  // const listTasks = useMemo(() => {
  //   return TasksRedux?.map(item => {
  //     return (
  //       <Box
  //         key={item.id}
  //         style={{
  //           width: '30em',
  //           display: 'flex',
  //           justifyContent: 'center',
  //           alignItems: 'center',
  //           backgroundColor: '#fff',
  //           padding: '.5rem',
  //           marginBottom: '1rem',
  //           borderRadius: '.5rem'
  //         }}
  //       >
  //         <Box
  //           style={{
  //             display: 'flex',
  //             justifyContent: 'center',
  //             alignItems: 'center'
  //           }}
  //         >
  //           <Typography variant="body1" padding={'.5rem 1rem'}>
  //             {item.description}
  //           </Typography>
  //           <Button onClick={() => handleEditTask(item)}>
  //             <EditIcon />
  //           </Button>
  //           <Button onClick={() => handleDeleteTask(item)}>
  //             <DeleteIcon />
  //           </Button>
  //         </Box>
  //       </Box>
  //     );
  //   });
  // }, [TasksRedux]);

  const listTasksOfLogedUser = useMemo(() => {
    return logedUser.tasks?.map(item => {
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
            <Button onClick={() => handleEditTask(item)}>
              <EditIcon />
            </Button>
            <Button onClick={() => handleDeleteTask(item)}>
              <DeleteIcon />
            </Button>
          </Box>
        </Box>
      );
    });
  }, [logedUser]);

  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleAddTask = () => {
    const newTask: TaskType = { id: generateId(), description: description, userId: logedUser.email };

    // const taskOfLogedUser = logedUser.tasks.push(newTask);

    // console.log(taskOfLogedUser);
    console.log(newTask);

    //Verificar essa validação
    if (newTask.userId === logedUser.email) {
      user?.tasks.push(newTask);
    }
    console.log(user);

    dispatch(addTask(newTask));
    setDescription('');
    setOpen(true);
    setShowAlert(true);
  };

  const handleEditTask = (itemEdit: TaskType) => {
    navigate(`/editar/${itemEdit.id}`);
  };

  const handleDeleteTask = (taskRemove: TaskType) => {
    setOpenDeleteConfirm(true);
    setTaskRemove(taskRemove);
  };

  const deleteTask = (taskRemove: TaskType) => {
    dispatch(removeTask(taskRemove.id));
    setOpenDeleteConfirm(false);
    setShowAlert(false);
    setOpen(true);
  };

  return (
    <React.Fragment>
      {showAlert === true ? (
        <AlertComponent
          typeAlert="success"
          message="Recado adicionado com sucesso!"
          actionShowAlert={open}
          actionShowAlertFc={() => {
            setOpen(false);
          }}
        />
      ) : (
        <AlertComponent
          typeAlert="error"
          message="Recado excluído com sucesso!"
          actionShowAlert={open}
          actionShowAlertFc={() => {
            setOpen(false);
          }}
        />
      )}

      <Grid
        container
        style={{
          height: '100vh',
          backgroundImage: 'url(/images/bg.png)',
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
            <Button variant="contained" fullWidth onClick={handleAddTask} disabled={!valid}>
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
              openDeleteConfirm={openDeleteConfirm}
              actionCloseDeleteConfirm={CloseDeleteConfirm}
              actionDeleteTask={() => deleteTask(taskRemove)}
            />
            {/* {TasksRedux.length ? (
              listTasks
            ) : (
              <Typography variant="body1" sx={{ padding: '.5rem', background: '#ffffff', borderRadius: '8px' }}>
                Ainda não há recados cadastrados!
              </Typography>
            )} */}
            {logedUser.tasks.length ? (
              listTasksOfLogedUser
            ) : (
              <Typography variant="body1" sx={{ padding: '.5rem', background: '#ffffff', borderRadius: '8px' }}>
                Ainda não há recados cadastrados!
              </Typography>
            )}
            {/* {listTasks} */}
          </Grid>
        </Container>
      </Grid>
      <Copyright />
    </React.Fragment>
  );
};

export default Home;
