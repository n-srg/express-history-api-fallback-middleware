# [Express middleware] History api fallback middleware
Express middleware for single page apps with client side routing. 

Works as a middleware for Express.js servers. Can be used as either an application middleware or a router middleware.

![MIT License](https://camo.githubusercontent.com/d59450139b6d354f15a2252a47b457bb2cc43828/68747470733a2f2f696d672e736869656c64732e696f2f6e706d2f6c2f7365727665726c6573732e737667)
[![Semver](http://img.shields.io/SemVer/1.0.1.png)](http://semver.org/spec/v1.0.1.html)

## Installation
```
npm i express-history-api-fallback-middleware --save-dev
```

## Usage
```js
const express = require('express');
const webpackHistoryApiFallback = require('express-history-api-fallback-middleware');

const server = express();
server.use(webpackHistoryApiFallback());
```
