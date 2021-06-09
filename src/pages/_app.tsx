import React from 'react';
import Link from 'next/link';

import {
    AppBar, Toolbar, Paper,
    createStyles, makeStyles, Theme,
    Collapse
} from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import Index from "./index";
import Info from "./info";


const lists = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            height: 700,
            width: 300,
            position: "relative",
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
            paddingTop: theme.spacing(7),
        },
        barColor: {
            backgroundColor: "lightBlue"
        },
        iconButton: {
            marginRight: theme.spacing(3),
        },
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
        <React.Fragment>
            <div className={barStyle.root}>
                <AppBar position="fixed" className={barStyle.barColor}>
                    <Toolbar>
                        <IconButton onClick={handleChange}  color="inherit"><Menu /></IconButton>
                    </Toolbar>
                </AppBar>
            </div>
            <Info/>
            <div>
                <Collapse in={show} className={listStyles.root} >
                    <Paper elevation={10}>
                        <div className={listStyles.div}>
                            <Link href="./info.tsx">To Info</Link>
                        </div>
                        <div className={listStyles.div}>
                            <Link href="./index.tsx">Main</Link>
                        </div>
                        <div className={listStyles.divF}> c </div>
                    </Paper>
                </Collapse>
            </div>

        </React.Fragment>
    )
}