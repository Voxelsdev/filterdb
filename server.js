const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config');

const app = express();
const port = process.env.PORT || 3000;
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
}));

app.use(require('webpack-hot-middleware')(compiler));

app.use(express.static(__dirname + '/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

app.listen(port, () => {
  /* eslint-disable no-console */

  console.log(`Listening on port: ${port}`);
});
