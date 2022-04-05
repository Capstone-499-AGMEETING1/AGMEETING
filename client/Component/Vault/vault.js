import React, { useState } from 'react'
import numeral from 'numeral';
import { format, subMinutes, subSeconds } from 'date-fns';
import {
    Box,
    Button,
    Card,
    CardHeader,
    Checkbox,
    Divider,
    Grid,
    IconButton,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material'
import Label from '../../Label';
import Scrollbar from '../../Scrollbar';
import ArrowRightIcon from '../../icons/ArrowRight';
import PencilAltIcon from '../../icons/PencilAlt';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import { UploadFile } from "@mui/icons-material";
import AddFileModal from './AddFileModal';
import VaultHelpModal from "./VaultHelpModal";
import { useSelector } from "react-redux";

const now = new Date();

const orders = [
    {
        id: '5ecb8a6d9f53bfae09e16115',
        createdAt: subMinutes(subSeconds(now, 23), 32).getTime(),
        currency: '',
        customer: {
            email: 'carson.darrin@devias.io',
            name: 'Carson Darrin'
        },
        number: 'DEV-102',
        paymentMethod: 'PDF',
        status: 'pending',
        totalAmount: 500.00
    },
    {
        id: '5ecb8a738aa6f3e577c2b3ec',
        createdAt: subMinutes(subSeconds(now, 51), 36).getTime(),
        currency: '',
        customer: {
            email: 'fran.perez@devias.io',
            name: 'Fran Perez'
        },
        number: 'DEV-101',
        paymentMethod: 'DOC',
        status: 'completed',
        totalAmount: 500.00
    },

];

const getStatusLabel = (paymentStatus) => {
    const map = {
        canceled: {
            color: 'error',
            text: 'Canceled'
        },
        completed: {
            color: 'success',
            text: 'Completed'
        },
        pending: {
            color: 'warning',
            text: 'Pending'
        },
        rejected: {
            color: 'error',
            text: 'Rejected'
        }
    };
    const { text, color } = map[paymentStatus];
    return (
        <Label color={color}>
            {text}
        </Label>
    );
};

const Vault = () => {

    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    const handleApplyModalOpen = () => {
        setIsApplicationOpen(true);
    };

    const handleApplyModalClose = () => {
        setIsApplicationOpen(false);
    };

    const [isHelpApplicationOpen, setIsHelpApplicationOpen] = useState(false);
    const handleApplyHelpModalOpen = () => {
        setIsHelpApplicationOpen(true);
    };

    const handleApplyHelpModalClose = () => {
        setIsHelpApplicationOpen(false);
    };

    const { user } = useSelector((state) => state.auth);
    const showModal = () => {
        if (user && user.isModerator) {
            return (
                <Button
                    color="primary"
                    onClick={handleApplyModalOpen}
                    startIcon={<UploadFile fontSize="small" />}
                    sx={{
                        ml: 2
                    }}
                    variant="contained"
                    size="small"
                >
                    Add File
                </Button>
            )
        }
        else return (
            null
        );
    }

    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                p: 3
            }}
        >
            <Card>
                <CardHeader
                    action={(
                        <IconButton
                            onClick={handleApplyHelpModalOpen}
                        >
                            <HelpOutlineIcon fontSize="small" />
                        </IconButton>
                    )}
                    title={(
                        <Grid container>
                            <Grid>
                                <Typography variant="title2">Vault</Typography>
                            </Grid>
                            <Grid>

                                {showModal()}
                                
                            </Grid>
                        </Grid>
                    )}
                />
                <Divider />
                <Scrollbar>
                    <Box sx={{ minWidth: 1150 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell padding="checkbox">
                                    </TableCell>
                                    <TableCell>
                                        Number
                                    </TableCell>
                                    <TableCell>
                                        File Name
                                    </TableCell>
                                    <TableCell>
                                        Type
                                    </TableCell>
                                    <TableCell>
                                        Size
                                    </TableCell>
                                    <TableCell>
                                        Status
                                    </TableCell>
                                    <TableCell align="right">
                                        Actions
                                    </TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {orders.map((order) => (
                                    <TableRow
                                        hover
                                        key={order.id}
                                    >
                                        <TableCell padding="checkbox">
                                            <Checkbox color="primary" />
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.number}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                {format(order.createdAt, 'dd MMM yyyy | HH:mm')}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            <Typography
                                                color="textPrimary"
                                                variant="subtitle2"
                                            >
                                                {order.customer.name}
                                            </Typography>
                                            <Typography
                                                color="textSecondary"
                                                variant="body2"
                                            >
                                                {order.customer.email}
                                            </Typography>
                                        </TableCell>
                                        <TableCell>
                                            {order.paymentMethod}
                                        </TableCell>
                                        <TableCell>
                                            {numeral(order.totalAmount)
                                                .format(`${order.currency}0,0.00`)}
                                        </TableCell>
                                        <TableCell>
                                            {getStatusLabel(order.status)}
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton>
                                                <PencilAltIcon fontSize="small" />
                                            </IconButton>
                                            <IconButton>
                                                <ArrowRightIcon fontSize="small" />
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
                    count={orders.length}
                    onPageChange={() => {
                    }}
                    onRowsPerPageChange={() => {
                    }}
                    page={0}
                    rowsPerPage={5}
                    rowsPerPageOptions={[5, 10, 25]}
                />
                <AddFileModal
                    onApply={handleApplyModalClose}
                    onClose={handleApplyModalClose}
                    open={isApplicationOpen}
                />
                <VaultHelpModal
                    onApply={handleApplyHelpModalClose}
                    onClose={handleApplyHelpModalClose}
                    open={isHelpApplicationOpen}
                />
            </Card>
        </Box>
    )
};

export default Vault;