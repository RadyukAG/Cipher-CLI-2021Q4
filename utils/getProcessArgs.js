const process = require('process');

const getProcessArgs = () => process.argv.slice(2);

module.exports = getProcessArgs;
