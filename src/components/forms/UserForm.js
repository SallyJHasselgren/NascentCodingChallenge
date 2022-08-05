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
import UserFormReviewModal from '../Modal/UserFormReviewModal';


export default function UserForm() {
    const [pokData, setPokData] = useState([]);

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phoneNumber: "",
        pokemonOption: null,
    });


    const [openReviewModal, setOpenReviewModal] = React.useState(false);

    const reviewModalOpen = (e) => {

        e.preventDefault();
        try {
            validateEmail(user.email);
            validatePhonenumber(user.phoneNumber);
            setOpenReviewModal(true);

        }
        catch (err) {
            console.log(err.message);
            appcontext.newAlert(err.message, "error");
        }

    }

    const reviewModalClose = () => setOpenReviewModal(false);

    // Get all the pokemon data
    const getPokData = async () => {
        const data = await getPokemon();
        setPokData(data.data.results);
    }

    const appcontext = useApp();

    const handleSubmit = () => {
        try {
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                phoneNumber: "",
                pokemonOption: null,
            });
        
            reviewModalClose();
            appcontext.newAlert("Form submitted succesfully", "success");

            console.log(user);
        }
        catch (err) {
            console.log(err.message);
            appcontext.newAlert(err.message, "error");
        }
    };

    const changeHandlerSelect = (value, e) => {
        if (value) { 
            setUser({...user, pokemonOption: {name: value.name, url: value.url}}); 
        }
        else{
            setUser({...user, pokemonOption: null}); 
        }
    }

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
    }, [])

    return (

        <div className="App">

            <UserFormReviewModal submit={handleSubmit} open={openReviewModal} close={reviewModalClose}></UserFormReviewModal>

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
                    <Box sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField required autoComplete='off' id="firstName" fullWidth label="First Name" name="firstName" variant="outlined" value={user.firstName} onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField required id="lastName" autoComplete='off' fullWidth label="Last Name" name="lastName" variant="outlined" value={user.lastName} onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="email" autoComplete='off' fullWidth label="Email" name="email" variant="outlined" value={user.email} onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="phoneNumber" autoComplete='off' fullWidth label="Phone Number" name="phoneNumber" value={user.phoneNumber} variant="outlined" onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField required id="address" autoComplete='off' fullWidth label="Address" name="address" variant="outlined" value={user.address} onChange={changeHandler} />
                            </Grid>
                            <Grid item xs={12}>
                                <Autocomplete
                                    disablePortal
                                    id="combo-box-demo"
                                    getOptionLabel={(option) => (option ? option.name : "")}
                                    options={pokData}
                                    value={user.pokemonOption || null}
                                    name="pokemonOption"
                                    onChange={(event, value) => changeHandlerSelect(value)}
                                    isOptionEqualToValue={(option, value) => option.name === value.name}
                                    fullWidth
                                    renderInput={(params) => <TextField{...params} label="Pokemon" />}
                                />
                            </Grid>
                        </Grid>
                        <Button fullWidth sx={{ mt: 3, mb: 2 }} variant="contained" onClick={reviewModalOpen} disabled={!(user.firstName && user.lastName && user.phoneNumber && user.email && user.address && user.pokemonOption)}>Submit</Button>
                    </Box>
                </Box>
            </Container>
        </div>
    );
}