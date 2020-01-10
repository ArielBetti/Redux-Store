import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { Container, ProductTable } from './styles';

import { MdAddCircleOutline, MdRemoveCircleOutline, MdDelete } from 'react-icons/md';

function Cart({ cart }) {
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
             <MdRemoveCircleOutline size={20} color="#4a148c" />
           </button>
           <input type="number" readOnly value={product.amount} />
           <button type="button">
             <MdAddCircleOutline size={20} color="#4a148c" />
           </button>
           <span>R$: 200,00</span>
           <button type="button">
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
          <strong>R$: 205,00</strong>
        </div>
      </footer>
    </Container>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

export default  connect(mapStateToProps)(Cart);