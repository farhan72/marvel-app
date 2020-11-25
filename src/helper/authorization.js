import cookie from 'js-cookie';

export function APIv1(value, request) {
    const url = new URL(process.env.REACT_APP_BASE_URL_V1 + value);
    const md5 = require('md5'),
        ts = cookie.get('timestamp');
    const publicKey = cookie.get('publicKey'),
        privateKey = '42f82eb3d0d38b7545a44a22d9e61c7b29151b98';
    const hash = ts + privateKey + publicKey;
    const params = {
        ts,
        hash: md5(hash),
        apikey: publicKey
    }
    Object.assign(params, request)
    Object.keys(params)
        .map(key => url.searchParams.append(key, params[key]))
    return url;
}