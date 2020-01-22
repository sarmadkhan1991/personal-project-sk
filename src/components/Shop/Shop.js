import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import {requestUserData, updateUserData} from '../../redux/userReducer';
import './Shop.css'

class Shop extends React.Component {
    constructor () {
        super ()

        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products').then(res => {
            this.setState({
                products: res.data
            })
        });
    }

    addToCart (product) {
        const id = product.product_id
        const {cart} = this.props.user;
        const index = cart.findIndex(elem => elem.product_id === id);
        if(index === -1){
            product.quantity++;
            this.props.user.total += product.price;
            cart.push(product);
            this.props.updateUserData(this.props.user);
        } else {
            cart[index].quantity++;
            this.props.user.total += cart[index].price;
            this.props.updateUserData(this.props.user);
        }
    }

    render () {

        const { products } = this.state;
        const mappedProducts = products.map(product => {
            const productCopy = {...product};
            return (
                <div key={productCopy.product_id} className='product-container'>
                    <img src={productCopy.img_url} alt={product.name} className='product-img'/>
                    <div>{productCopy.name}</div>
                    <div>${productCopy.price}</div>
                    <button onClick={() => this.addToCart(productCopy)}>add</button>
                </div>
            )
        })
        if (!this.props.user.id){
            return <h1>Login To Shop Please!</h1>
        }
        return (
            <div className='main-container'>
                <div className='Products-container'>
                    {mappedProducts}
                </div>
            </div>
        )
    }
}

function mapStateToProps (reduxState) {
    return {
        user: reduxState.user,
    }
}

export default connect(mapStateToProps, {requestUserData, updateUserData}) (Shop);