const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body
        const db = req.app.get('db')
        const checkName = await db.find_username([username])
        if (checkName.length > 0) {
            return res.status(200).send({message: 'Username in use'})
        }
        else{
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const newUser = await db.insert_user({username, hash, 
                //default profile pic is tim mcgraw obviously
                tb_pic:'https://ih1.redbubble.net/image.330935162.3072/flat,128x,075,f-pad,128x128,f8f8f8.u1.jpg', 
                //truck pic default
                tb_truck:'https://i.ytimg.com/vi/V7vsCL1YCdA/hqdefault.jpg'})
            req.session.user = newUser[0]
            return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        }
    },
    login: async (req, res) => {
        const db = req.app.get('db')
        const {username, password} = req.body
        const user = await db.find_username([username])
        if (user.length === 0) {
            console.log('bingbong')
            return res.status(200).send({message: 'Username not found'})
        }
        const result = bcrypt.compareSync(password, user[0].hash)
        if (result) {
            req.session.user = user[0]
            return res.status(200).send({message: 'Logged in', user: req.session.user, loggedIn: true})
        }
    },
    logout: async (req, res) => {
        req.session.destroy()
        res.status(200).send({message: 'Logged out', loggedIn: false})
    },
    authMe: async (req, res) => {
        return res.status(200).send({message: 'component refreshed', user: req.session.user, loggedIn: true})
    }
}