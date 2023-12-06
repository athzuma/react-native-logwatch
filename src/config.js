const FILE_NAME = 'config.logwatch';

const fsp = require('fs').promises,
      path = require('path');

let find = async (dir=__dirname) => {
  let ls = await fsp.readdir(dir);
  if(ls.includes(FILE_NAME))
    return path.join(dir,FILE_NAME);
  else if(dir == '/')
    throw new Error(`Could not find ${FILE_NAME}`);
  else
    return find(path.resolve(dir,'..'));
}

export default async function getConfig () {
    const path = await find();
    const response = await fetch(path);
    const jsondata = await response.json();
    return jsondata;
};
