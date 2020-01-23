module.exports = {
    getUsers: async (req, res) => {
        const db = req.app.get('db')
        const users = await db.select_brothers(req.query.tb_id)
        return res.status(200).send(users)
    }
}