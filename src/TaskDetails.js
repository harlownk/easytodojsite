import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';
import Button from "@material-ui/core/Button";

export default class TaskDetails extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.saveChangesCallback = this.saveChangesCallback.bind(this);
        this.cancelChangesCallback = this.cancelChangesCallback.bind(this);
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if ((prevProps.displayTask && this.props.displayTask && prevProps.displayTask.taskId !== this.props.displayTask.taskId) || (!prevProps.displayTask && this.props.displayTask)) {
            // We have a previous prop, and it differs from the new, or we didn't have an old one, but have been given one to use.
            this.setState({
                description : this.props.displayTask.taskDescription,
                completed : this.props.displayTask.completed,
                timeDue : new Date(this.props.displayTask.timeDue)
            });
        }
    }

    handleDateChange(event) {
        this.setState({timeDue : event});
    }

    handleDescriptionChange(event) {
        this.setState({
            description : event.target.value
        });
    }

    saveChangesCallback() {
        //Create task to update with:
        let updatedTask = JSON.parse(JSON.stringify(this.props.displayTask));
        updatedTask.taskDescription = this.state.description;
        updatedTask.completed = this.state.completed;
        updatedTask.timeDue = this.state.timeDue.getTime();  // State needs it as a date object, we need it as a long
        // Update the state with the database,
        this.props.updateTask(updatedTask);
    }

    cancelChangesCallback() {
        this.props.cancelTask();
    }

    render() {
        let styles = this.props.styles;
        let task = this.props.displayTask;

        let display;

        if (task) {
            display = (
                <>
                    <TextField label={"Description"} value={this.state.description} onChange={this.handleDescriptionChange} fullWidth multiline InputLabelProps={{ shrink: true }}/>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <DatePicker value={this.state.timeDue} onChange={this.handleDateChange}/>
                    </MuiPickersUtilsProvider>
                    <div>
                        <Button variant="outlined" color="primary" onClick={this.saveChangesCallback}>
                            Save Changes
                        </Button>
                        <Button variant="outlined" color="primary" onClick={this.cancelChangesCallback}>
                            Cancel Changes
                        </Button>
                    </div>
                </>
            );
        } else {
            display = (
                <Typography>
                    Edit the details of a task here.
                </Typography>
            );
        }


        return (
            <Box height="90.5vh" classes={{root: styles.listItem}}>
                <Box>
                    {display}
                </Box>
            </Box>
        )
    };
}