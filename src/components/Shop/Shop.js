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

    async addToCart (id) {
        let user = await axios.post(`/api/cart/${id}`);
        this.props.updateUserData(user.data);
    }

    render () {

        const { products } = this.state;
        console.log(products);
        console.log(this.props.user);
        const mappedProducts = products.map(product => {
            return (
                <div key={product.product_id}>
                    <img src={product.img_url} alt={product.name}/>
                    <div>{product.name}</div>
                    <div>${product.price}</div>
                    <button onClick={() => this.addToCart(product.product_id)}>add</button>
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