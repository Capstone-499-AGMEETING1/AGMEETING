import React from 'react'
import {useRef, useState} from 'react';
import {subDays, subHours} from 'date-fns';
import {
    Avatar,
    Badge,
    Box,
    Button,
    IconButton,
    Link,
    List,
    ListItem,
    ListItemAvatar,
    ListItemText,
    Popover,
    Tooltip,
    Typography
} from "@mui/material";
import BellIcon from '../../icons/Bell';
import ChatAltIcon from '../../icons/ChatAlt';
import {useDispatch, useSelector} from "react-redux";
import {clearMessages} from "../../actions/message";

const NotificationsPopover = () => {
    const anchorRef = useRef(null);
    const [open, setOpen] = useState(false);
    const {messages} = useSelector((state) => state.messages);
    const dispatch = useDispatch();

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const readAllMessages = () => {
        dispatch(clearMessages());
    };

    return (
        <>
            <Tooltip title="Notifications">
                <IconButton
                    color="inherit"
                    ref={anchorRef}
                    onClick={handleOpen}
                >
                    <Badge
                        color="error"
                        badgeContent={messages.length}
                    >
                        <BellIcon fontSize="small"/>
                    </Badge>
                </IconButton>
            </Tooltip>
            <Popover
                anchorEl={anchorRef.current}
                anchorOrigin={{
                    horizontal: 'center',
                    vertical: 'bottom'
                }}
                onClose={handleClose}
                open={open}
                PaperProps={{
                    sx: {width: 320}
                }}
            >
                <Box sx={{p: 2}}>
                    <Typography
                        color="textPrimary"
                        variant="h6"
                    >
                        Notifications
                    </Typography>
                </Box>
                {messages.length === 0
                    ? (
                        <Box sx={{p: 2}}>
                            <Typography
                                color="textPrimary"
                                variant="subtitle2"
                            >
                                There are no notifications.
                            </Typography>
                        </Box>
                    )
                    : (
                        <>
                            <List disablePadding>
                                {messages.map((msg) => {
                                    return (
                                        <ListItem
                                            divider
                                            key={msg.date}
                                        >
                                            <ListItemAvatar>
                                                <Avatar
                                                    sx={{
                                                        backgroundColor: 'primary.main',
                                                        color: 'primary.contrastText'
                                                    }}
                                                >
                                                    <ChatAltIcon fontSize="small"/>
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                                primary={(
                                                    <Link
                                                        color="textPrimary"
                                                        sx={{cursor: 'pointer'}}
                                                        underline="none"
                                                        variant="subtitle2"
                                                    >
                                                        {msg.message}
                                                    </Link>
                                                )}
                                                secondary={(msg.date)}
                                            />
                                        </ListItem>
                                    );
                                })}
                            </List>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    p: 1
                                }}
                            >
                                <Button
                                    color="primary"
                                    size="small"
                                    variant="text"
                                    onClick={readAllMessages}
                                >
                                    Mark All as Read
                                </Button>
                            </Box>
                        </>
                    )}
            </Popover>
        </>
    );
};

export default NotificationsPopover;
