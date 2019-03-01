/* 
    * Author(s): Kiowa Alumno, Troy Peterson, Jo Lee White
    * Creation Date: 01/16/2019
    * Date Updated: 01/18/2019; 01/19/2019; 01/21/2018; 01/22/2019; 01/23/2019
    * Description: 
*/

var express = require('express');
var router = express.Router();


/* Pulls up the index page of the website. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

/* Pulls up the index page of the website. */
router.get('/index2', function(req, res, next) {
  res.render('index2', { title: 'Welcome' });
});

/* Pulls up the About Us page of the website. */
router.get('/aboutUs', function(req, res, next) {
  res.render('aboutUs', { title: 'About Our Companies' });
});

// Pulls up the Contact Us page. 
router.get('/contactUs', function(req, res, next) {
  res.render('contactUs', { title: 'Questions?' });
});

// Pulls up the Products/Gadgets page of the website.
router.get('/gadgets', function(req, res, next) {
  res.render('gadgets', { title: 'Our Products' });
});

// Pulls up the Products/Gadgets page of the website.
router.get('/gadgets2', function(req, res, next) {
  res.render('gadgets2', { title: 'Our Products' });
});

// Pulls up the Products/Gadgets page of the website.
router.get('/gadgetProducts', function(req, res, next) {
  res.render('gadgetProducts', { title: 'Our Products' });
});

// Pulls up the page with information about the Small Gadgets.
router.get('/smallGadget', function(req, res, next) {
  res.render('smallGadget', { title: 'Small Gadgets' });
});

// Pulls up the page with information about the Small Gadgets.
router.get('/medGadget', function(req, res, next) {
  res.render('medGadget', { title: 'Medium Gadgets' });
});

// Pulls up the page with information about the Small Gadgets.
router.get('/largeGadget', function(req, res, next) {
  res.render('largeGadget', { title: 'Large Gadgets' });
});

// Pulls up the Shopping Cart with or without items that the customer wants to order.
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Shopping Cart' });
});

// Pulls up the Shopping Cart with or without items that the customer wants to order.
router.get('/cart2', function(req, res, next) {
  res.render('cart2', { title: 'Shopping Cart' });
});

// Pulls up the Shopping Cart with or without items that the customer wants to order.
router.get('/cart3', function(req, res, next) {
  res.render('cart3', { title: 'Shopping Cart' });
});

// Pulls up the Order Form with the items the customer wants to order.
router.get('/orderfrm', function(req, res, next) {
  res.render('orderfrm', { title: 'Order Form' });
});

// Pulls up the Shopping Cart with or without items that the customer wants to order.
router.get('/error', function(req, res, next) {
  res.render('error', { title: '404 Error' });
});

// Pulls up the Shopping Cart with or without items that the customer wants to order.
router.get('/test', function(req, res, next) {
  res.render('test', { title: '404 test' });
});


module.exports = router;