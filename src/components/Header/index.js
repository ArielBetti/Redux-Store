import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AiFillShopping } from 'react-icons/ai';

import { Container, Cart } from './styles';

function Header({ cartSize }) {

  return (
        <Container>
            <Link to="/">
                <h3>Redux || Store</h3>
            </Link>

            <Cart to="/cart">
                <div>
                    <strong>Meu carrinho</strong>
                    <span>{cartSize} Itens</span>
                </div>
                <AiFillShopping size={36} color="#FFF" />
            </Cart>

        </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,

}))(Header);