import React from 'react';
import {Paper, makeStyles, createStyles, Theme, Collapse} from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Link from "next/link";


const style = makeStyles((theme: Theme) =>
    createStyles ({
        divTop: {
            marginTop: '100px',
            flex: 1,
        },
        paperSize: {
            width: 300,
            height: 300,
        },
    })
)

const styleChange = makeStyles((theme: Theme) =>
    createStyles ({
      TempButton: {
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 70%)',
          borderRadius: 3,
      }  ,
    })
)


export default function Info() {
    const divStyle = style();
    const buttonStyle = styleChange();

    let [showWeather, setShowWeather] = React.useState(false);

    const handleChange = () => {
        setShowWeather((prev) => !prev)
    }


    //Add summerTemp API result at Paper
    return (
        <div>
            <div className={divStyle.divTop}>
                <Button variant="contained" className={buttonStyle.TempButton} onClick={handleChange}>오늘의 온도</Button>
            </div>

            <Collapse in={showWeather} >
                <Paper elevation={2} className={divStyle.paperSize}>



                </Paper>
            </Collapse>
        </div>
    )

}