// // const fs = require('fs');
// // const path = require('path');

// const FILE_NAME = 'config.logwatch';
// const fsp = require('fs').promises,
//       path = require('path');

// let find = async (dir=__dirname) => {
//   let ls = await fs.readdir(dir);
//   if(ls.includes(FILE_NAME))
//     return path.join(dir,FILE_NAME);
//   else if(dir == '/')
//     throw new Error(`Could not find ${FILE_NAME}`);
//   else
//     return find(path.resolve(dir,'..'));
// }

// export default async function getConfig () {
//     const jsonpath = await find();
//     const response = await fetch(jsonpath);
//     const jsondata = await response.json();
//     return jsondata;
// };


import RNFS from 'react-native-fs';

const FILE_NAME = 'logwatch.config';

let find = async (dir = RNFS.DocumentDirectoryPath) => {
  try {
    let ls = await RNFS.readDir(dir);
    if (ls.some((file) => file.name === FILE_NAME)) {
      return RNFS.path.join(dir, FILE_NAME);
    } else if (dir === RNFS.DocumentDirectoryPath) {
      throw new Error(`Could not find ${FILE_NAME}`);
    } else {
      return find(RNFS.path.resolve(dir, '..'));
    }
  } catch (error) {
    throw new Error(`Error reading directory: ${error.message}`);
  }
};

export default async function getConfig() {
  try {
    const jsonpath = await find();
    const response = await fetch(jsonpath);
    const jsondata = await response.json();
    return jsondata;
  } catch (error) {
    throw new Error(`Error getting config: ${error.message}`);
  }
}