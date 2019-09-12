const moduleA = require('./module');
const pageB = require('./pageB');

console.log(moduleA.getDataCount());
pageB.showData();
moduleA.incrDataCount();
console.log(moduleA.getDataCount());
pageB.showData();

