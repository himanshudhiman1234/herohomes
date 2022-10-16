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
                <img src="../images/chandigarh.png" className="img-fluid logs" /> 
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3 address"></i>Plot number - 1, Sector-88, Mohali </p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3 address"></i>+91 9056069899</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>sales@herohomesflats.com</p>
                 
            </div>
            <div class="col-md-6">
            <img src="../images/logo.png" class="img-fluid" /> 
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3 address"></i>Sector-88, Mohali, Punjab, India</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3 address"></i>+1-400-222-4545</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>hello@capital.com</p>
                 
          
            </div>
        </div>
    </div>
    </div>

    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container feature px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 feature-text py-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="p-lg-5 ps-lg-0">
                        <h6 className="text-primary">Why Choose Us!</h6>
                        <h1 className="mb-4">30 years of experience</h1>
                        <p className="mb-4 pb-2">We have been working in this field for 30 years and we are really excited to move forward with more new things.</p>
                        <div className="row g-4">
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    {/* <div className="btn-lg-square bg-primary rounded-circle"> */}
                                        {/* <i className="fa fa-check text-white"></i> */}
                                    {/* </div> */}
                                    <div className="ms-4">
                                        <p className="mb-0"><b>13km</b><br /> Chandigarh International Airport</p>
                                        {/* <h5 className="mb-0">Services</h5> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="d-flex align-items-center">
                                    {/* <div className="btn-lg-square bg-primary rounded-circle"> */}
                                        {/* <i className="fa fa-user-check text-white"></i> */}
                                    {/* </div> */}
                                    <div className="ms-4">
                                        <p className="mb-0"><b>8km</b>
<br />Railway Station SAS Nagarpert</p>
                                        {/* <h5 className="mb-0">Workers</h5> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6  mt-5">
                                <div className="d-flex align-items-center">
                                    {/* <div className="btn-lg-square bg-primary rounded-circle"> */}
                                        {/* <i className="fa fa-drafting-compass text-white"></i> */}
                                    {/* </div> */}
                                    <div className="ms-4">
                                        <p className="mb-0"><b>9km</b>
<br />ISBT Chandigarh
</p>
                                        {/* <h5 className="mb-0">Consultation</h5> */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-6 mt-5">
                                <div className="d-flex align-items-center">
                                    {/* <div className="btn-lg-square bg-primary rounded-circle"> */}
                                        {/* <i className="fa fa-headphones text-white"></i> */}
                                    {/* </div> */}
                                    <div className="ms-4">
                                        <p className="mb-0"><b>5km</b>
<br />PCA Stadium</p>
                                        {/* <h5 className="mb-0">Support</h5> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-6 pe-lg-0 wow fadeIn" data-wow-delay="0.5s" >
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100" src="../images/loca-bg.png"  alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Contact
