import React, {useEffect} from "react";
import routes from "./routes";
import {createCustomTheme} from '../config/theme';
import RTL from './RTL'
import ErrorBoundary from "./Errorbound";
import useSettings from "./hooks/useSettings";
import {useRoutes} from "react-router";
import {ThemeProvider} from "@mui/material/styles";
import {CssBaseline} from "@mui/material";
import SettingsDrawer from "./SettingsDrawer";
import {ToastContainer} from "material-react-toastify";
import 'material-react-toastify/dist/ReactToastify.css';
import {io} from "socket.io-client";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "./actions/message";
import moment from "moment";


export default function App() {
    const {user} = useSelector((state) => state.auth);
    const {settings} = useSettings();
    const dispatch = useDispatch();

    useEffect(() => {
        const socket = io();
        socket.on('message', (msg) => {
            dispatch(addMessage(msg, moment().format('MMMM Do YYYY, h:mm:ss a')));
        });

        if (user && user.meetingId) {
            socket.on(user.meetingId, (msg) => {
                dispatch(addMessage(msg, moment().format('MMMM Do YYYY, h:mm:ss a')));
            });
        }
    }, []);

    const theme = createCustomTheme({
        direction: settings.direction,
        responsiveFontSizes: settings.responsiveFontSizes,
        roundedCorners: settings.roundedCorners,
        theme: settings.theme
    });

    const content = useRoutes(routes);

    return (
        <ErrorBoundary>
            <ThemeProvider theme={theme}>
                <ToastContainer/>
                <CssBaseline/>
                <RTL direction={settings.direction}>
                    <SettingsDrawer/>
                    {content}
                </RTL>
            </ThemeProvider>
        </ErrorBoundary>
    );
};
