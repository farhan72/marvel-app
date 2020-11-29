import axios from 'axios';
import { APIv1 } from '../../helper/authorization';
function getComics() {
    return axios.get(APIv1('comics'));
}

export { getComics };