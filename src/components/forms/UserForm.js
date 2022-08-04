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
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { validateEmail, validatePhonenumber } from '../../utils/common';
import { useApp } from '../../utils/context';
import { useEffect } from 'react';
import { getPokemon } from '../../services/pokemonAPI';


export default function UserForm() {
    const [pokData, setPokData] = useState([]);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        pokemonOption: "",
    });

    // Get all the pokemon data
    const getPokData = async () => {
        const data = await getPokemon();
        setPokData(data.data.results);
    }

    const appcontext = useApp();

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            validateEmail(user.email);
            validatePhonenumber(user.phoneNumber);
            console.log(user)
        }
        catch (err) {
            console.log(err.message);
            appcontext.newAlert(err.message, "error");
        }
        //const data = new FormData(event.currentTarget);
        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });
    };

    // const changeHandlerSelect = e => {
    //     setUser({ pokemonOption, [e.target.name]})
    // }

    const changeHandler = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        try {
            getPokData();
        }
        catch (err) {
            console.log(err);
        }
    })

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
                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="firstName" fullWidth label="First Name" name="firstName" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="lastName" fullWidth label="Last Name" name="lastName" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="email" fullWidth label="Email" name="email" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="phoneNumber" fullWidth label="Phone Number" name="phoneNumber" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="address" fullWidth label="Address" name="address" variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    getOptionSelected={(option, value) => option.name === value.name}
                                    getOptionLabel={(option) => (option ? option.name : "")}
                                    options={pokData}
                                    fullWidth
                                    renderInput={(params) => <TextField{...params} name = "pokemonOption" onChange={changeHandler} label="Pokemon" />}
                                />
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth sx={{ mt: 3, mb: 2 }} variant="contained">Submit</Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}