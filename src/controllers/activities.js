const Activity = require('../models/activity');

getActivities = async (req, res) => {
    try {

        const activities = await Activity.find();
        res.status(200).json({ actividades: activities });

    }
    catch (err) {
        res.status(400).json({ error: err });
    }
}

detailActivity = async (req, res) => {
    try {

        const { id } = req.params;

        const result = await Activity.findById(id);

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado una actividad con ese id' })

        res.status(200).json({ actividad: result });

    }
    catch (err) {
        res.status(400).json({ error: err });
    }
}

createActivity = async (req, res) => {
    try {

        const { name, user_id } = req.body;

        const newActivity = new Activity({ name, user_id });
        const result = await newActivity.save();

        res.status(201).json({ mensaje: 'Activity created', resultado: result });

    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }
}

updateActivity = async (req, res) => {
    try {

        const { name, gold_rating, silver_rating } = req.body;
        const { id } = req.params;

        const result = await Activity.findByIdAndUpdate(id, { name, gold_rating, silver_rating });

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado una actividad con ese id' })

        res.json({ mensaje: 'Activity Updated', resultado: result });
        
    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }
}

deleteActivity = async (req, res) => {
    try {
        
        const { id } = req.params;

        const result = await Activity.findByIdAndDelete(id);

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado una actividad con ese id' })

        res.json({ mensaje: 'Activity deleted', resultado: result });

    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }

}

module.exports = {
    getActivities,
    detailActivity,
    createActivity,
    updateActivity,
    deleteActivity
}