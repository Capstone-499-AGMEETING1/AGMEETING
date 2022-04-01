import React from 'react'
import numeral from 'numeral';
import {
    Box,
    Card,
    CardHeader,
    Divider,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TablePagination,
    TableRow,
    Typography
} from '@mui/material';
import Scrollbar from '../../../Scrollbar';

const orderItems = [
    {
        id: '5ecb8abbdd6dfb1f9d6bf98b',
        votes: '12',
        name: 'Chuck Norris',
        percentage: '%60'
    },
    {
        id: '5ecb8ac10f116d04bed990eb',
        votes: '8',
        name: 'Jason Bourne',
        percentage: '%40'
    }
];

const ApprovalTable = () => (
    <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3
        }}
    >
        <Card>
            <CardHeader title="Intro and Approval of the Chair Voting Session"/>
            <Divider/>
            <Scrollbar>
                <Box sx={{minWidth: 700}}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    Candidate Name
                                </TableCell>
                                <TableCell>
                                    Votes
                                </TableCell>
                                <TableCell>
                                    Percentage
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {orderItems.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell>
                                        <Typography
                                            color="textPrimary"
                                            variant="subtitle2"
                                        >
                                            {item.name}
                                        </Typography>
                                    </TableCell>
                                    <TableCell>
                                        {item.votes}
                                    </TableCell>
                                    <TableCell>
                                        <Typography
                                            color="textPrimary"
                                            variant="subtitle2"
                                        >
                                            {item.percentage}
                                        </Typography>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Box>
            </Scrollbar>
            <TablePagination
                component="div"
                count={orderItems.length}
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

export default ApprovalTable;
