let count = 0;

const getDataCount = ()=>{
    return count;
}
const incrDataCount = ()=>{
    count += 1;
}

setTimeout(incrDataCount, 1000);

module.exports = {
    getDataCount,
    incrDataCount
}