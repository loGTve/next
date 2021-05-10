import React from 'react';
import { Paper, makeStyles, createStyles, Theme } from '@material-ui/core';

const style = makeStyles((theme: Theme) =>
    createStyles ({
        divTop: {
            paddingTop: theme.spacing(10),
            flex: 1,
        },
    })
)

export default function Main() {
    const divStyle = style();

    return (
        <div>
            <div className={divStyle.divTop}>
                Hello
            </div>
        </div>
    )

}