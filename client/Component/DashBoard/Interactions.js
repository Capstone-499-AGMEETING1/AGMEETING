import React, {useState} from "react";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import Grid from "@mui/material/Grid";
import CloseIcon from '@mui/icons-material/Close';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Dialog,
    Divider,
    IconButton, Typography
} from "@mui/material";

const Modal = (props) => {
    const {authorAvatar, authorName, onApply, onClose, open, ...other} = props;
    const [value, setValue] = useState("");
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleApply = () => {
        toast.success("Request sent!");

        if (onApply) {
            onApply();
        }
    };

    return (
        <Dialog maxWidth="md" onClose={onClose} open={open} {...other}>
            <Box sx={{p: 3}}>
                <Card>
                    <CardHeader
                        action={
                            <Grid container>
                                <Grid item>
                                    <IconButton>
                                        <HelpOutlineIcon/>
                                    </IconButton>
                                </Grid>
                                <Grid item>
                                    <IconButton onClick={onClose}>
                                        <CloseIcon/>
                                    </IconButton>
                                </Grid>
                            </Grid>
                        }
                        title={
                            <Typography variant="h5">
                                Interactions
                            </Typography>
                        }
                    />
                    <Divider/>
                    <Box sx={{flexGrow: 1}} sx={{ p: 2, pr: 6 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <Button variant="contained" fullWidth sx={{ mx: 2 }}>
                                    Motion Item
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" fullWidth sx={{ mx: 2 }}>
                                    Second Item
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider variant='fullWidth'/>
                            </Grid>

                            <Grid item xs={6}>
                                <Button variant="contained" fullWidth color="success" sx={{ mx: 2 }}>
                                    Comment FOR
                                </Button>
                            </Grid>
                            <Grid item xs={6}>
                                <Button variant="contained" fullWidth color="error" sx={{ mx: 2 }}>
                                    Comment AGAINST
                                </Button>
                            </Grid>
                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth color="warning" sx={{ mx: 2 }}>
                                    Withdraw Comment
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider variant='fullWidth'/>
                            </Grid>

                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="info" sx={{ mx: 2, px:-5 }}>
                                    Point of Information
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="info" sx={{ mx: 2 }}>
                                    Point of Privilege
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="info" sx={{ mx: 2 }}>
                                    Point of Order
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="info" sx={{ mx: 2 }}>
                                    Recess
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="info" sx={{ mx: 2 }}>
                                    Table
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="info" sx={{ mx: 2 }}>
                                    Amend
                                </Button>
                            </Grid>

                            <Grid item xs={12}>
                                <Divider variant='fullWidth'/>
                            </Grid>

                            <Grid item xs={12}>
                                <Button variant="contained" fullWidth sx={{ mx: 2 }}>
                                    Ready to Vote
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="success" sx={{ mx: 2 }}>
                                    Vote YES
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="error" sx={{ mx: 2 }}>
                                    Vote NO
                                </Button>
                            </Grid>
                            <Grid item xs={4}>
                                <Button variant="contained" fullWidth color="warning" sx={{ mx: 2 }}>
                                    Abstain
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
            </Box>
        </Dialog>
    );
};

Modal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired,
};

export default Modal;
