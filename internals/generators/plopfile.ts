import { NodePlopAPI } from 'node-plop';
import { componentGenerator } from './component';
import * as shell from 'shelljs';
import { sliceGenerator } from './slice';
import { unixPath } from './utils';
interface PrettifyCustomActionData {
  path: string;
}

export default function plop(plop: NodePlopAPI) {
  plop.setHelper('unixPath', unixPath);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('slice', sliceGenerator);

  plop.setActionType('prettify', (answers, config) => {
    const data = config.data as PrettifyCustomActionData;
    shell.exec(`yarn run prettify -- "${data.path}"`, { silent: true });
    return '';
  });
}
