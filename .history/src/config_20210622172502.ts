console.log('111');
import fs from 'fs';

const res = fs.readFileSync(
  '/Users/zhangxing/src/is-docs-vodka-frame/src/styles/mixins.less',
  {
    encoding: 'utf-8',
  }
);

export const variables = res.match(/^@(?!import).*:.*/gm);

export const methods = res.match(/^\..*\(.*\)/gm);

console.log('111', variables);
console.log('111', methods);
