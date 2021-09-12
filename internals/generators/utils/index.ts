import * as fs from 'fs';

export function pathExists(path: string) {
  return fs.existsSync(path);
}

export function unixPath(path: string) {
  return path.replace(/\\/g, '/');
}