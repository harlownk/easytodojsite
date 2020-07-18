import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";

export default class TaskDetails extends React.Component {
    render() {
        let styles = this.props.styles;
        return (
            <Box height="100%" classes={{root: styles.listItem}}>
                <Typography>
                    Edit details of a task here.
                </Typography>
            </Box>
        )
    };
}