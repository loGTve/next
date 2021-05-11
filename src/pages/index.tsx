import React from 'react';
import { Paper, makeStyles, createStyles, Theme } from '@material-ui/core';
import { UncontrolledCarousel } from 'reactstrap';

const style = makeStyles((theme: Theme) =>
    createStyles ({
        divTop: {
            paddingTop: theme.spacing(12),
            flex: 1,
        },
    })
)

const carouselImgs = [
    {
        src: "https://t2.daumcdn.net/thumb/R720x0/?fname=http://t1.daumcdn.net/brunch/service/user/TRE/image/jSbbIDabdmD5S54u1gX-1W64ok0",
        altText: "Space 1",
        caption: 'Slide 1',
        header: 'Slide 1 Header',
        key: "1",
    },
    {
        src: "https://imgnn.seoul.co.kr/img/upload/2020/09/25/SSI_20200925104855.jpg",
        altText: "Space 2",
        caption: 'Slide 2',
        header: 'Slide 2 Header',
        key: "2",
    },
    {
        src: 'http://www.artinsight.co.kr/data/news/1910/833266554_iSIxjXoa_maxresdefault-3.jpg',
        altText: "Space 3",
        caption: 'Slide 3',
        header: 'Slide 3 Header',
        key: "3",
    },
];




export default function Index() {
    const divStyle = style();


    return (
        <div className={divStyle.divTop}>
            <div>
                <UncontrolledCarousel items={carouselImgs} />
            </div>
        </div>
    )

}
