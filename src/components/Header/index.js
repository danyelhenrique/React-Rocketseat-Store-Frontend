import React from 'react';

import { Link } from 'react-router-dom';

import {  MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/images/logo.svg';

export default function Header() {
    return (
        <Container>
            <Link to="/">
                <img src={logo} alt="Logo" />
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>My Cart</strong>
                    <span>3 Items</span>
                </div>
                <MdShoppingBasket size={35} color="#FFF"/>
            </Cart>
        </Container>
    );
}
