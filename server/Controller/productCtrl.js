
module.exports = {
    getAll: async (req, res, next) => {
        const db = req.app.get('db');
        const products = await db.get_all_products();
        if (products) {
            res.status(200).send(products)
        }
    }
}