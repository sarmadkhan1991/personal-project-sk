import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import {requestUserData, updateUserData} from '../../redux/userReducer';

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
        console.log(product);
        console.log(this.props.user);
        const {cart} = this.props.user;
        if (cart.length > 0){
            for (let i = 0; i < cart.length; i++){
                if (cart[i].product_id === product.product_id){
                    cart[i].quantity++;
                    this.props.user.total += cart[i].price;
                    this.props.updateUserData(this.props.user);
                    console.log("trig2");
                } else {
                    product.quantity++;
                    this.props.user.total += product.price;
                    cart.push(product);
                    this.props.updateUserData(this.props.user);
                    console.log("trig3");
                }
            }
        } else {
            product.quantity++;
            this.props.user.total += product.price;
            cart.push(product);
            this.props.updateUserData(this.props.user);
            console.log("trig1");
        }
        //this.props.updateUserData(user.data);
    }

    render () {

        const { products } = this.state;
        console.log(products);
        //console.log(this.props.user);
        const mappedProducts = products.map(product => {
            const productCopy = {...product};
            return (
                <div key={productCopy.product_id}>
                    <img src={productCopy.img_url} alt={product.name}/>
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
            <div>
                <h1>
                Shop
                </h1>
                <div>
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