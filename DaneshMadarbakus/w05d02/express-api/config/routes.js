const express = require('express');
const router = express.Router();

const shoesController = require('../controllers/shoes');

router.route('/shoes')
  .get(shoesController.index)
  .post(shoesController.create);
router.route('/shoes/:id/show')
  .get(shoesController.show)
  .put(shoesController.update)
  .delete(shoesController.delete);


module.exports = router;
