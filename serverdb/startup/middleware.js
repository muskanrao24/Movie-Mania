const express = require('express');
var cors = require('cors')

module.exports = app => {
  // middlewares
  app.use(express.urlencoded({ extened: true }));
  app.use(express.static("public"));
  app.set("view engine", "ejs");
  app.use(cors());
}
