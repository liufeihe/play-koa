const moduleB = require('./module');

const showData = ()=>{
    console.log('b, count:', moduleB.getDataCount());
}

module.exports = {
    showData
}