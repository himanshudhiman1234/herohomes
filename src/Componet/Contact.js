import React from 'react'

function Contact() {
  return (
    <div>

    <div className="container-fluid bg-light overflow-hidden px-lg-0">
        <div className="container contact px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 contact-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 ps-lg-0">
                        <h6 className="text-primary">Contact Us</h6>
                        <h1 className="mb-4">Address</h1>
                        
                    </div>
                </div>
              
            </div>
        </div>
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <img src="../images/logo.png" className="img-fluid" /> 
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3 address"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3 address"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                 
            </div>
            <div class="col-md-6">
            <img src="../images/logo.png" class="img-fluid" /> 
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3 address"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3 address"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                 
          
            </div>
        </div>
    </div>
    </div>


    </div>
  )
}

export default Contact
