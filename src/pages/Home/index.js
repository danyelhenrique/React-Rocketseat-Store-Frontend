import React, { useState, useEffect } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import { MdAddShoppingCart } from 'react-icons/md';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../utils/format';

import api from '../../services/api';

import { ProductList } from './styles';

function Home({ addToCartRequest, amount }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                priceFormated: formatPrice(product.price),
            }));

            setProducts(data);
        }
        getData();
    }, []);

    return (
        <ProductList>
            {products.map(product => (
                <li key={product.id}>
                    <img src={product.image} alt={product.title} />
                    <strong>{product.title}</strong>
                    <span>{product.priceFormated}</span>

                    <button
                        type="button"
                        onClick={() => addToCartRequest(product.id)}
                    >
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" />
                            {amount[product.id] || 0}
                        </div>
                        <span>ADD TO CART</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

const mapStateToProps = state => ({
    amount: state.cart.reduce((amount, product) => {
        amount[product.id] = product.amount;
        return amount;
    }, {}),
});

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Home);
