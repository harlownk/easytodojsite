import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

export default class TaskDetails extends React.Component {
    render() {
        let styles = this.props.styles;
        return (
            <Box height="90.5vh" classes={{root: styles.listItem}}>
                <Typography>
                    Edit details of a task here.
                </Typography>
            </Box>
        )
    };
}