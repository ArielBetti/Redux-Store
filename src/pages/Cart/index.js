import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, ProductTable } from './styles';
import { bindActionCreators } from 'redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';


import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';
import produce from 'immer';

function Cart({ cart, removeFromCart, updateAmount, total }) {

  function increment(product) {
    updateAmount(product.id, product.amount + 1);
  }

  function decrement(product) {
    updateAmount(product.id, product.amount - 1);
  }

  return (
    <Container>
      <ProductTable>
        {cart.map(product => (
          <div className="ProductMargin">
            <div className="ProductColumn">
              <img src={product.image} alt={product.title} srcset="" />
              <strong>{product.title}</strong>
              <span>{product.priceFormatted}</span>
            </div>

            <div>
              <button type="button">
                <MdRemoveCircleOutline size={20} color="#4a148c" onClick={() => decrement(product)} />
              </button>
              <input type="number" readOnly value={product.amount} />
              <button type="button">
                <MdAddCircleOutline size={20} color="#4a148c" onClick={() => increment(product)} />
              </button>
              <span>{product.subtotal}</span>
              <button type="button" onClick={() => removeFromCart(product.id)}>
                <MdDelete size={20} color="#4a148c" />
              </button>
            </div>
          </div>
        ))}
      </ProductTable>
      <footer>
        <button type="button">FINALIZAR PEDIDO</button>
        <div className="ProductColumn">
          <span>Total</span>
          <strong>{total}</strong>
        </div>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount)
  })),
  total: formatPrice(state.cart.reduce((total, product) => {
    return total + product.price * product.amount;
  }, 0)),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);