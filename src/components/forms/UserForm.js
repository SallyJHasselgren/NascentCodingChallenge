import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { TextField } from '@mui/material';
import Button from '@mui/material/Button';


export default function UserForm() {

    const [user, setUser] = useState({
        firstName: "", 
        lastName: "",
        email: "",
        address: "",
        phoneNumber: ""
     });

      const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get('email'),
          password: data.get('password'),
        });
      };

      const changeHandler = e => {
        setUser({...user, [e.target.name]: e.target.value});
      }

    return (
        <div className="App">

            <Container component="main" maxWidth="xs">
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar alt="Nascent Logo" src="nascentLogo.jpeg" />
                    <Typography component="h1" variant="h5">
                        Nascent
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit}  sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="firstName" fullWidth label="First Name" name = "firstName" variant="outlined" onChange={changeHandler}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="lastName" fullWidth label="Last Name" name = "lastName" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="email" fullWidth label="Email" name = "email" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="phoneNumber" fullWidth label="Phone Number" name = "phoneNumber" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="address" fullWidth label="Address" name = "address" variant="outlined" onChange={changeHandler} />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }} variant="contained">Submit</Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}