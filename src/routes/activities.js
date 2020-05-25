const { Router } = require('express');
const router = Router();

const { getActivities } = require('../controllers/activities');

router.route('/').get(getActivities)
// router.route('/').post(createUser)
// router.route('/:id').get(detailUser)
// router.route('/:id').put(updateUser)
// router.route('/:id').delete(deleteUser)

module.exports = router;