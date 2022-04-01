import React, { useState, Component } from 'react';
import PropTypes from 'prop-types';
import toast from 'react-hot-toast';
import { Box, Button, Dialog, TextField, Typography, Grid, Divider } from '@mui/material';
import { UploadFile } from "@mui/icons-material";
import axios from 'axios';
// import getInitials from '../../../utils/getInitials';

const AddFileModal = (props) => {
    const { onApply, onClose, open, ...other } = props;
    const [value, setValue] = useState('');

    const handleApply = () => {
        toast.success('Request sent!');
        if (onApply) {
            onApply();
        }
    };

    const [file, setFile] = useState()

    function handleChange(event) {
      setFile(event.target.files[0])
    }
    
    function handleSubmit(event) {
      event.preventDefault()
      const url = 'http://localhost:3000/uploadfile';
      const formData = new FormData();
      formData.append('myFile', file);
      formData.append('fileName', file.name);
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        },
      };
      axios.post(url, formData, config).then((response) => {
        console.log(response.data);
      })
      .catch(error => {
          console.log(error.response)
      });
  
    }

    return (
        <Dialog
            maxWidth="lg"
            onClose={onClose}
            open={open}
            {...other}
        >
            <Box sx={{ p: 3 }}>
                <Typography
                    align="center"
                    color="textPrimary"
                    gutterBottom
                    variant="h4"
                >
                    Add a File to the Vault
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <input
                            type="file"
                            onChange={handleChange}
                        />
                        <Button variant="contained" onClick={handleSubmit}>
                            <UploadFile /> Upload
                        </Button>
                    </Grid>
                </Grid>
            </Box>

        </Dialog>
    );
};

AddFileModal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default AddFileModal;
