import React from 'react';

import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

function Header({ cartSize }) {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>My Cart</strong>
                    <span>{cartSize} Items</span>
                </div>
                <MdShoppingBasket size={35} color="#FFF" />
            </Cart>
        </Container>
    );
}

const mapStateToProps = state => ({
    cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
