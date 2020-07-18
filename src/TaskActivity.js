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


const useStyles = makeStyles((theme) => ({
    root: {
        borderStyle: "solid",
        borderWidth: "1px",
        borderColor: theme.palette.grey["700"],
        marginBottom: "3px",
        zIndex: theme.zIndex.root + 1,
        boxShadow: theme.shadows[5],
    },
}));

const TaskActivity = () => {
    let style = useStyles();
    let listItems = () => {
        let items = [];
        for (let i = 0; i < 25; i++) {
            items.push(
                <ListItem elevation={4} classes={{root:style.root}}>
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
            <Toolbar />
            <Grid container direction="row" justify="space-between" alignItems="stretch" spacing={3} >
                <Grid item xs={9}>
                    <List>
                        {items}
                    </List>
                </Grid>
                <Grid item xs={3}  style={{height:"100px"}}>
                    <TaskDetails styles={style}/>
                </Grid>
            </Grid>
        </div>
    )
};

export default TaskActivity;

