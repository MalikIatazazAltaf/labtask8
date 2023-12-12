const express = require('express');
const app = express();
const PORT=3000;
// Import routers
const ecommerce = require('./ecommerce');
const passwordstrength = 
require('./passwordstrength');
// Mount the routers at specific paths
app.use('/ecommerce', ecommerce);
app.use('/passwordstrength', passwordstrength);
app.listen(PORT, () => {
console.log('Server running on port http://localhost:${PORT}');
});
