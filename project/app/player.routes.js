// Requirements
var express = require('express'); 
var router = express.Router(); 

var player_controller = require('../controllers/player.controller'); 

router.get('/:id', player_controller.player_detail);
router.get('/', player_controller.player_list);
router.post('/', player_controller.player_create);
router.patch('/:id', player_controller.player_edit); 
router.delete('/:id', player_controller.player_delete);
module.exports = router;