import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { AiFillShopping } from 'react-icons/ai';
import reduxIcon from '../../assets/images/redux.svg';

import { Container, Cart } from './styles';

function Header({ cartSize }) {

  return (
        <Container>
            <Link to="/" className="ReduxIcon">
                <span>Redux</span>
                <img src={reduxIcon} alt="Redux Icon"/>
                <span>Store</span>
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