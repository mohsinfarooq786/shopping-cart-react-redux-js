import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Spinner } from 'react-bootstrap'
import { RiSecurePaymentFill, RiChatPrivateFill, RiAwardLine } from "react-icons/ri";
import { fetchProduct } from '../GlobalAPI/ApIService';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../featured/ShoppingCartSlice/ShoppingCartSlice';
import { toast } from 'react-toastify';
import Loader from './Loader/Loader';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loadingItems, setLoadingItems] = useState({})
  const [successItems, setSuccessItems] = useState({})
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    setLoadingItems((prevState) => ({ ...prevState, [product.id]: true }));
    setTimeout(() => {
      dispatch(addToCart(product));
      setLoadingItems((prevState) => ({ ...prevState, [product.id]: false }));
      toast.success(`Product Added Successfully`, { autoClose: 2000 });
    }, 2000);
  };


  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await fetchProduct(id);
        setProduct(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    getProduct();
  }, [id]);

  if (!product) return <Loader />;


  return (
    <div>
      <Container className='mt-5 mb-5'>
        <Row>
          <Col lg={6}>
            <div className="detailProductImg d-flex align-items-center justify-content-center">
              <img src={product.image} alt={product.title} />
            </div>
          </Col>
          <Col lg={6}>
            <div className="detailProductInfo p-4">
              <h2 className='productName'>{product.title}</h2>
              <p className='mb-0 productPrice'>US. ${product.price}</p>
              <p className='product productColor'>Color: {product.color}</p>
              <div className="policySec">
                <p className='policy'> <RiSecurePaymentFill /> Secure Checkout</p>
                <p className='policy'> <RiAwardLine /> Satisfaction Guaranteed</p>
                <p className='policy'> <RiChatPrivateFill /> Privacy Protected</p>
              </div>
              <button
                onClick={() => handleAddToCart(product)}
                className="addToCartBtn my-2 py-3"
                aria-label={`${product.title}`}
                disabled={loadingItems[product.id]}
              >
                {loadingItems[product.id] ? (
                  <>
                    <Spinner animation="grow" size="sm" role="status" className="me-2">
                      <span className="visually-hidden"></span>
                    </Spinner>
                  </>
                ) : successItems[product.id] ? (
                  "Added Successfully!"
                ) : (
                  "Add to Cart"
                )}
              </button>
            </div>
          </Col>
          <Col className='mt-5' lg={12}>
            <div className="productDescriptionSec p-4">
              <h3 className='productDescriptionTitle py-1'>Product Description:</h3>
              <p className='productDescription mb-0'>{product.description}</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div >
  )
}

export default ProductDetail
