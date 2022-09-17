import React from 'react'

function Navbar() {
  return (




<>
<div className="container-fluid bg-dark p-0 foot">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small className="locname">123 Street, New York, USA</small>
                </div>
                
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small className="locname">+012 345 6789</small>
                </div>
                <div className="h-100 d-inline-flex align-items-center mx-n2">
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i className="fab fa-facebook-f"></i></a>
                    <a className="btn btn-square btn-link rounded-0 border-0 border-end border-secondary" href=""><i class="fa-brands fa-youtube"></i></a>
                </div>
            </div>
        </div>
    </div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light fixed">
    <img src="/images/logo.png" class="img-responsive" alt="Cinque Terre"  />

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Gallery</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</>
  )
}

export default Navbar
