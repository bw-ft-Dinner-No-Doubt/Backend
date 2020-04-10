const server = require('./api/server');

const port = process.env.PORT || 6565;
server.listen(port, () => console.log(`\n** No Errors on Port ${port} **`));