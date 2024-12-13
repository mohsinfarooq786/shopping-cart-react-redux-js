import React from 'react';

const ShippingPolicy = () => {

  const shippingPolicyContent = {
    introduction: {
      title: "Thank you for shopping with BNB Store!",
      description: "We are committed to providing you with a seamless and enjoyable shopping experience. Please review our shipping policy to understand how we handle the delivery of your orders."
    },
    processingTime: {
      title: "Processing Time:",
      description: "Orders are typically processed within 1 day after payment confirmation. Please note that weekends and holidays may affect processing times. We strive to get your order ready for shipment as quickly as possible."
    },
    shippingMethod: {
      title: "Shipping Method:",
      description: "We offer standard shipping for all orders. Our chosen carriers ensure reliable and timely delivery to your doorstep. Once your order has been shipped, you will receive a confirmation message with tracking information to monitor the progress of your package."
    },
    deliveryTime: {
      title: "Delivery Time:",
      description: "The estimated delivery time may vary based on your location. Generally, you can expect your order to arrive within 2 to 3 business days after it has been shipped. Please note that unforeseen circumstances such as weather conditions or customs delays may impact delivery times."
    },
    shippingDestinations: {
      title: "Shipping Destinations:",
      description: "Currently, we offer shipping in Pakistan only. If you are located outside of the country and are interested in placing an order, please contact our customer support team to discuss possible shipping arrangements."
    },
    shippingCosts: {
      title: "Shipping Costs:",
      description: "Great news! We provide free shipping on all orders within our designated shipping areas. You won't incur any additional charges for standard shipping."
    },
    orderTracking: {
      title: "Order Tracking:",
      description: "Once your order has been dispatched, you will receive a message with a tracking number. You can use this number to track your order in real-time and receive updates on its delivery status."
    },
    shippingAddress: {
      title: "Shipping Address:",
      description: "Please ensure that your shipping address is accurate and complete. We are not responsible for orders shipped to incorrectly provided addresses. If you need to make changes to your shipping address, please contact us as soon as possible."
    },
    orderConfirmation: {
      title: "Order Confirmation:",
      description: "You will receive an order confirmation email shortly after placing your order. If you do not receive this email, please check your spam folder or contact our customer support team."
    },
    closing: {
      description: "If you have any questions or concerns regarding our shipping policy, feel free to reach out to our customer support team at Support@bnbstore.com. Thank you for choosing BNB Store! We appreciate your business."
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className='pageHeading text-center fw-bold'>Shipping Policy</h1>
            <span className='pageSubHeading'>{shippingPolicyContent.introduction.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.introduction.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.processingTime.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.processingTime.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.shippingMethod.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.shippingMethod.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.deliveryTime.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.deliveryTime.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.shippingDestinations.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.shippingDestinations.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.shippingCosts.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.shippingCosts.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.orderTracking.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.orderTracking.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.shippingAddress.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.shippingAddress.description}</p>
            <span className='pageSubHeading'>{shippingPolicyContent.orderConfirmation.title}</span>
            <p className='pageDescription'>{shippingPolicyContent.orderConfirmation.description}</p>
            <p className='pageDescription'>{shippingPolicyContent.closing.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingPolicy;
