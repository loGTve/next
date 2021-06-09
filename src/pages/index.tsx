import React from 'react';
import { Paper, makeStyles, createStyles, Theme } from '@material-ui/core';
import Image from 'next/image';


const style = makeStyles((theme: Theme) =>
    createStyles ({
        divTop: {
        },
    })
)




export default function Index() {
    const divStyle = style();


    return (
        <div className={divStyle.divTop}>
            <div>
                <Image src="https://media-exp1.licdn.com/dms/image/C4D1BAQGAO9zvVhyAqQ/company-background_10000/0/1539806088038?e=2159024400&v=beta&t=5vq2-UBGsfB5RPQaOHqFEHtmdq47wFGYL27qOMblKwc"
                       alt="Space Banner"
                       width={1920}
                       height={200}
                       objectFit="cover"
                       objectPosition="top"
                />
            </div>

        </div>
    )

}
