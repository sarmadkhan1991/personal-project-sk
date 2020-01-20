
module.exports = {
    add: async (req, res, next) => {
        const {id} = req.params;
        const db = req.app.get('db');
        let {user} = req.session;
        if (user.cart.length > 0){
            const index = user.cart.findIndex(product => product.product_id === +id);
            if (index === -1){
                const product = await db.get_product(parseInt(id));
                if (!product[0]){
                    res.status(401).send('Product Not Available!')
                } else {
                    user.cart.push(product[0]);
                    user.cart[0].quantity = 1;
                    user.total += product[0].price
                    res.status(200).send(user);
                }
            } else {
                user.cart[index].quantity++;
                user.total += user.cart[index].price;
                res.status(200).send(user);
            }
        } else {
            const product = await db.get_product(parseInt(id));
            if (!product[0]){
                res.status(401).send('Product Not Available!')
            } else {
                user.cart.push(product[0]);
                user.cart[0].quantity = 1;
                user.total += product[0].price
                res.status(200).send(user);
            }
        }
    },
    delete: (req, res, next) => {
        const {id} = req.params;
        const {user} = req.session;
        const index = user.cart.findIndex(product => product.product_id === +id);
        if (index !== -1) {
            user.cart.splice(index, 1);
            user.total -= user.cart[index].price;
        }
        res.status(200).send(user);
    }
}