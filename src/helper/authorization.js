import Cookies from 'universal-cookie';

const cookie = new Cookies();
export function APIv1(value) {
    const url = new URL(process.env.REACT_APP_BASE_URL_V1 + value);
    const md5 = require('md5'),
        ts = cookie.get('timestamp');
    const publicKey = cookie.get('publicKey'),
        privateKey = cookie.get('privateKey');
    const hash = ts + privateKey + publicKey;
    const params = {
        ts,
        hash: md5(hash),
        apikey: publicKey
    }
    Object.keys(params)
        .map(key => url.searchParams.append(key, params[key]))
    return url;
}