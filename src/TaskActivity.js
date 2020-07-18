import React from "react";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import {CheckBox} from "@material-ui/icons";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import TaskDetails from "./TaskDetails";

const TaskActivity = ({ styles }) => {
    let style = styles;
    let listItems = () => {
        let items = [];
        for (let i = 0; i < 25; i++) {
            items.push(
                <ListItem classes={{root:style.listItem}}>
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
            <Grid container direction="row" justify="space-around" alignItems="stretch" spacing={2} sm>
                <Grid item xs={7}>
                    <List className={styles.list}>
                        {items}
                    </List>
                </Grid>
                <Grid item xs={5}>
                    <TaskDetails styles={style}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default TaskActivity;

