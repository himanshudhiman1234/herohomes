import React from 'react'

function Footer() {
  return (
    <div className="foot">
      <div className="container-fluid  text-body  mt-5 pt-5 wow fadeIn footer-in" data-wow-delay="0.1s">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Address</h5>
                    <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                    <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                    <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                    <div className="d-flex pt-2">
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                        <a className="btn btn-square btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Quick Links</h5>
                    <div class="col-md-6">
                    <a className="btn btn-link" href="">About Us</a>
                    <a className="btn btn-link" href="">Contact Us</a>
                    <a className="btn btn-link" href="">Support</a>

                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <h5 className="text-white mb-4">Project Gallery</h5>
                    <div className="row g-2">
                        <div className="col-4">
                            <img className="img-fluid rounded" src="img/gallery-1.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src="img/gallery-2.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src="img/gallery-3.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src="img/gallery-4.jpg" alt="" />
                        </div>
                        <div class="col-4">
                            <img className="img-fluid rounded" src="img/gallery-5.jpg" alt="" />
                        </div>
                        <div className="col-4">
                            <img className="img-fluid rounded" src="img/gallery-6.jpg" alt="" />
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
