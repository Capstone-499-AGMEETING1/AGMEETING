import React, {useState,} from 'react'
import EventSetting from './EventSetting';
import { Box, Button, Container, Divider, Grid, Tab, Tabs, Typography } from '@mui/material';
import useSettings from '../../../hooks/useSettings';
import CheckIcon from '../../../icons/Check';
import ExclamationIcon from '../../../icons/Exclamation';
import Modal from './Modal'
import VoteSetting from './Voting'

const tabs = [
    { label: 'Event', value: 'Event' },
    { label: 'Voting', value: 'Voting' },
];

const Settings = () => {
    const { settings } = useSettings();
    const [currentTab, setCurrentTab] = useState('Event');// set initial tab, when the page loads
    const [isApplicationOpen, setIsApplicationOpen] = useState(false);

    const handleApplyModalOpen = () => {
        setIsApplicationOpen(true);
    };

    const handleApplyModalClose = () => {
        setIsApplicationOpen(false);
    };

    const handleTabsChange = (event, value) => {
        setCurrentTab(value);
    };

    return (
        <>

            <Box
                sx={{
                    backgroundColor: 'background.default',
                    minHeight: '100%',
                    py: 5
                }}
            >
                <Container maxWidth={settings.compact ? 'xl' : false}>
                    <Grid
                        container
                        justifyContent="space-between"
                        spacing={3}
                    >
                        <Grid item>
                            <Typography
                                color="textPrimary"
                                variant="h5"
                            >
                                {/* {project.title} */}
                                General Settings
                            </Typography>
                            <Box
                                sx={{
                                    alignItems: 'center',
                                    color: 'text.secondary',
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    mb: -2,
                                    mx: -2
                                }}
                            >
                                <Box
                                    sx={{
                                        alignItems: 'center',
                                        display: 'flex',
                                        m: 2
                                    }}
                                >
                                </Box>
                            </Box>
                        </Grid>
                        <Grid item>
                            <Box sx={{ m: -1 }}>
                                <Button
                                    color="primary"
                                    startIcon={<ExclamationIcon fontSize="small" />}
                                    sx={{ m: 1 }}
                                    variant="outlined"
                                >
                                    Cancel
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={handleApplyModalOpen}
                                    startIcon={<CheckIcon fontSize="small" />}
                                    sx={{ m: 1 }}
                                    variant="contained"
                                >
                                    Apply Settings
                                </Button>
                            </Box>
                        </Grid>
                    </Grid>
                    <Box sx={{ mt: 3 }}>
                        <Tabs
                            indicatorColor="primary"
                            onChange={handleTabsChange}
                            scrollButtons="auto"
                            textColor="primary"
                            value={currentTab}
                            variant="scrollable"
                        >
                            {tabs.map((tab) => (
                                <Tab
                                    key={tab.value}
                                    label={tab.label}
                                    value={tab.value}
                                />
                            ))}
                        </Tabs>
                    </Box>
                    <Divider/>
                    <Box sx={{ mt: 3 }}>
                        {currentTab === 'Event'
                            && <EventSetting />
                        }
                        {currentTab === 'Voting'
                            && <VoteSetting />
                        }
                    </Box>
                </Container>
            </Box>
            <Modal
                onApply={handleApplyModalClose}
                onClose={handleApplyModalClose}
                open={isApplicationOpen}
            />
        </>
    );
};

export default Settings;


