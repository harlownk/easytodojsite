import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";

const SIGN_IN_URL = "https://localhost:8080/api/auth";

export default class SignInForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username:"",
            password:"",
        };
        this.handleLoginButton = this.handleLoginButton.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);
    }

    handleUserChange(event) {
        this.setState({username: event.target.value});
    }
    handlePassChange(event) {
        this.setState({password: event.target.value});
    }

    async handleLoginButton() {
        if (!(this.state.username === "") && !(this.state.password === "")) {
            // We can try and log into the api now.
            let status;
            let result = await fetch(SIGN_IN_URL, {
                    method: "POST",
                    headers: {
                        'Authorization': ("Basic " + btoa(this.state.username + ":" + this.state.password))
                    }
                })
                .then(response => {
                    status = response.status;
                    return response.text();
                })
                .then(JSON.parse)
                .then(res => {
                    if (res.authToken) {
                        this.props.setLoginState(res.authToken);
                    } else {
                        this.setState({
                           errorMessage: res.message,
                        });
                    }
                })
                .catch( e => {
                    console.log(e);
                });
            console.log(result);
        }
    }

    render() {
        return (
        <div style={{height:"100%"}}>
            <Grid container direction="column" justify="center" alignItems="center" style={{height:"100%"}}>
                <div>
                    <Grid container direction="column" justify="center">
                        <TextField id="filled-basic" value={this.state.username} label="Username" variant="filled" onChange={this.handleUserChange}/>
                        <TextField id="filled-basic" value={this.state.password} label="Password" variant="filled"  type="password" onChange={this.handlePassChange}/>
                        <Button variant="outlined" color="default" onClick={this.handleLoginButton}>
                            Login
                        </Button>
                    </Grid>
                </div>
            </Grid>
        </div>
        );
    }
}