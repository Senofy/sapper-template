import { get, post } from './api';
async function authenticationMiddleware(req, res, next) {
    let user = null;

    const cookies = require('cookie-universal')(req, res);
    if (cookies.get('token')) {
        try {
            user = await get('accounts/profile', null, cookies.get('token'));
        } catch (e) {
            console.log('err at users', e.toString());
        }
        req.user = user?.profile;
        req.token = cookies.get('token');
    } else {
        req.user = {};
        req.token = null;
        cookies.set('token', null);
    }

    next();
}
export { authenticationMiddleware };
