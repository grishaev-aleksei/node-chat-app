const path = require('path');
const express = require('express');

const app = express();

const publicPath = path.join(__dirname, '../public');

app.use(express.static(publicPath));

// app.get('/', (req, res) => {
//     res.sendFile('index.html')
// });

app.listen(process.env.port || 3000, () => {
    console.log(`listening on port 3000`)
});


