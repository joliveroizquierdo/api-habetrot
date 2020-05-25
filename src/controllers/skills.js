const Skill = require('../models/skill');

getSkills = async (req, res) => {
    try {

        const skills = await Skill.find();
        res.status(200).json({ habilidades: skills });

    }
    catch (err) {
        res.status(400).json({ error: err });
    }
}

detailSkill = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await Skill.findById(id);

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado una habilidad con ese id' })

        res.status(200).json({ habilidad: result });

    }
    catch (err) {
        res.status(400).json({ error: err });
    }
}

createSkill = async (req, res) => {
    try {

        const { name, activity_id } = req.body;

        const newSkill = new Skill({ name, activity_id });
        const result = await newSkill.save();

        res.status(201).json({ mensaje: 'Skill created', resultado: result });

    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }
}

updateSkill = async (req, res) => {
    try {

        const { name } = req.body;
        const { id } = req.params;

        const result = await Skill.findByIdAndUpdate(id, { name });

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado una habilidad con ese id' })

        res.json({ mensaje: 'Skill Updated', resultado: result });
        
    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }
}

deleteSkill = async (req, res) => {
    try {
        
        const { id } = req.params;

        const result = await Skill.findByIdAndDelete(id);

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado una habilidad con ese id' })

        res.json({ mensaje: 'Skill deleted', resultado: result });

    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }

}

module.exports = {
    getSkills,
    detailSkill,
    createSkill,
    updateSkill,
    deleteSkill
}