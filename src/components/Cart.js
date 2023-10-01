import React from 'react';
import Button from 'react-bootstrap/Button';

function Cart(props) {
  const items = props.Cart;
    return (
      <div style={{height: "100%", position: "relative"}}>
        <h2>Cart</h2>
        <ul style={{width: "100%"}}>
          {
            items.map((item)=> 
            <li key={item.id}>
              {item.name} 
              <span style={{position: 'absolute', right:'130px',}}> 
                X{item.quantity}
              </span>
              <span style={{position: 'absolute', right:'35px',}}>CAD {item.totalAmount}</span>
              <Button variant="danger" size="sm" className="text-center buttonCard buttonCart" onClick={() => {props.removeProduct(item)}}>
                &mdash;
              </Button>
            </li>
            )
          }
        </ul>
        <Button variant="primary" size="lg" style={{width: "100%",position: "absolute", bottom: 0}} onClick={() => {props.clearCart()}}> 
          Total Amount : {props.totalAmount} CAD
        </Button>
      </div>
    );
  }
  
  export default Cart;