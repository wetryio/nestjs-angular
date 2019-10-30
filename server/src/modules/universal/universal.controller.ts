import { Controller, Get, Res, Req } from '@nestjs/common';
import { Response, Request } from 'express';
import { join } from 'path';
import { FOLDER_DIST_BROWSER } from './path.constants';

@Controller()
export class UniversalController {
  @Get('*')
  render(@Res() res: Response, @Req() req: Request) {
    res.render(join(FOLDER_DIST_BROWSER, 'index.html'), { req });
  }
}
