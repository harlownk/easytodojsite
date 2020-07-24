import React from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";

export default class UserAuth extends React.Component {

    render() {
        return (<>
            <Grid container justify={"center"} alignItems={"center"} className={this.props.styles.loginGrid}>
                <Paper elevation={5} className={this.props.styles.login}>
                    <Grid container direction="row" justify="space-evenly" alignItems="center" style={{height:"100%"}}>
                        <SignInForm setLoginState={this.props.setLoginState}/>
                        <Divider variant="middle" orientation="vertical"/>
                        <SignUpForm />
                    </Grid>
                </Paper>
            </Grid>
        </>);
    }
}