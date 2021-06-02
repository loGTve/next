
export default function LoTime () {

    const date = Date();
    const dateSplit = date.split(' ');

    const Year: string = dateSplit[3];
    const Day: string = dateSplit[2];
    const MonthEng: string = dateSplit[1];

    let Month : string = "";

    switch (MonthEng) {
        case 'Jen':
            Month = "01";
            break;
        case 'Feb':
            Month = "02";
            break;
        case 'Mar':
            Month = "03";
            break;
        case 'Apr':
            Month = "04";
            break;
        case 'May':
            Month = "05";
            break;
        case 'Jun':
            Month = "06";
            break;
        case 'Jul':
            Month = "07";
            break;
        case 'Aug':
            Month = "08";
            break;
        case 'Sep':
            Month = "09";
            break;
        case 'Oct':
            Month = "10";
            break;
        case 'Nov':
            Month = "11";
            break;
        case 'Dec':
            Month = "12";
            break;
    }

    const Time: string = Year + Month + Day;


}