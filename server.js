const express = require('express');

const app = express();
app.get('/hacker', (req, res) => {
    res.send("soy to haker")
});
app.listen(process.env.PORT || 3000, () => {
    console.log('servidor escuchando en el puerto 3000');
})