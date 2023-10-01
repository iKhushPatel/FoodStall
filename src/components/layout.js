import React, {  useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import MyTabs from './tabs';
import Cart from './Cart';
import Navbar from 'react-bootstrap/Navbar';
import fs from 'fs'; 

function MainLayout (props){

    const [cart, setCart] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0.0);

    const addProductToCart = async(product) =>{
        // check if the adding product exist
        let findProductInCart = await cart.find(i=>{
            return i.id === product.id
        });
        if(findProductInCart){
            let newCart = [];
            let newItem;
            cart.forEach(cartItem => {
                if(cartItem.id === product.id){
                    newItem = {
                        ...cartItem,
                        quantity: cartItem.quantity + 1,
                        totalAmount: parseFloat(cartItem.price * (cartItem.quantity + 1)).toFixed(2)
                    }
                    newCart.push(newItem);
                }else{
                    newCart.push(cartItem);
                }
            });
            setCart(newCart);
        }else{
            let addingProduct = {
                ...product,
                'quantity': 1,
                'totalAmount': product.price,
            }
            setCart([...cart, addingProduct]);
        }
    }
    
    const removeProduct = async(product) =>{
        const newCart = [];
        cart.forEach(cartItem => {
            if(cartItem.id === product.id){
                if(cartItem.quantity > 1){
                    cartItem.quantity = cartItem.quantity - 1;
                    newCart.push(cartItem);
                }
            }
            else{
                newCart.push(cartItem);
            }
        });
        //cart.filter(cartItem => cartItem.id !== product.id);
        setCart(newCart);
    }

    const clearCart = async() => {
        
        setCart([]);
        setTotalAmount(0.0);
    }

    useEffect(() => {
        let newTotalAmount = 0.0;


        cart.forEach(icart => {
            newTotalAmount = parseFloat(parseFloat(newTotalAmount) + parseFloat(icart.totalAmount)).toFixed(2);
        });
        setTotalAmount(newTotalAmount);
        },[cart])
    return (
        <div>
            <Container>
                <Row>
                    <Container>
                    <Navbar expand="lg" variant="light" bg="light">
                        <Container>
                        <Navbar.Brand href="#">SMVS Food Stall</Navbar.Brand>
                        </Container>
                    </Navbar>
                    </Container>
                </Row>
                <Row>
                    <Col sm={8}><MyTabs Custom = {props.Custom} addProductToCart = {addProductToCart} Cart = {cart}/></Col>
                    <Col sm={4}><Cart Cart = {cart} removeProduct = {removeProduct} totalAmount={totalAmount} clearCart={clearCart}/></Col>
                </Row>
            </Container>
        </div>
    )
}

export default MainLayout;