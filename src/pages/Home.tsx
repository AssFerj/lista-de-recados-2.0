import { Box, Button, Container, Grid, TextField, Typography } from '@mui/material';
import React, { useEffect, useMemo, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import TaskType from '../types/TaskType';
import generateId from '../utils/generateId';
import AlertComponent from '../components/AlertComponent/AlertComponent';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { addTask, removeTask, selectAll, selectById, updateTask } from '../store/modules/tasksSlice';
import EditDialog from '../components/Dialog/EditDialog';
import DeleteDialog from '../components/Dialog/DeleteDialog';

const Home: React.FC = () => {
  const [description, setDescription] = useState<string>('');
  const [editedDescription, setEditedDescription] = useState<string>('');

  const [open, setOpen] = React.useState(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  // const [typeAlert, setTypeAlert] = useState<string>('add' | 'edit' | 'delete');

  const [valid, setValid] = useState<boolean>(false);

  const [openEditConfirm, setOpenEditConfirm] = React.useState(false);
  const [openDeleteConfirm, setOpenDeleteConfirm] = React.useState(false);

  const [taskToEdit, setTaskToEdit] = useState({} as TaskType);
  const [taskRemove, setTaskRemove] = useState({} as TaskType);
  const TasksRedux = useAppSelector(selectAll);
  const dispatch = useAppDispatch();

  // const ClickOpenEditConfirm = () => {
  //   setOpenEditConfirm(true);
  // };

  const CloseEditConfirm = () => {
    setOpenEditConfirm(false);
  };

  const CloseDeleteConfirm = () => {
    setOpenDeleteConfirm(false);
  };

  useEffect(() => {
    description.length >= 3 ? setValid(true) : setValid(false);
  }, [description]);

  const listTasks = useMemo(() => {
    return TasksRedux?.map(item => {
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
  }, [TasksRedux]);

  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleAddTask = () => {
    const newTask: TaskType = { id: generateId(), description: description };
    dispatch(addTask(newTask));
    setDescription('');
    setOpen(true);
    setShowAlert(true);
  };

  const handleEditTask = (itemEdit: TaskType) => {
    // const item = useAppSelector(state => selectById(state, itemEdit.id));
    const itemRedux = TasksRedux.find(item => item.id === itemEdit.id);
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setTaskToEdit(itemRedux!);
    setOpenEditConfirm(true);
  };

  const handleDeleteTask = (taskRemove: TaskType) => {
    setOpenDeleteConfirm(true);
    setTaskRemove(taskRemove);
    dispatch(removeTask(taskRemove.id));
    setOpen(true);
    setShowAlert(false);
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
            {/* <DeleteDialog
              title={'Tem certeza que quer excluir esse recado?'}
              cancelText="Cancelar"
              confirmText="Excluir"
              itemDescription={taskRemove?.description}
              openDeleteConfirm={openDelteConfirm}
              actionCloseDeleteConfirm={CloseDelteConfirm}
              actionDeleteTask={() => handleDeleteTask(taskRemove)}
            /> */}
            <EditDialog
              title={'Tem certeza que quer editar esse recado?'}
              cancelText="Cancelar"
              confirmText="Editar"
              itemDescription={taskToEdit?.description}
              openEditConfirm={openEditConfirm}
              actionCloseEditConfirm={CloseEditConfirm}
              actionEditTask={() => handleEditTask(taskToEdit)}
            />
            {listTasks}
          </Grid>
        </Container>
      </Grid>
    </React.Fragment>
  );
};

export default Home;
