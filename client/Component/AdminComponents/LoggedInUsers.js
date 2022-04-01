import React from 'react'
import numeral from 'numeral';
import { subDays, subHours } from 'date-fns';
import {
    Avatar,
    Box,
    Card,
    Checkbox,
    Divider,
    IconButton,
    InputAdornment,
    Link,
    CardHeader,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    TextField,
    Typography
} from '@mui/material'
import Scrollbar from '../../Scrollbar';
import ArrowRightIcon from '../../icons/ArrowRight';
import PencilAltIcon from '../../icons/PencilAlt';
import SearchIcon from '../../icons/Search';
import DotsHorizontalIcon from "../../icons/DotsHorizontal";
import axios from "axios";


const now = new Date();

const customers = [];

const populateData = (data) => {
    customers.push(data)
}

function axiosTest(populateData) {
    axios.get('http://localhost:3000/api/users/')
        .then(function (response) {
            populateData(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

axiosTest(populateData);
customers.flat(Infinity);

const sortOptions = [
    {
        label: 'Last update (newest)',
        value: 'updatedAt|desc'
    },
    {
        label: 'Last update (oldest)',
        value: 'updatedAt|asc'
    },
    {
        label: 'Total orders (highest)',
        value: 'orders|desc'
    },
    {
        label: 'Total orders (lowest)',
        value: 'orders|asc'
    }
];

const LoggedinUsers = () => (
    <Box
        sx={{
            backgroundColor: 'background.default',
            p: 3
        }}
    >
        <Card>
            <CardHeader
                action={
                    <IconButton>
                        <DotsHorizontalIcon/>
                    </IconButton>
                }
                title={
                    <Typography variant="h5">
                        Logged In Users
                    </Typography>
                }
            />
            <Divider/>
            <Box
                sx={{
                    alignItems: 'center',
                    display: 'flex',
                    flexWrap: 'wrap',
                    m: -1,
                    p: 2
                }}
            >
                <Box
                    sx={{
                        m: 1,
                        maxWidth: '100%',
                        width: 500
                    }}
                >
                    <TextField
                        fullWidth
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <SearchIcon fontSize="small" />
                                </InputAdornment>
                            )
                        }}
                        placeholder="Search users"
                        variant="outlined"
                    />
                </Box>
                <Box
                    sx={{
                        m: 1,
                        width: 240
                    }}
                >
                    <TextField
                        label="Sort By"
                        name="sort"
                        select
                        SelectProps={{ native: true }}
                        variant="outlined"
                    >
                        {sortOptions.map((option) => (
                            <option
                                key={option.value}
                                value={option.value}
                            >
                                {option.label}
                            </option>
                        ))}
                    </TextField>
                </Box>
            </Box>
            <Scrollbar>
                <Box sx={{ minWidth: 700 }}>
                <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell padding="checkbox">
                                    <Checkbox color="primary"/>
                                </TableCell>
                                <TableCell>
                                    Name
                                </TableCell>
                                <TableCell>
                                    Email
                                </TableCell>
                                <TableCell>
                                    Meeting ID
                                </TableCell>
                                <TableCell>
                                    Role
                                </TableCell>
                                <TableCell align="right">
                                    Actions
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {customers.flat().map((user) => (

                                <TableRow
                                    hover
                                    key={user.id}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox color="primary"/>
                                    </TableCell>
                                    <TableCell>
                                        <Box
                                            sx={{
                                                alignItems: 'center',
                                                display: 'flex'
                                            }}
                                        >
                                            <Avatar
                                                src={user.avatar}
                                                sx={{
                                                    height: 42,
                                                    width: 42
                                                }}
                                            />
                                            <Box sx={{ml: 1}}>
                                                <Link
                                                    color="inherit"
                                                    variant="subtitle2"
                                                >
                                                    {user.firstName + " " + user.lastName}
                                                </Link>

                                            </Box>
                                        </Box>
                                    </TableCell>
                                    <TableCell>
                                        {user.email}
                                    </TableCell>
                                    <TableCell>
                                        {user.meetingId}
                                    </TableCell>
                                    <TableCell>
                                        Role Pending
                                    </TableCell>
                                    <TableCell align="right">
                                        <IconButton>
                                            <PencilAltIcon fontSize="small"/>
                                        </IconButton>
                                        <IconButton>
                                            <ArrowRightIcon fontSize="small"/>
                                        </IconButton>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <TablePagination
                component="div"
                count={customers.length}
                onPageChange={() => {
                }}
                onRowsPerPageChange={() => {
                }}
                page={0}
                rowsPerPage={5}
                rowsPerPageOptions={[5, 10, 25]}
            />
        </Card>
    </Box>
);

export default LoggedinUsers;
