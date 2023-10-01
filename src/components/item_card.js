import React from 'react';
//import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCard(props) {

  const check = async(product) =>{
    let val=[]
    val = props.Cart.filter(cartItem => cartItem.id === product.id);
    return val.length === 1?val[0].quantity:0
  }
  return (
    <div className='d-flex flex-wrap'>
      {props.data.map(Item => (
          <Card key={Item.id} style={{ width: '10rem' }} className={`m-1 ${check(Item) > 0 ? check(Item) > 0  : check(Item) > 0 }`} onClick={() => {props.addProductToCart(Item)}}>
          <Card.Img variant="top" src={`../images/${Item.image}`} />
          <Card.Body>
            <Card.Text>
              {Item.name}
            </Card.Text>
            <Card.Text className="price"> 
            ${Item.price} 
              {/* <Button variant="primary" size="sm" className="text-center buttonCard" onClick={() => {props.addProductToCart(Item)}}>
                &#xff0b;
              </Button> */}
            </Card.Text>
          </Card.Body> 
        </Card>
      ))}
    </div>
  );
}

export default ItemCard;