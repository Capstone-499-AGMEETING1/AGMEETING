import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import axios from "axios";
import {toast} from "material-react-toastify";
import {useNavigate} from "react-router-dom";
import {Grid} from "@mui/material";
import {useState} from "react";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import {useDispatch, useSelector} from 'react-redux';
import {register} from "../actions/auth";


export default function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState(false);
    const [isModerator, setIsModerator] = useState(false);

    const handleAdminChanged = (event) => {
        setIsAdmin(event.target.checked);
    }

    const handleModeratorChanged = (event) => {
        setIsModerator(event.target.checked);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const firstName = data.get('firstName');
        const lastName = data.get('lastName');
        const email = data.get('email');
        const password = data.get('password');
        const password2 = data.get('password2');
        const meetingId = data.get('meetingId');

        if (password === password2) {
            dispatch(register(firstName, lastName, email, password, meetingId, isAdmin, isModerator)).then(() => {
                navigate('/login');
                toast.success('You have registered successfully.');
            });
        } else {
            toast.error('The passwords must match.');
        }
    };

    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                <LockOutlinedIcon/>
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1, ml: 6, mr: 6}}>
                <Grid container spacing={3}>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="firstName"
                            label="First Name"
                            type="text"
                            id="firstName"
                            autoComplete="firstName"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="lastName"
                            label="Last Name"
                            type="text"
                            id="lastName"
                            autoComplete="lastName"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password2"
                            label="Enter Password Again"
                            type="password"
                            id="password2"
                            autoComplete="current-password"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <FormControlLabel
                            control={<Checkbox checked={isAdmin} color="primary" onChange={handleAdminChanged}/>}
                            label="Admin"
                        />
                        <FormControlLabel
                            control={<Checkbox checked={isModerator} color="primary"
                                               onChange={handleModeratorChanged}/>}
                            label="Moderator"
                        />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            margin="normal"
                            fullWidth
                            name="meetingId"
                            label="Meeting Id"
                            type="text"
                            id="meetindId"
                            autoComplete="meetingId"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            type="submit"
                            href=""
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    );
}
