// play this: https://www.youtube.com/watch?v=d-diB65scQU

const PORT = 9090;
const server = require('./server.js');

server.listen(PORT, () => console.log(`Listening on port ${PORT}`));
