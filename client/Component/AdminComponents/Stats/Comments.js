import React from 'react'
import Chart from 'react-apexcharts';
import {
    Avatar,
    Box,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Divider,
    Grid,
    Paper,
    Typography,
    Link,
    IconButton
} from '@mui/material'
import { alpha, useTheme } from '@mui/material'
import ArrowRightIcon from '../../../icons/ArrowRight';
import ChevronDownIcon from '../../../icons/ChevronDown';
import ChevronUpIcon from '../../../icons/ChevronUp';
import DotsHorizontalIcon from '../../../icons/DotsHorizontal'

const connections = [
    {
        id: '5e887ac47eed253091be10cb',
        avatar: '/static/mock-images/avatars/avatar-carson_darrin.png',
        commonConnections: 'I believe Smith should be the moderator because he has good experience in doing it last year and did a good job.',
        name: 'Carson Darrin',
        status: 'Rejected'
    },
    {
        id: '5e887b209c28ac3dd97f6db5',
        avatar: '/static/mock-images/avatars/avatar-fran_perez.png',
        commonConnections: 'The point brought up is a good one',
        name: 'Fran Perez',
        status: 'Pending'
    },
    {
        id: '5e86805e2bafd54f66cc95c3',
        avatar: '/static/mock-images/avatars/avatar-miron_vitold.png',
        commonConnections: 'The new graphic proposed has little relevancy to the current project',
        name: 'Miron Vitold',
        status: 'Accepted'
    }
];

const CommentsList = () => (
    <Box
        sx={{
            backgroundColor: 'background.default',
            minHeight: '100%',
            p: 3,
            mt: 1
        }}
    >
        <Grid
            container
            spacing={3}
        >
            {connections.map((connection) => (
                <Grid
                    item
                    key={connection.id}
                    xs={12}
                >
                    <Paper variant="outlined">
                        <Box
                            sx={{
                                alignItems: 'center',
                                display: 'flex',
                                p: 2
                            }}
                        >
                            <Avatar
                                src={connection.avatar}
                                sx={{
                                    height: 60,
                                    width: 60
                                }}
                            />
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    mx: 2
                                }}
                            >
                                <Link
                                    color="textPrimary"
                                    variant="title2"
                                >
                                    {connection.name}
                                </Link>
                                <Typography
                                    color="textSecondary"
                                    gutterBottom
                                    variant="body2"
                                >
                                    {connection.commonConnections}
                                </Typography>
                                <Button
                                    color="primary"
                                    size="small"
                                    variant="outlined"
                                >
                                    {connection.status}
                                </Button>
                            </Box>
                            <IconButton>
                                <DotsHorizontalIcon fontSize="small"/>
                            </IconButton>
                        </Box>
                    </Paper>
                </Grid>
            ))}
        </Grid>
    </Box>
);

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
            <Card>
                <CardHeader
                    title={
                        <Typography variant="h5">
                            Current Comments
                        </Typography>
                    }
                />
                <Divider/>
                <Grid
                    container
                    spacing={3}
                >
                    <Grid
                        item
                        md={6}
                        xs={12}
                    >
                        <Card sx={{
                            border: 'none',
                            boxShadow: 'none',
                            mb: 1
                        }}>
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
                                            sx={{mt: 1}}
                                            variant="subtitle2"
                                        >
                                            Comments For
                                        </Typography>
                                    </Box>
                                    <Box sx={{flexGrow: 1}}/>
                                    <Avatar
                                        sx={{
                                            backgroundColor: alpha(theme.palette.success.main, 0.08),
                                            color: 'success.main'
                                        }}
                                        variant="rounded"
                                    >
                                        <ChevronUpIcon fontSize="small"/>
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
                        <Card sx={{
                            border: 'none',
                            boxShadow: 'none',
                            mb: 1
                        }}
                        >
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
                                            sx={{mt: 1}}
                                            variant="subtitle2"
                                        >
                                            Comments Against
                                        </Typography>
                                    </Box>
                                    <Box sx={{flexGrow: 1}}/>
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
                            <Divider/>
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
            </Card>
            <CommentsList/>
        </Box>
    );
};

export default Comments;
