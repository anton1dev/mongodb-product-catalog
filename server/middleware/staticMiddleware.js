import { static as staticServer } from 'express';
import { join } from 'path';

export const serveStaticFiles = staticServer(join('images'));

