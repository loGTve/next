import React from 'react';
import { Paper, makeStyles, createStyles, Theme } from '@material-ui/core';

const style = makeStyles((theme: Theme) =>
    createStyles ({
        divTop: {
            marginTop: '300px',
            flex: 1,
        },
    })
)

export default function Main() {
    const divStyle = style();

    return (
        <body>
        <div className={divStyle.divTop}>
            Hello
        </div>

        </body>
    )

}