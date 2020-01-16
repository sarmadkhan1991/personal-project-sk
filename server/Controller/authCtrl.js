const bcrypt = require('bcryptjs');

module.exports = {
    register: async (req, res, next) => {
        const { email, password, firstName, lastName } = req.body;
        const db = req.app.get('db');
        const result = await db.get_user(email);
        const existingUser = result[0];
        if (existingUser){
            res.status(409).send('Email taken!');
        } else {
            const salt = await bcrypt.genSalt(12);
            const hash = await bcrypt.hashSync(password, salt);
            const registeredUser = await db.register_user([email, hash, firstName, lastName]);
            const user = registeredUser[0];
            req.session.user = {
                id: user.user_id,
                email: user.email,
                firstName: user.first_name,
                lastName: user.last_name
            };
            res.status(200).send(req.session.user);
        }
    },
    login: async (req, res, next) => {
        const { email, password } = req.body;
        const db = req.app.get('db');
        const foundUser = await db.get_user(email);
        const user = foundUser[0];
        if (!user) {
            res.status(401).send('User not found. Please register as a new user before loggin in.');
        } else {
            const isAuthenticated = bcrypt.compare(password, user.hash);
            if (!isAuthenticated){
                res.status(403).send('Incorrect password');
            } else {
                req.session.user = {
                    id: user.user_id,
                    email: user.email,
                    firstName: user.first_name,
                    lastName: user.last_name,
                    cart: [],
                    total: 0
                }
                res.status(200).send(req.session.user);
            }
        }
    },
    logout: async (req, res, next) => {
        req.session.destroy();
        res.sendStatus(200);
    },
    userData: (req, res) => {
        const { user } = req.session;
        if (user) {
            res.status(200).send(user);
        } else {
            res.sendStatus(401);
        }
    }
}