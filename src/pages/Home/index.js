import React, { useState, useEffect } from 'react';

import { bindActionCreators } from 'redux';

import { connect } from 'react-redux';

import * as CartActions from '../../store/modules/cart/actions';

import { MdAddShoppingCart } from 'react-icons/md';

import { formatPrice } from '../../utils/format';

import api from '../../services/api';

import { ProductList } from './styles';

function Home({ addToCart }) {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await api.get('/products');

            const data = response.data.map(product => ({
                ...product,
                price: formatPrice(product.price),
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
                    <span>{product.price}</span>

                    <button type="button" onClick={_ => addToCart(product)}>
                        <div>
                            <MdAddShoppingCart size={16} color="#fff" />3
                        </div>
                        <span>ADD TO CART</span>
                    </button>
                </li>
            ))}
        </ProductList>
    );
}

const mapDispatchToProps = dispatch =>
    bindActionCreators(CartActions, dispatch);

export default connect(null, mapDispatchToProps)(Home);
