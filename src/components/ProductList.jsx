import React, { useState, useEffect } from 'react';
import { Container, Card, Row, Col, Spinner } from 'react-bootstrap'
import { fetchProducts } from './../GlobalAPI/ApIService';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../featured/ShoppingCartSlice/ShoppingCartSlice';
import truncateText from '../utlis/utlis';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import truncateText from './../utlis/utlis';


const ProductList = () => {
  const { category } = useParams();
  const [products, setProducts] = useState([]);
  const [loadingItems, setLoadingItems] = useState({})
  const [successItems, setSuccessItems] = useState({})
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    setLoadingItems((prevState) => ({ ...prevState, [product.id]: true }));
    setTimeout(() => {
      dispatch(addToCart(product));
      setLoadingItems((prevState) => ({ ...prevState, [product.id]: false }));
      toast.success(`Product Added Successfully`, { autoClose: 2000 });
    }, 1500);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts(category);
        if (Array.isArray(data)) {
          setProducts(data);
        } else {
          throw new Error('Fetched data is not an array');
        }
        setProducts(data);
      } catch (error) {
        setError(error);
      }
    };

    getProducts();
  }, [category]);

  return (
    <div>
      <Container className='mt-4 mb-4 productListContainer'>
        <Row className='gy-5'>
          {products.map((product) => (
            <Col lg={3} md={4} sm={6} xs={12} key={product.id}>
              <Card className="mainCard">
                <Link className='text-decoration-none' to={`/product/${product.id}`}>
                  {product.onSale && (
                    <div className="SALE px-2 py-1 text-white fw-bold">Sale</div>
                  )}
                  <Card.Img className="mainCardImg" variant="top" src={product.image} />
                </Link>
                <Card.Body className="p-3">
                  <span className="productCategory my-3">{product.category}</span>
                  <Card.Title className="mainProductName"> {truncateText(product.title, 40)}</Card.Title>
                  <p className="mainProductBrand my-1">Brand: {product.brand}</p>
                  <p className="mainProductPrice my-1">
                    Price: $
                    {product.discount
                      ? (
                        product.price -
                        (product.price * product.discount) / 100
                      ).toFixed(2)
                      : product.price.toFixed(2)}
                    <span className='fw-bold badge mx-3'>{product.discount}% OFF</span>
                  </p>
                  <button
                    onClick={() => handleAddToCart(product)}
                    className="addToCart my-3"
                    aria-label={`${product.title}`}
                    disabled={loadingItems[product.id]}
                  >
                    {loadingItems[product.id] ? (
                      <>
                        <Spinner animation="border" size="sm" role="status" className="me-2">
                          <span className="visually-hidden">Loading...</span>
                        </Spinner>
                        Adding To Cart ...
                      </>
                    ) : successItems[product.id] ? (
                      "Added Successfully!"
                    ) : (
                      "Add to Cart"
                    )}
                  </button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div >
  )
}

export default ProductList
