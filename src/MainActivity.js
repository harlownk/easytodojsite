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
        }
    }

    addTaskCallback() {
        console.log(null);
    }

    viewDetailsCallback(task) {
        console.log(task);
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
                                <TaskList styles={styles} taskList={this.state['tasks']} addTask={this.addTaskCallback} viewDetails={this.viewDetailsCallback}/>
                            </Grid>
                            <Grid item xs={5}>
                                <TaskDetails styles={styles}/>
                            </Grid>
                        </Grid>
                    </div>
                </main>
            </>);
    }
}