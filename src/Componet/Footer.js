import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className="foot">
      <div className="container-fluid  text-body  mt-5 pt-5 wow fadeIn footer-in" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Emaar 105 sector central plaza CPM 53 SCO 1st floor the chandigarh realtors</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+91 8950801205</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>amankumar.hry@gmail.com</p>
                    <div className="d-flex pt-2">
                        {/* <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a> */}
                        {/* <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fa fa-envelope me-3"></i></a> */}
                        {/* <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a> */}
                        {/* <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a> */}
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <div class="col-md-6">
                    <Link   className="btn btn-link footer-in"  to="/about">About Us</Link>
                    <Link   className="btn btn-link footer-in"  to="/contact">Contact Us</Link>
                    <Link   className="btn btn-link footer-in"  to="/Gallery">Gallery</Link>

                    {/* <a className="btn btn-link footer-in" href="/about">About Us</a> */}
                    {/* <a className="btn btn-link footer-in" href="/contact">Contact Us</a> */}
                    {/* <a className="btn btn-link footer-in" href="/Gallery">Gallery</a> */}

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Project Gallery</h5>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid rounded h-10" src="/images/herohomes.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded h-10" src="images/5.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src="images/mohal.jpg" alt="" />
                        </div>
                      
                    </div>
                </div>
              
            </div>
        </div>
    </div>

    </div>
  )
}

export default Footer
