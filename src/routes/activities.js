const { Router } = require('express');
const router = Router();

const { getActivities, createActivity, detailActivity, updateActivity, deleteActivity } = require('../controllers/activities');

router.route('/').get(getActivities)
router.route('/').post(createActivity)
router.route('/:id').get(detailActivity)
router.route('/:id').put(updateActivity)
router.route('/:id').delete(deleteActivity)

module.exports = router;