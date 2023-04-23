import { Button, Container, Grid, Link, TextField, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
import AlertComponent from '../components/AlertComponent/AlertComponent';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { selectById, updateTask } from '../store/modules/tasksSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Copyright from '../components/Copyright/Copyright';

const Edit: React.FC = () => {
  const params = useParams();
  const [description, setDescription] = useState<string>('');
  const [open, setOpen] = React.useState(false);
  const [valid, setValid] = useState<boolean>(false);
  const TasksRedux = useAppSelector(state => selectById(state, params.id || ''));
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    description.length >= 3 ? setValid(true) : setValid(false);
  }, [description]);

  useEffect(() => {
    if (TasksRedux) {
      setDescription(TasksRedux.description);
    }
    console.log(params);
  }, [TasksRedux]);

  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const handleEditTask = () => {
    if (params.id) {
      dispatch(updateTask({ id: params.id, changes: { description } }));
      setOpen(true);
      navigate('/');
    }
  };

  return (
    <React.Fragment>
      <AlertComponent
        typeAlert="warning"
        message="Recado editado com sucesso!"
        actionShowAlert={open}
        actionShowAlertFc={() => {
          setOpen(false);
        }}
      />

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
            <Button variant="contained" fullWidth onClick={() => handleEditTask()} disabled={!valid}>
              Editar
            </Button>
          </Grid>
        </Container>
      </Grid>
      <Copyright />
    </React.Fragment>
  );
};

export default Edit;
