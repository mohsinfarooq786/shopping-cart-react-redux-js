import React, { useState, useEffect } from 'react'
import { Container, Offcanvas, Card } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, increaseQuantity, decreaseQuantity } from '../featured/ShoppingCartSlice/ShoppingCartSlice';
import truncateText from '../utlis/utlis';
import Checkout from './Checkout';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const shoppingCart = useSelector((state) => state.shoppingCart.cartItems);
  const dispatch = useDispatch();
  const subtotal = shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);


  const handleIncrease = (id) => {
    dispatch(increaseQuantity(id));
  };

  const handleDecrease = (id) => {
    dispatch(decreaseQuantity(id));
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {

    dispatch(clearCart());
  };

  const cartItemCount = useSelector((state) =>
    state.shoppingCart.cartItems.reduce((totalItem, item) => totalItem + item.quantity, 0)
  );


  const productCategories = ['TV', 'Audio', 'Laptop', 'Mobile', 'Gaming', 'Appliances'];
  const navigate = useNavigate();
  const handleNavigation = (category) => {
    navigate(`/products/${category.toLowerCase()}`);
  };


  return (
    <div>
      <Container className='my-3'>
        {productCategories.map((category) => (
          <button
            key={category}
            onClick={() => handleNavigation(category)}
            className='categoryButton'>{category}</button>
        ))}
        <Link className='shoppingBag position-relative' onClick={handleShow}>
          <FaShoppingBag />
          {cartItemCount > 0 && (
            <span className="cartBadge">{cartItemCount}</span>
          )}
        </Link>
        <Offcanvas placement='end' show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className='cartTitle'>Shopping Cart</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body className='cartBody'>
            {shoppingCart.length === 0 ? (
              <div className="emptyCartMessage">
                <h6>Your Cart is Empty. Add Some Items to Continue.</h6>
              </div>
            ) : (
              shoppingCart.map((item) => (
                <Card className='cartCard d-flex align-items-center flex-row' key={item.id}>
                  <Card.Img className='cartImg' variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{truncateText(item.title, 25)}</Card.Title>
                    <span className='mainProductPrice'>Price: {item.price}$</span>
                    <div className="productQuantityBtns my-2 align-items-center d-flex justify-content-center">
                      <button onClick={() => handleDecrease(item.id)} className='btn quantityBtn'><RiSubtractFill /></button>
                      <span className='btn quantity'>{item.quantity}</span>
                      <button onClick={() => handleIncrease(item.id)} className='btn quantityBtn'><IoMdAdd /></button>
                    </div>
                    <button className='removeBtn' onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
                  </Card.Body>
                </Card>
              ))
            )}
          </Offcanvas.Body>
          {cartItemCount > 0 && (
            <div>
              <div className="totalPriceOfCart mx-4 my-2 d-flex justify-content-between">
                <h6 className="total subTotalHeading">Subtotal:</h6>
                <h6 className="total subTotalPrice">${subtotal.toFixed(2)}</h6>
              </div>
              <Link to="/checkout" className='text-decoration-none'>
                <button className='proceedBtn mx-4 mb-3'>
                  Checkout
                </button>
              </Link>
              <button onClick={handleClearCart} className='w-60 clearBtn mx-4 mb-3'>
                Clear
              </button>
            </div>
          )}
        </Offcanvas>
      </Container>
    </div>
  )
}

export default Navbar;
