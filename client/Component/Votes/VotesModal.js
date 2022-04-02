import React from 'react';
import PropTypes from 'prop-types';
import {Box, Card, CardHeader, Dialog, Divider, IconButton, Typography, useTheme} from '@mui/material';
import DotsHorizontalIcon from "../../icons/DotsHorizontal";
import Chart from "react-apexcharts";

const data = {
    series: [
        {
            color: '#169BE0',
            data: 56,
            name: 'VOTED YES'
        },
        {
            color: '#DB9846',
            data: 24,
            name: 'VOTED NO'
        },
        {
            color: '#FF5C7C',
            data: 20,
            name: 'ABSTAINS'
        }
    ]
};

const VotesModal = (props) => {
    const {onClose, open, ...other} = props;

    const theme = useTheme();

    const chartOptions = {
        chart: {
            background: 'transparent',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: data.series.map((item) => item.color),
        dataLabels: {
            enabled: false
        },
        labels: data.series.map((item) => item.name),
        legend: {
            show: false
        },
        stroke: {
            show: false
        },
        theme: {
            mode: theme.palette.mode
        }
    };

    const chartSeries = data.series.map((item) => item.data);


    return (
        <Dialog
            maxWidth="lg"
            onClose={onClose}
            open={open}
            {...other}
        >
            <Box
                sx={{
                    backgroundColor: 'background.default',
                    p: 3
                }}
            >
                <Card>
                    <CardHeader
                        action={(
                            <IconButton>
                                <DotsHorizontalIcon fontSize="small" />
                            </IconButton>
                        )}
                        title={
                            <Typography variant="h5">
                                Current Votes
                            </Typography>
                        }
                    />
                    <Divider />
                    <Box sx={{
                        p: 2,
                        pl: 15,
                        pr: 15
                    }}>
                        <Chart
                            height="300"
                            options={chartOptions}
                            series={chartSeries}
                            type="donut"
                        />
                    </Box>
                    <Divider />
                    <Box sx={{ display: 'flex' }}>
                        {data.series.map((item) => (
                            <Box
                                key={item.name}
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    flexGrow: 1,
                                    justifyContent: 'center',
                                    px: 2,
                                    py: 3,
                                    textAlign: 'center',
                                    '&:not(:last-of-type)': {
                                        borderRight: 1,
                                        borderColor: 'divider'
                                    }
                                }}
                            >
                                <Typography
                                    color="textPrimary"
                                    variant="h4"
                                >
                                    {item.data}
                                    %
                                </Typography>
                                <Typography
                                    color="textSecondary"
                                    variant="overline"
                                >
                                    {item.name}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Card>
            </Box>
        </Dialog>

    );
};

VotesModal.propTypes = {
    onApply: PropTypes.func,
    onClose: PropTypes.func,
    open: PropTypes.bool.isRequired
};

export default VotesModal;