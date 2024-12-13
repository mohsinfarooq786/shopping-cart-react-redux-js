import React from 'react'
import { NavLink, NavItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
const Footer = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm();

  const onSubmit = (data) => {
    setTimeout(() => {
      toast.success('You have successfully subscribed to our newsletter!');
      reset();
    }, 2000);
  };

  const footerLinks = [
    {
      title: 'About Us',
      link: '/about-us'
    },
    {
      title: 'Contact Us',
      link: '/contact-us'
    },
    {
      title: 'Refund Policy',
      link: '/refund-policy'
    },
    {
      title: 'Shipping Policy',
      link: '/shipping-policy'
    },
    {
      title: 'Terms & Conditions',
      link: '/terms-and-conditions'
    },
    {
      title: 'Privacy Policy',
      link: '/privacy-policy'
    },
  ]
  return (
    <div>
      <footer className='footer mt-5 text-white py-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4'>
              <h3 className='footer-heading mb-4'>Useful Links</h3>
              {footerLinks.map((item, index) => {
                return (
                  <NavLink as={Link} key={index} to={item.link}>
                    <NavItem className='footerLink py-1'>
                      {item.title}
                    </NavItem>
                  </NavLink>
                )
              })}
            </div>
            <div className="col-lg-8">
              <h3 className='footerTouchHeading fw-thin'>Let's Get in Touch</h3>
              <p className='newsLetterTagline'>Sign up for our newsletter and receive 10% off your</p>
              <form disabled={isSubmitting} onSubmit={handleSubmit(onSubmit)}>
                <input
                  className="newsletterInput email-input"
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

                {errors.mail && <p className="message py-2" role="alert">{errors.mail.message}</p>}
              </form>
            </div>
          </div>
        </div>
      </footer >
    </div >
  )
}

export default Footer;
