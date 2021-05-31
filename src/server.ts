import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '@sapper/server';

import { authenticationMiddleware } from './lib/auth';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';

polka() // You can also use Express
    .use(
        compression({ threshold: 0 }),
        sirv('static', { dev }),
        authenticationMiddleware,
        sapper.middleware({
            session: (req, res) => ({
                user: req.user || {},
                token: req.token,
            }),
        })
    )
    .listen(PORT, (err) => {
        if (err) console.log('error', err);
    });
