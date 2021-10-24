const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Product App'));

app.listen(port, () => console.log(`Product-app listening on port ${port}!`));