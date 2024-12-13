import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import truncateText from '../utlis/utlis';
import Loader from './Loader/Loader';


const Checkout = () => {
  const [loading, setLoading] = useState(false)
  const shoppingCart = useSelector((state) => state.shoppingCart.cartItems);
  const subtotal = shoppingCart.reduce((total, item) => total + item.price * item.quantity, 0);
  const cartItemCount = useSelector((state) =>
    state.shoppingCart.cartItems.reduce((totalItem, item) => totalItem + item.quantity, 0)
  );

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [])

  if (loading) return <Loader
  />;

  return (

    <div>
      <Container className='mb-5'>
        <Row>
          <Col lg={6}>
            <h4 className="contactUs">Contact</h4>
            <div className="newsletterForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="inputC email-input"
                  type="email"
                  placeholder="Email Address"
                  {...register("mail", {
                    required: "Email Address is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email address",
                    },
                  })}
                  aria-invalid={errors.mail ? "true" : "false"}
                />
                {errors.mail && <p className="message" role="alert">{errors.mail.message}</p>}

                <div className="deliveryInformation py-3">
                  <h4 className="deliveryTitle">Delivery</h4>

                  <select className="inputC" {...register("country", { required: "Country is required" })}>
                    <option value="">Select Country</option>
                    <option value="Pakistan">Pakistan</option>
                  </select>
                  {errors.country && <p className="message" role="alert">{errors.country.message}</p>}
                  <input
                    className="inputC"
                    type="text"
                    placeholder="First Name (optional)"
                    {...register("firstName", {
                      optional: "First Name is required",
                    })}
                  />
                  {errors.firstName && <p className="message py-2" role="alert">{errors.firstName.message}</p>}
                  <input
                    className="inputC"
                    type="text"
                    placeholder="Last Name"
                    {...register("lastName", {
                      required: "Last Name is required",
                      minLength: {
                        value: 2,
                        message: "Last Name must be at least 2 characters",
                      },
                    })}
                    aria-invalid={errors.lastName ? "true" : "false"}
                  />
                  {errors.lastName && <p className="message py-2" role="alert">{errors.lastName.message}</p>}

                  {/* Address */}
                  <input
                    className="inputC"
                    type="text"
                    placeholder="Enter your Address (Apartment, street, etc.)"
                    {...register("address", {
                      required: "Address is required",
                    })}
                    aria-invalid={errors.address ? "true" : "false"}
                  />
                  {errors.address && <p className="message" role="alert">{errors.address.message}</p>}

                  {/* City */}
                  <input
                    className="inputC"
                    type="text"
                    placeholder="City"
                    {...register("city", {
                      required: "City is required",
                    })}
                    aria-invalid={errors.city ? "true" : "false"}
                  />
                  {errors.city && <p className="message" role="alert">{errors.city.message}</p>}

                  {/* Postal Code */}
                  <input
                    className="inputC"
                    type="text"
                    placeholder="Postal Code"
                    {...register("postalCode", {
                      required: "Postal Code is required",
                    })}
                    aria-invalid={errors.postalCode ? "true" : "false"}
                  />
                  {errors.postalCode && <p className="message" role="alert">{errors.postalCode.message}</p>}
                </div>

                {/* Shipping Method */}
                <h4 className="contactUs">Shipping Method</h4>
                <div className="paymentDetails">
                  <select className="inputC" {...register("shippingMethod", { required: "Shipping method is required" })}>
                    <option value="">Select Shipping Method</option>
                    <option value="Standard">Standard</option>
                  </select>
                  {errors.shippingMethod && <p className="message" role="alert">{errors.shippingMethod.message}</p>}
                </div>

                {/* Payment Method */}
                <h4 className="contactUs">Payment Method</h4>
                <div className="paymentDetails">
                  <select className="inputC" {...register("paymentMethod", { required: "Payment method is required" })}>
                    <option value="">Select Payment Method</option>
                    <option value="Cash on Delivery">Cash on Delivery</option>
                  </select>
                  {errors.paymentMethod && <p className="message" role="alert">{errors.paymentMethod.message}</p>}
                  <button
                    className="subscribeBtn mt-3"
                    type="submit"
                    disabled={isSubmitting}
                    variant="primary"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Order"}
                  </button>
                </div>
              </form>
            </div>
          </Col>
          <Col className='checkoutItems' lg={6}>
            {shoppingCart.map((item) => (
              <Card key={item} className='checkoutCard d-flex flex-row justify-content-center align-items-center' >
                <Card.Img variant="top" src={item.image} alt={item.title} className='checkoutItemImage' />
                <Card.Body>
                  <Card.Title className='checkoutItemTitle'>{truncateText(item.title, 30)}</Card.Title>
                  <span className='checkoutItemColor d-block'>{item.color}</span>
                  <span className='checkoutItemPrice'>${item.price}</span>
                </Card.Body>
              </Card>
            ))}
            <div div className="totalPriceOfCart my-2 d-flex justify-content-between">
              <h6 className="total subTotalHeading">Subtotal
                {cartItemCount > 0 && (
                  <span className="totalCartItems px-2">. {cartItemCount} Items</span>
                )}
              </h6>
              <h6 className="total subTotalPrice">${subtotal}</h6>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  );
};

export default Checkout;
