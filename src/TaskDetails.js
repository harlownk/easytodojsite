import React from "react";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";

export default class TaskDetails extends React.Component {
    render() {
        let styles = this.props.styles;
        return (
            <Card classes={{root: styles.root}}>
                <Typography>
                    Edit details of a task here.
                </Typography>
            </Card>
        )
    };
}