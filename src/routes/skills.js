const { Router } = require('express')
const router = Router()

const { getSkills, createSkill, detailSkill, updateSkill, deleteSkill } = require('../controllers/skills')

router.route('/').get(getSkills)
router.route('/').post(createSkill)
router.route('/:id').get(detailSkill)
router.route('/:id').put(updateSkill)
router.route('/:id').delete(deleteSkill)

module.exports = router;
