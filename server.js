const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// parse incoming string or array data(middleware)
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data(middleware)
app.use(express.json());
// file path to public folder(middleware)
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});
