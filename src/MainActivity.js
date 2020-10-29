import React from "react";
import Drawer from "@material-ui/core/Drawer/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import TaskMenu from "./TaskMenu";
import TaskList from "./TaskList";
import Grid from "@material-ui/core/Grid";
import TaskDetails from "./TaskDetails";

const TASK_URL_BASE = "https://localhost:8080/api/tasks";

export default class MainActivity extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            'tasks': []
        };
        this.getAllTasks = this.getAllTasks.bind(this);
        this.addTaskCallback = this.addTaskCallback.bind(this);
        this.viewDetailsCallback = this.viewDetailsCallback.bind(this);
        this.updateTaskCallback = this.updateTaskCallback.bind(this);
        this.displayTask = this.displayTask.bind(this);
        this.replaceTaskInList = this.replaceTaskInList.bind(this);
        this.cancelTaskCallback = this.cancelTaskCallback.bind(this);
    }

    componentDidMount() {
        this.getAllTasks();
    }

    // Result may be a null list.  Means there was an error.
    getAllTasks() {
        let currToken = localStorage.getItem("currToken");
        if (currToken) {
            fetch(TASK_URL_BASE + "/all", {
                method: "GET",
                headers: {
                    'Authorization': "Bearer " + currToken,
                }
            })
                .then(data => data.text())
                .then(JSON.parse)
                .then(data => {
                    this.setState({
                        'tasks': data.taskList,
                    });
                });
        } else {
            // Get the token we need.
        }
    }

    viewDetailsCallback(task) {
        this.displayTask(task);
    }

    addTaskCallback() {
        console.log(null);
    }

    updateTaskCallback(task) {
        let taskBody = {'task': task};
        // Check that we have a valid token
        let currToken = localStorage.getItem("currToken");
        if (!currToken) {
            new Error("Missing currToken");
        }
        fetch(TASK_URL_BASE + "/update", {
            method: "PUT",
            headers: {
                'Authorization': "Bearer " + currToken,
                'Content-type': "application/json"
            },
            body: JSON.stringify(taskBody)
        })
            .then(data => data.text())
            .then(JSON.parse)
            .then(console.log)
            .then(() => this.replaceTaskInList(task));  // Update the displayed task
        // This will update the state of the task that is displayed to the new/saved values.
        this.displayTask(task);
    }

    // Replaces a task that we already know that exists in the list with a new task as long as the taskId s match
    replaceTaskInList(task) {
        let currTasks = [...this.state.tasks];
        for (let i = 0; i < currTasks.length; i++) {
            if (currTasks[i].taskId === task.taskId) {
                currTasks[i] = task;
            }
        }
        // Change the state to new list
        this.setState({'tasks' : currTasks});
    }

    cancelTaskCallback() {
        this.displayTask(null);
    }

    displayTask(task) {
        this.setState({
            detailedTask: task,
        });
    }

    render() {
        let styles = this.props.styles;
        return (
            <>
                <Drawer
                    className={styles.drawer}
                    variant="permanent"
                    classes={{
                        paper: styles.drawerPaper,
                    }}>
                    <Toolbar />
                    <div className={styles.drawerContainer}>
                        <TaskMenu />
                    </div>
                </Drawer>
                <main className={styles.content}>
                    <Toolbar />
                    <div>
                        <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                            <Grid item xs={7}>
                                <TaskList
                                    styles={styles}
                                    taskList={this.state['tasks']}
                                    addTask={this.addTaskCallback}
                                    viewDetails={this.viewDetailsCallback}
                                    updateTask={this.updateTaskCallback}
                                />
                            </Grid>
                            <Grid item xs={5}>
                                <TaskDetails
                                    styles={styles}
                                    displayTask={this.state.detailedTask}
                                    updateTask={this.updateTaskCallback}
                                    cancelTask={this.cancelTaskCallback}
                                />
                            </Grid>
                        </Grid>
                    </div>
                </main>
            </>);
    }
}