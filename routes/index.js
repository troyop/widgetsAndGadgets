/* 
    * Author(s): Kiowa Alumno, Troy Peterson, Jo Lee White
    * Creation Date: 01/16/2019
    * Date Updated: 01/18/2019; 01/19/2019; 01/21/2018; 01/22/2019
    * Description: 
*/

var express = require('express');
var router = express.Router();

/* GET home / index page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome' });
});

/* GET home page. */
router.get('/aboutUs', function(req, res, next) {
  res.render('aboutUs', { title: 'About Our Companies' });
});

// 
router.get('/contactUs', function(req, res, next) {
  res.render('contactUs', { title: 'Questions?' });
});

// 
router.get('/gadgets', function(req, res, next) {
  res.render('gadgets', { title: 'Our Products' });
});

// 
router.get('/gadgetProducts', function(req, res, next) {
  res.render('gadgetProducts', { title: 'Our Products' });
});

// 
router.get('/smallGadget', function(req, res, next) {
  res.render('smallGadget', { title: 'Small Gadgets' });
});

// 
router.get('/medGadget', function(req, res, next) {
  res.render('medGadget', { title: 'Medium Gadgets' });
});

// 
router.get('/largeGadget', function(req, res, next) {
  res.render('largeGadget', { title: 'Large Gadgets' });
});

// 
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Product Reservstion' });
});

// 
router.get('/cart2', function(req, res, next) {
  res.render('cart2', { title: 'Product Reservstion' });
});


// 
router.get('/error', function(req, res, next) {
  res.render('error', { title: '404 Error' });
});

module.exports = router;
