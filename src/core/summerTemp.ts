import Axios from 'axios';
import LoTime from './localtimes';

(async () => {

    const API_KEY: string = "niGc7IOk43qw7H1S2DwOX4J%2B3he8ijfjrPu0L%2BwNdAs%2BWZWzTSJcbk9peHsrGkOzYQKS64OirYv34PZIIInYjQ%3D%3D";
    const Request: string = `A41`;
    const LocalTime: string = LoTime();


    const URL: string = `http://apis.data.go.kr/1360000/LivingWthrIdxService01/getSenTaIdx?serviceKey=${API_KEY}&pageNo=1&numOfRows=10&dataType=JSON&areaNo=1100000000&time=${LocalTime}&requestCode=${Request}`

    const Weathers = await Axios.get(URL);

    return(Weathers.data.response.body.items);
}) ();