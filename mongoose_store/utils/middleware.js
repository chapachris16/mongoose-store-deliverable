const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const ProductRouter = require('../controllers/product')


const middleware = (app) => {
  app.use(morgan("tiny")); //logging
  app.use(methodOverride("_method")); // override for put and delete requests from forms
  app.use(express.urlencoded({ extended: true })); // parse urlencoded request bodies
  app.use(express.static("public")); // serve files from public statically
}

  module.exports = middleware