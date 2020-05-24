const User = require('../models/user');

getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ usuarios: users });
    }
    catch (err) {
        res.status(400).json({
            error: err
        });
    }
};

createUser = async (req, res) => {
    try {
        const { name, email, web, phone, location } = req.body;

        const newUser = new User({ name, email, web, phone, location });
        const result = await newUser.save();
        res.status(201).json({ mensaje: 'User created', resultado: result });

    } catch (e) {
        console.log(e)
        res.json(e.errmsg);
    }
};

deleteUser = async (req, res) => {
    const { id } = req.params;
    await User.findByIdAndDelete(id);
    res.json('User deleted');
}

module.exports = {
    getUsers,
    createUser,
    deleteUser
};