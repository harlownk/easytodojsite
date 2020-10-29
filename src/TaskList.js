import React from "react";
import List from "@material-ui/core/List";
import "./App.css"
import TaskItem from "./TaskItem";
import AddTaskItem from "./AddTaskItem";

export default class TaskList extends React.Component {
    render() {
        let styles = this.props.styles;
        let taskList = this.props.taskList;
        let domItems = [];
        for (let i = 0; i < taskList.length; i++) {
            domItems.push(
                // Todo, remove the key, desc, and completed props instead render them from the task prop provided.
                <TaskItem task={taskList[i]}
                          key={taskList[i].taskId}
                          description={taskList[i].taskDescription}
                          completed={taskList[i].completed}
                          styles={styles}
                          viewDetails={this.props.viewDetails}
                          updateTask={this.props.updateTask}
                />
            );
        }
        return (
            <List className={styles.list}>
                <AddTaskItem styles={styles} addTask={this.props.addTask}/>
                {domItems}
            </List>
        );
    };
}

