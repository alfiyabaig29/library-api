const express = require('express');
const app = express();

const bookRoutes = require('./routes/bookRoutes');

app.use(express.json());

app.use(express.static('public'));

app.use('/api', bookRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});