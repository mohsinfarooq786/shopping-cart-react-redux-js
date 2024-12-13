import { useState, useEffect } from 'react';
import { Container, Nav, Navbar, Offcanvas, Card } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaShoppingBag } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import truncateText from '../../utlis/utlis';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, addToCart, clearCart, increaseQuantity, decreaseQuantity } from '../../featured/ShoppingCartSlice/ShoppingCartSlice';
const NavbarMain = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const shoppingCart = useSelector((state) => state.shoppingCart.cartItems);
  const dispatch = useDispatch();
  const location = useLocation();
  const subtotal = shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);

  useEffect(() => {
    if (location.pathname === '/checkout') {
      handleClose();
    }
  }, [location.pathname])

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


  const navItem = [
    { title: 'Men', link: '/men' },
    { title: 'Women', link: '/women' },
    { title: 'New Arrivals!', link: '/new-arrival' },
    { title: 'Shoes', link: '/shoes' },
    { title: 'Accessories', link: '/accessories' },
    { title: 'Winter Collection', link: '/winter-collection' },
  ];



  const cartItemCount = useSelector((state) =>
    state.shoppingCart.cartItems.reduce((totalItem, item) => totalItem + item.quantity, 0)
  );


  return (
    <Navbar expand="lg" className='navbarMain'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          <svg fill="none" height="48" viewBox="0 0 40 48" width="40" xmlns="http://www.w3.org/2000/svg">
            <g clipRule="evenodd" fill="#fff" fillRule="evenodd">
              <path d="m34.5868 8.40061-9.6868-2.59556c-.6687-.17919-1.2108.23679-1.2108.92911v10.02854c0 .6923.5421 1.3988 1.2108 1.578l9.6868 2.5955c.6687.1792 1.2109-.2368 1.2109-.9291v-10.02848c0-.69232-.5422-1.39882-1.2109-1.57801zm-9.6868-6.35625c-2.6749-.71674-4.8434.94718-4.8434 3.71647v10.02847c0 2.7693 2.1685 5.5953 4.8434 6.312l9.6868 2.5956c2.6749.7168 4.8434-.9472 4.8434-3.7165v-10.0284c0-2.76934-2.1685-5.59533-4.8434-6.31207z" opacity=".5" />
              <path d="m26.9812 16.5707-12.1085-3.2444c-.6687-.1792-1.2109.2368-1.2109.9291v12.5356c0 .6923.5422 1.3988 1.2109 1.578l12.1085 3.2445c.6687.1792 1.2108-.2368 1.2108-.9291v-12.5356c0-.6924-.5421-1.3989-1.2108-1.5781zm-12.1085-7.0051c-2.6749-.71674-4.8434.9472-4.8434 3.7165v12.5356c0 2.7693 2.1685 5.5953 4.8434 6.312l12.1085 3.2445c2.6749.7167 4.8433-.9472 4.8433-3.7165v-12.5356c0-2.7693-2.1684-5.5953-4.8433-6.312z" opacity=".7" />
              <path d="m19.3736 24.7409-14.53021-3.8934c-.66873-.1792-1.21085.2368-1.21085.9291v15.0428c0 .6923.54212 1.3988 1.21085 1.578l14.53021 3.8933c.6687.1792 1.2108-.2368 1.2108-.9291v-15.0427c0-.6923-.5421-1.3988-1.2108-1.578zm-14.53021-7.6541c-2.67493-.7167-4.84339.9472-4.84339 3.7165v15.0427c0 2.7693 2.16846 5.5953 4.84339 6.3121l14.53021 3.8933c2.6749.7168 4.8433-.9472 4.8433-3.7164v-15.0428c0-2.7693-2.1684-5.5953-4.8433-6.312z" />
            </g>
          </svg>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navItem.map((item, index) => (
              <Nav.Link className="navItemMain" as={Link} key={index} to={item.link}>
                {item.title}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
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
    </Navbar>
  );
};

export default NavbarMain;
