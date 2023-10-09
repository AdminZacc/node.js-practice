const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3500;

app.get('/', (res, req) => {
    res.setEncoding('Hello World!');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));