import React, {useState, useEffect} from 'react';
import {Link as RouterLink, useLocation} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Box, Button, Divider, Drawer, Typography, useMediaQuery} from '@mui/material';
import Logo from '../../Logo';
import NavSection from '../../NavSection';
import Scrollbar from '../../Scrollbar';
import Modal from './Interactions'
import VotesModal from "../Votes/VotesModal";
import {AdminPanelSettings, Event, SettingsAccessibility, Summarize, Work} from '@material-ui/icons';
import ContentMessage from "./ContentMessage";
import {useSelector} from "react-redux";

const sections = [
    {
        title: 'General',
        items: [
            {
                title: 'Session',
                path: '/',
                icon: <Summarize fontSize="small"/>
            },
            {
                title: 'Agenda',
                path: '/agenda',
                icon: <Event fontSize="small"/>
            },
            {
                title: 'Vault',
                path: '/Vault',
                icon: <Work fontSize="small"/>
            }
        ]
    },

    {
        title: 'Management',
        items: [
            {
                title: 'Users',
                path: '/LoggedinUsers',
                icon: <AdminPanelSettings fontSize="small"/>,
                children: [
                    {
                        title: 'Logged In Users',
                        path: '/loggedinUsers'
                    },
                    {
                        title: 'Registered Users',
                        path: '/registeredusers'
                    },
                    {
                        title: 'Stats',
                        path: '/stats'
                    }
                ]
            },
            {
                title: 'General Settings',
                path: '/settings',
                icon: <SettingsAccessibility fontSize="small"/>
            }
        ]
    }
];

const DashboardSidebar = (props) => {
    const {onMobileClose, openMobile} = props;
    const location = useLocation();
    const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'));
    const {user} = useSelector((state) => state.auth);

    useEffect(() => {
        if (openMobile && onMobileClose) {
            onMobileClose();
        }
    }, [location.pathname]);

    const [isApplicationOpen, setIsApplicationOpen] = useState(false);
    const handleApplyModalOpen = () => {
        setIsApplicationOpen(true);
    };
    const handleApplyModalClose = () => {
        setIsApplicationOpen(false);
    };

    const [isVotesApplicationOpen, setIsVotesApplication] = useState(false);
    const handleApplyVotesModalClose = () => {
        setIsVotesApplication(false);
    };
    const handleApplyVotesModalOpen = () => {
        setIsVotesApplication(true);
    };

    const [isContentMessageOpen, setIsContentMessage] = useState(false);
    const handleContentMessageClose = () => {
        setIsContentMessage(false);
    };
    const handleContentMessageOpen = () => {
        setIsContentMessage(true);
    };
  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%'
      }}
    >
      <Scrollbar options={{ suppressScrollX: true }}>
        <Box sx={{
          p: 2
          }}>
          {sections.map((section) => (
            <NavSection
              key={section.title}
              pathname={location.pathname}
              sx={{
                '& + &': {
                  mt: 3
                }
              }}
              {...section}
            />
          ))}
        </Box>
        <Divider />
        <Box sx={{ p: 2 }}>
          <Button
            color="primary"
            onClick={handleApplyModalOpen}
            fullWidth
            sx={{ mt: 2 }}
            to="#"
            variant="contained"
          >
            Interactions
          </Button>
          <Modal
            onApply={handleApplyModalClose}
            onClose={handleApplyModalClose}
            open={isApplicationOpen}
          />
          <Button
              color="primary"
              onClick={handleApplyVotesModalOpen}
              fullWidth
              sx={{
                mt: 2
              }}
              to="#"
              variant="contained"
          >
            Current Votes
          </Button>
          <VotesModal
              onApply={handleApplyVotesModalClose}
              onClose={handleApplyVotesModalClose}
              open={isVotesApplicationOpen}
          />
          <Button
              color="primary"
              onClick={handleContentMessageOpen}
              fullWidth
              sx={{
                mt: 2,
                mb: 4
              }}
              to="#"
              variant="contained"
          >
            Content Messages
          </Button>
          <ContentMessage
              onApply={handleContentMessageClose}
              onClose={handleContentMessageClose}
              open={isContentMessageOpen}
          />
          <Divider/>
          <Typography
              color="textPrimary"
              variant="subtitle2"
              sx={{
                color: 'text.primary',
                fontSize: '0.75rem',
                lineHeight: 2.5,
                fontWeight: 700,
                textTransform: 'uppercase',
                mt: 2
              }}
          >
            Need Help?
          </Typography>
          <Button
              color="primary"
              // component={RouterLink}
              fullWidth
              sx={{ mt: 2 }}
              to="#"
              variant="contained"
          >
            Documentation
          </Button>
        </Box>
      </Scrollbar>
    </Box>
  );
    if (lgUp) {
        return (
            <Drawer
                anchor="left"
                open
                PaperProps={{
                    sx: {
                        backgroundColor: 'background.paper',
                        height: 'calc(100% - 64px) !important',
                        top: '64px !Important',
                        width: 280
                    }
                }}
                variant="permanent"
            >
                {content}
            </Drawer>
        );
    }


    return (
        <>
            <Drawer
                anchor="left"
                onClose={onMobileClose}
                open={openMobile}
                PaperProps={{
                    sx: {
                        backgroundColor: 'background.paper',
                        width: 280
                    }
                }}
                variant="temporary"
            >
                {content}
            </Drawer>
            <Modal
                onApply={handleApplyModalClose}
                onClose={handleApplyModalClose}
                open={isApplicationOpen}
            />
        </>
    );
};

DashboardSidebar.propTypes = {
    onMobileClose: PropTypes.func,
    openMobile: PropTypes.bool
};

export default DashboardSidebar;
