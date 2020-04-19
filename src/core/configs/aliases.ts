import path from 'path';
import { addAliases } from 'module-alias';

const rootPath = path.resolve(__dirname, '..', '..', '..', 'dist');
addAliases({
    '@src': rootPath,
});
