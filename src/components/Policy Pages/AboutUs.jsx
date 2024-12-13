import React from 'react'

const AboutUs = () => {
  const AboutUs = {
    introduction: {
      title: "Welcome to BNB Store!",
      description: "Your one-stop destination for all your [product category, e.g., fashion, electronics, home essentials] needs. Founded in [Year], our mission is to bring you the best in quality, value, and convenience."
    },
    whoWeAre: {
      title: "Who We Are",
      description: "We are a passionate team of innovators, creators, and trendsetters dedicated to reshaping the online shopping experience. With a customer-first approach, we constantly strive to provide a seamless, enjoyable, and secure shopping journey for everyone."
    },
    whatWeOffer: {
      title: "What We Offer",
      description: "At BNB Store, we pride ourselves on our diverse range of products that cater to all tastes and budgets. From [specific product examples, e.g., trendy apparel and cutting-edge gadgets] to [other examples, e.g., eco-friendly home décor and wellness essentials], we’ve got it all. Our products are carefully selected to ensure quality and satisfaction."
    },
    ourCommitment: {
      title: "Our Commitment to You",
      points: [
        {
          title: "Quality Assurance",
          description: "We partner with trusted suppliers and conduct thorough quality checks to ensure you receive only the best."
        },
        {
          title: "Unmatched Value",
          description: "Enjoy competitive pricing and exclusive deals that make premium products accessible to everyone."
        },
        {
          title: "Customer Support",
          description: "Our dedicated team is here to assist you every step of the way, from pre-purchase inquiries to post-purchase support."
        },
        {
          title: "Sustainability",
          description: "We believe in responsible business practices and are committed to reducing our environmental footprint."
        }
      ]
    },
    whyChooseUs: {
      title: "Why Choose Us?",
      points: [
        {
          title: "Fast & Reliable Shipping",
          description: "Get your orders delivered to your doorstep quickly and efficiently."
        },
        {
          title: "Secure Shopping Experience",
          description: "Your privacy and security are our top priorities. Shop with confidence on our encrypted platform."
        },
        {
          title: "Community Focused",
          description: "We value your feedback and continually adapt to serve you better. Plus, a portion of our proceeds goes toward [specific cause or charity, e.g., local community projects or environmental conservation efforts]."
        }
      ]
    },
    closing: {
      description: "At BNB Store, we’re not just about selling products; we’re about building a community of happy, loyal customers. Thank you for choosing us as your trusted shopping partner. Let’s embark on this journey together!"
    }
  };



  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <h1 className='pageHeading text-center fw-bold'>About Us</h1>
            <p className='pageSubHeading'>{AboutUs.introduction.title}</p>
            <p className='pageDescription'>{AboutUs.introduction.description}</p>
            <p className='pageSubHeading'>{AboutUs.whoWeAre.title}</p>
            <p className='pageDescription'>{AboutUs.whoWeAre.description}</p>
            <p className='pageSubHeading'>{AboutUs.whatWeOffer.title}</p>
            <p className='pageDescription'>{AboutUs.whatWeOffer.description}</p>
            <p className='pageSubHeading'>{AboutUs.ourCommitment.title}</p>
            <ol className='my-4'>
              {AboutUs.ourCommitment.points.map((point, index) => (
                <li className='points' key={index}>
                  <h6 className='pointsTitle'>{point.title}</h6>
                  <p>{point.description}</p>
                </li>
              ))}
            </ol>
            <p className='pageSubHeading'>{AboutUs.whyChooseUs.title}</p>
            <ol className='my-4'>
              {AboutUs.whyChooseUs.points.map((point, index) => (
                <li className='points' key={index}>
                  <h6 className='pointsTitle'>{point.title}</h6>
                  <p>{point.description}</p>
                </li>
              ))}
            </ol>
            <p className='pageDescription'>{AboutUs.closing.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs