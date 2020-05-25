const User = require('../models/user');

getUsers = async (req, res) => {
    try {

        const users = await User.find();
        res.status(200).json({ usuarios: users });

    }
    catch (err) {
        res.status(400).json({ error: err });
    }
}

createUser = async (req, res) => {
    try {

        const { name, email, web, phone, location } = req.body;

        const newUser = new User({ name, email, web, phone, location });
        const result = await newUser.save();

        res.status(201).json({ mensaje: 'User created', resultado: result });

    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }
}

updateUser = async (req, res) => {
    try {

        const { name, email, web, phone, location } = req.body;
        const { id } = req.params;

        const result = await User.findByIdAndUpdate(id, { name, email, web, phone, location });

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado un usuario con ese id' })

        res.json({ mensaje: 'User Updated', resultado: result });
        
    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }
}

deleteUser = async (req, res) => {
    try {
        
        const { id } = req.params;

        const result = await User.findByIdAndDelete(id);

        if(!result) return res.status(404).json({ mensaje: 'No hemos encontrado un usuario con ese id' })

        res.json({ mensaje: 'User deleted', resultado: result });

    } catch (e) {
        console.log(e)
        res.json({ mensaje: e.message });
    }

}

module.exports = {
    getUsers,
    createUser,
    updateUser,
    deleteUser
};