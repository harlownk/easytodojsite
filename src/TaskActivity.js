import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {CheckBox} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import Grid from "@material-ui/core/Grid";
import TaskDetails from "./TaskDetails";
import "./App.css"

const TaskActivity = ({ styles }) => {
    let listItems = () => {
        let items = [];
        for (let i = 0; i < 25; i++) {
            items.push(
                <ListItem classes={{root:styles.listItem}}>
                    <ListItemIcon>
                        <CheckBox edge="start"
                                  checked={1}
                                  tabIndex={-1}
                                  disableRipple/>
                    </ListItemIcon>
                    <ListItemText primary={'Item ' + i}/>
                </ListItem>
            );
        }
        return items;
    };
    let items = listItems();
    return (
        <div>
            <Grid container direction="row" justify="space-between" alignItems="flex-start" spacing={2}>
                <Grid item xs={7}>
                    <List className={styles.list}>
                        {items}
                    </List>
                </Grid>
                <Grid item xs={5}>
                    <TaskDetails styles={styles}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default TaskActivity;

