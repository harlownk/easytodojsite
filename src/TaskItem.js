import React from "react";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import CheckBox from "@material-ui/core/Checkbox";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import ListItem from "@material-ui/core/ListItem";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

export default class TaskItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            completed: this.props.completed,
        };
        this.handleCheck = this.handleCheck.bind(this);
        this.seeDetails = this.seeDetails.bind(this);
    }

    handleCheck = (event) => {
        this.setState({
            completed: event.target.checked,
        });
    };

    seeDetails() {
        this.props.viewDetails("Current Task");
    }

    render() {
        let styles = this.props.styles;
        let description = this.props.description;
        return (
            <ListItem button classes={{root: styles.listItem}} onClick={this.seeDetails}>
                <ListItemText primary={description}/>
                <ListItemSecondaryAction>
                    <ListItemIcon>
                        <CheckBox edge="end"
                                  color="primary"
                                  tabIndex={-1}
                                  checked={this.state.completed}
                                  onClick={this.handleCheck}
                        />
                    </ListItemIcon>
                </ListItemSecondaryAction>
            </ListItem>);
    }
}