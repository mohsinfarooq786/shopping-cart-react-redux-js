  import React, {useState, useEffect} from 'react';
  import { ToastContainer } from 'react-toastify';
  import Navbar from './components/Navbar';
  import ProductList from './components/ProductList';
  import ProductDetail from './components/ProductDetail';
  import Checkout from './components/Checkout';
  import { Route, Routes } from 'react-router-dom';
  import Footer from './components/Footer/Footer';
  import PageNotFound from './components/PageNotFound/PageNotFound';
  import AboutUs from './components/Policy Pages/AboutUs';
  import ShippingPolicy from './components/Policy Pages/ShippingPolicy';
  import Loader from './components/Loader/Loader';



  function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

    if (isLoading) {
      return <Loader />;
    }

    return (
      <div>
      <Navbar />
      <ToastContainer
      position='bottom-left'
      theme='dark'
      hideProgressBar={true}
      />
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/shipping-policy" element={<ShippingPolicy />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      <Footer />
      </div>  
    );
  }

  export default App;
