import { Alert, Box, Button, Collapse, Container, Grid, IconButton, TextField, Typography } from '@mui/material';
// import bg from "../images/home-bg.png";
import React, { useState } from 'react';
import AppBar from '../components/AppBar/AppBar';
// import TaskForm from '../components/TaskForm/TaskForm';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
// eslint-disable-next-line no-unused-vars
// import { themeDark, themeLight } from '../configs/Theme/Theme';

const Home: React.FC = () => {
  // const [theme, setTheme] = useState('light');
  const [description, setDescription] = useState<string>('');
  const [list, setList] = useState<string[]>([]);
  const [open, setOpen] = React.useState(false);

  const handleSetDescription = (e: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setDescription(e.currentTarget.value);
  };

  const addTask = () => {
    if (description.length) {
      setList([...list, description]);
      setOpen(true);
    }
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
              onChange={e => handleSetDescription(e)}
            />
            <Button variant="contained" fullWidth onClick={addTask}>
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
            {list.map(item => {
              // setTheme('light');
              return (
                <Box
                  key={item}
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
                      {item}
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
