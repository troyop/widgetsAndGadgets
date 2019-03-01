/* 
    * Author(s): Kiowa Alumno, Troy Peterson, Jo Lee White
    * Creation Date: 01/16/2019
    * Date Updated: 01/16/2019
    * Description: 
*/
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
