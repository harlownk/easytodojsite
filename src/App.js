import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';
import Menu from './Menu';
import TaskActivity from "./TaskActivity";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import makeStyles from "@material-ui/core/styles/makeStyles";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 2,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(1),
    },
    activity: {
        padding: theme.spacing(1),
    },
    list: {
        padding: 0,
    },
    listItem: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: theme.palette.grey["700"],
        marginTop: "3px",
        marginBottom: "3px",
        zIndex: theme.zIndex.root + 1,
        boxShadow: theme.shadows[5],
    },
}));

export default function App() {
    const styles = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <div className={styles.root}>
            <CssBaseline />
            <AppBar position="fixed" className={styles.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        EasyTodoJ
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={styles.drawer}
                variant="permanent"
                classes={{
                    paper: styles.drawerPaper,
                }}>
                <Toolbar />
                <div className={styles.drawerContainer}>
                    <Menu />
                </div>
            </Drawer>
            <main className={styles.content}>
                <Toolbar />
                <TaskActivity styles={styles}/>
            </main>
        </div>
        </ThemeProvider>
    );}