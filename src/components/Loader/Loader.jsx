import React, { useState, useEffect } from 'react';
import Spinner from 'react-bootstrap/Spinner';

const Loader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    loading && (
      <div className="loaderContainer">
        <Spinner variant="dark" animation="border" role="status" size="lg">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    )
  );
};

export default Loader;
