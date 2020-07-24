import React from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";
import AppWithStyles from "./AppWithStyles";
import {ThemeProvider} from "@material-ui/styles";
import theme from "./theme";

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
        overflow:"auto",
        height:"91vh",
        paddingRight: "10px",
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
    login: {
        width:"700px",
        height:"500px",
    },
    loginGrid: {
        height:"90vh",
    }
}));

/**
 * To access the styles and Material Theme, we need to use hooks that dont work with classes, so we get the styles and
 * pass it to the elements that need them.
 * @returns {*}
 * @constructor
 */
export default function App() {
    const styles = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <AppWithStyles styles={styles}/>
        </ThemeProvider>
    );
}