const process = require('process');

const errorHandler = (err) => {
    process.stderr.write(`${err.name}: ${err.message}`);
    process.exit(1);
}

module.exports = errorHandler;
