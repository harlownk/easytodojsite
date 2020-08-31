import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export default class AddTaskItem extends React.Component {

    constructor(props) {
        super(props);

        this.addTask = this.addTask.bind(this);
    }

    addTask() {
        this.props.addTask(null);
    }

    render() {
        let styles = this.props.styles;
        return (
            <ListItem button classes={{root: styles.listItem}} key={-1} onClick={this.props.addTask}>
                <ListItemText primary={"Add New Task"}/>
            </ListItem>
        );
    }
}