import { HttpAdapterHost } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { FOLDER_DIST_BROWSER, FOLDER_DIST_SERVER } from './path.constants';

import * as express from 'express';

export async function universalFactory(app: HttpAdapterHost) {
    const server: ExpressAdapter = app.httpAdapter as any;
    const {
        AppServerModuleNgFactory,
        LAZY_MODULE_MAP,
        ngExpressEngine,
        provideModuleMap,
    } = await import (`${FOLDER_DIST_SERVER}/main.js`);
    server.engine('html', ngExpressEngine({
        bootstrap: AppServerModuleNgFactory,
        providers: [
          provideModuleMap(LAZY_MODULE_MAP),
        ],
    }));
    server.set('view engine', 'html');
    server.set('views', FOLDER_DIST_BROWSER);
    server.get('*.*', express.static(FOLDER_DIST_BROWSER, {
        maxAge: '1y',
    }));
    // ** Do not put this following code: **
    // server.get('*', (req, res) => {
    //     res.render('index', { req });
    // });
}

export const UniversalProvider = {
    provide: 'UNIVERSAL_INITIALIZER',
    useFactory: universalFactory,
    inject: [HttpAdapterHost],
};
