const express = require('express');
const app = express(); 




const port = process.env.PORT || 25565; 

app.listen(port, () => console.log(`Listening on ${port}...`));