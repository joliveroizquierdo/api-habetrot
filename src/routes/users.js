const { Router } = require('express');
const router = Router();

const { getUsers, createUser, detailUser, updateUser, deleteUser } = require('../controllers/users');

router.route('/').get(getUsers)
router.route('/').post(createUser)
router.route('/:id').get(detailUser)
router.route('/:id').put(updateUser)
router.route('/:id').delete(deleteUser)

module.exports = router;
