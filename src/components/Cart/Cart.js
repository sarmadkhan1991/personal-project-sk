import React from 'react';
import { connect } from 'react-redux';
import {updateUserData} from '../../redux/userReducer';
import './Cart.css';

class Cart extends React.Component {

    removeFromCart(product) {
        const id = product.product_id
        const {cart} = this.props.user;
        const index = cart.findIndex(elem => elem.product_id === id);
        cart[index].quantity--;
        if (cart[index].quantity === 0){
            this.props.user.total -= cart[index].price;
            cart.splice(index, 1);
            this.props.updateUserData(this.props.user);
        } else {
            this.props.user.total -= cart[index].price;
            this.props.updateUserData(this.props.user);
        }
    }

    checkout () {
        this.props.user.cart = [];
        this.props.user.total = 0;
        this.props.updateUserData(this.props.user);
    }


    render () {
        if (!this.props.user.id){
            return <div>Login to view cart!</div>
        } else {
            const {cart} = this.props.user
            const mappedCart = cart.map(product => {
                const productCopy = {...product}
                return (
                    <div key={productCopy.product_id} className='product-container'>
                        <img src={productCopy.img_url} alt={productCopy.name} className='product-img'/>
                        <div>{productCopy.name}</div>
                        <div>Price: ${productCopy.price}</div>
                        <div>Quantity: {productCopy.quantity}</div>
                        <div>Total: ${productCopy.price * productCopy.quantity}</div>
                        <button onClick={() => this.removeFromCart(productCopy)}>Remove</button>
                    </div>
                )
            })
            return (
                <div>
                    Total: ${this.props.user.total}
                    <div className='Products-container'>{mappedCart}</div>
                    <button onClick={() => this.checkout()}>Checkout</button>
                </div>
            )
        }
    }
}

function mapStateToProps(reduxState) {
    return {
        user: reduxState.user
    }
}

export default connect(mapStateToProps, {updateUserData}) (Cart);