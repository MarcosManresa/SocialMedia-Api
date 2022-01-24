const express = require('express');
const goose = require('mongoose');

const apper = express();
const PORT = process.env.PORT || 3001;

apper.use(express.json());
apper.use(express.urlencoded({ extended: true }));
apper.use(require('./routes'));

goose.connect(process.env.MONGODB_URI || 'mongodb://localhost/social-api', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});


goose.set('debug', true);

apper.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));