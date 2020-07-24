import React from "react";
import CssBaseline from '@material-ui/core/CssBaseline';
import Menu from './Menu';
import TaskActivity from "./TaskActivity";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Drawer from "@material-ui/core/Drawer";
import UserAuth from "./UserAuth";

export default class AppWithStyles extends React.Component {

    constructor(props) {
        super(props);
        // We want to try and determine if we are logged in and have an auth token already. We will determine our state.
        let loggedIn = this.handleInitialLoginCheck();

        this.state = {
            "loggedIn": loggedIn
        };
        this.setLoginState = this.setLoginState.bind(this);
    }

    handleInitialLoginCheck() {
        let loggedIn;
        let currToken = localStorage.getItem("currToken");
        if (currToken) {
            if (this.weakVerifyJwt(currToken)) {
                // Check if it is expired or not.
                // Parse the token.
                let claims = this.parseJwt(currToken);
                let date = new Date();
                date.setTime(claims.exp * 1000);
                console.log(date);
                console.log(new Date());
                loggedIn = (date > (new Date()));
                if (!loggedIn) {
                    localStorage.removeItem("currToken");
                }
            } else {
                // localStorage.removeItem("currToken");
            }
        } else {
            loggedIn = false;
        }
        return loggedIn;
    }

    weakVerifyJwt = (token) => {
        return (token.split('.').length === 3);
    };

    // private functions
    parseJwt = (token) => {
        try {
            return JSON.parse(atob(token.split('.')[1]));
        } catch (e) {
            return null;
        }
    };


    render() {
        let styles = this.props.styles;
        let display;  // The main display that we want to produce.
        if (this.state["loggedIn"]) {
            display = (
                <>
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
                </>);
        } else {
            display = (
                <main className={styles.content}>
                    <Toolbar />
                    <UserAuth styles={styles} setLoginState={this.setLoginState}/>
                </main>
                );
        }
        return (
                <div className={styles.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={styles.appBar}>
                        <Toolbar>
                            <Typography variant="h6" noWrap>
                                EasyTodoJ
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    {display}
                </div>
        );
    }

    // Required for render.
    setLoginState(token) {
        this.setState({
            "loggedIn": true
        });
        localStorage.setItem("currToken", token);
    }


}