import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button";

export default class SignUpForm extends React.Component {

    render() {
        return (
            <div style={{height:"100%"}}>
                <Grid container direction="column" justify="space-around" alignItems="center" style={{height:"100%"}}>
                    <div>
                        <Grid container direction="column" justify="center">
                            <TextField id="filled-basic" label="Username" variant="filled" />
                            <TextField id="filled-basic" label="Password" variant="filled" type="password" />
                            <TextField id="filled-basic" label="Confirm Password" variant="filled" type="password" />
                            <Button variant="outlined" color="default">
                                Login
                            </Button>
                        </Grid>
                    </div>
                </Grid>
            </div>
        );
    }
}