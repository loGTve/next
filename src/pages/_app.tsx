import React from 'react';
import Link from 'next/link';
import useToggle from 'react-use-toggle';
import {
    AppBar, Toolbar, Paper,
    createStyles, makeStyles, Theme,
    Collapse, FormControlLabel, Button, Switch, Icon
} from '@material-ui/core';

import { IconButton } from '@material-ui/core';
import {Category, Menu} from '@material-ui/icons';


const lists = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          height: 700,
          width: 300,
        },
        paper: {
            margin: theme.spacing(1),
        },
        div: {
            paddingTop: theme.spacing(2),
            paddingLeft: theme.spacing(1),
        },
        divF: {
            paddingTop: theme.spacing(2),
            paddingBottom: theme.spacing(1),
            paddingLeft: theme.spacing(1),
        }
    })
)

const bars = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          flexGrow: 1,
        },
        barColor: {
            backgroundColor: "lightBlue"
        },
        iconButton: {
            marginRight: theme.spacing(3),
        }
    })
)






export default function App() {

    const barStyle = bars();
    const listStyles = lists();

    let [show, setShow] = React.useState(false);

    const handleChange = () => {
        setShow((prev) => !prev)
    }



    return (
        <div className={barStyle.root}>
            <AppBar position="static" className={barStyle.barColor}>
                <label>
                <Toolbar>
                    <FormControlLabel control={<IconButton onClick={handleChange}  color="inherit"><Menu /></IconButton>} label={"목록"}/>
                </Toolbar>
                </label>
            </AppBar>
            <div className={listStyles.root}>
                <Collapse in={show}>
                    <Paper elevation={10}>
                        <div className={listStyles.div}> a </div>
                        <div className={listStyles.div}> b </div>
                        <div className={listStyles.divF}> c </div>
                    </Paper>
                </Collapse>
            </div>
        </div>

    )
}