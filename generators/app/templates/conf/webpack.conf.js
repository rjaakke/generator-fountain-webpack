<% if (test === false) { -%>
const webpack = require('webpack');
const conf = require('./gulp.conf');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
<%   if (dist === true) { -%>
const SplitByPathPlugin = require('webpack-split-by-path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
<%   } -%>
const autoprefixer = require('autoprefixer');

<% } -%>
module.exports = <%- json(webpackConf) %>;
