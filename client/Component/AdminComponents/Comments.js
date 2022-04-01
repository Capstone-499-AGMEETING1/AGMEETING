import React from 'react'
import Chart from 'react-apexcharts';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    Divider,
    Grid,
    Typography
} from '@mui/material'
import {alpha, useTheme} from '@mui/material'
import ArrowRightIcon from '../../icons/ArrowRight';
import ChevronDownIcon from '../../icons/ChevronDown';
import ChevronUpIcon from '../../icons/ChevronUp';

// Why is this here? It is the same as the comments.js in the stats folder...

const Comments = () => {
    const theme = useTheme();

    const chartOptions = {
        chart: {
            background: 'transparent',
            stacked: false,
            toolbar: {
                show: false
            }
        },
        colors: ['#27c6db'],
        labels: [''],
        plotOptions: {
            radialBar: {
                dataLabels: {
                    value: {
                        show: false
                    }
                },
                hollow: {
                    size: '60%'
                },
                track: {
                    background: theme.palette.background.default
                }
            }
        },
        theme: {
            mode: theme.palette.mode
        }
    };

    const chartSeries = [83];

    return (
        <Box
            sx={{
                backgroundColor: 'background.default',
                p: 3
            }}
        >
            <Grid
                container
                spacing={3}
            >
                <Grid item xs="12">
                    <Typography
                        color="textPrimary"
                        variant="h5"
                    >
                        Current Comments
                    </Typography>
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                    <Card>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex'
                            }}
                        >
                            <Chart
                                height="160"
                                options={chartOptions}
                                series={chartSeries}
                                type="radialBar"
                                width="160"
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flex: 1
                                }}
                            >
                                <Box>
                                    <Typography
                                        color="primary"
                                        variant="h4"
                                    >
                                        %60
                                    </Typography>
                                    <Typography
                                        color="textPrimary"
                                        sx={{ mt: 1 }}
                                        variant="subtitle2"
                                    >
                                        Comments For
                                    </Typography>
                                </Box>
                                <Box sx={{ flexGrow: 1 }} />
                                <Avatar
                                    sx={{
                                        backgroundColor: alpha(theme.palette.success.main, 0.08),
                                        color: 'success.main'
                                    }}
                                    variant="rounded"
                                >
                                    <ChevronUpIcon fontSize="small" />
                                </Avatar>
                            </Box>
                        </CardContent>
                        <Divider/>
                        <CardActions>
                            <Button
                                color="primary"
                                endIcon={<ArrowRightIcon fontSize="small" />}
                                variant="text"
                            >
                                Comments For
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid
                    item
                    md={6}
                    xs={12}
                >
                    <Card>
                        <CardContent
                            sx={{
                                alignItems: 'center',
                                display: 'flex'
                            }}
                        >
                            <Chart
                                height="160"
                                options={chartOptions}
                                series={chartSeries}
                                type="radialBar"
                                width="160"
                            />
                            <Box
                                sx={{
                                    display: 'flex',
                                    flex: 1
                                }}
                            >
                                <Box>
                                    <Typography
                                        color="textPrimary"
                                        variant="h4"
                                    >
                                        %40
                                    </Typography>
                                    <Typography
                                        color="textPrimary"
                                        sx={{ mt: 1 }}
                                        variant="subtitle2"
                                    >
                                        Comments Against
                                    </Typography>
                                </Box>
                                <Box sx={{ flexGrow: 1 }} />
                                <Avatar
                                    sx={{
                                        backgroundColor: alpha(theme.palette.error.main, 0.08),
                                        color: 'error.main'
                                    }}
                                    variant="rounded"
                                >
                                    <ChevronDownIcon fontSize="small"/>
                                </Avatar>
                            </Box>
                        </CardContent>
                        <Divider />
                        <CardActions>
                            <Button
                                color="primary"
                                endIcon={<ArrowRightIcon fontSize="small"/>}
                                variant="text"
                            >
                                Comments Against
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Comments;
