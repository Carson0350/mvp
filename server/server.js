const express = require('express');
const app = express();
const path = require('path');
app.use(express.json());
const PORT = 3000;
app.use(express.static(path.join(__dirname, '../client/dist')));
app.listen(PORT, () => console.log(`listening on port ${PORT}`));