
module.exports = {
    add: async (req, res, next) => {
        const {id} = req.params;
        const db = req.app.get('db');
        let {user} = req.session;
        const product = await db.get_product(parseInt(id));
        if (!product[0]){
            res.status(401).send('Product Not Available!')
        } else {
            user.cart.push(product[0]);
            user.total += product[0].price
            res.status(200).send(user);
        }
    }
}