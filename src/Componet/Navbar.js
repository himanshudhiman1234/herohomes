import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (




<>
<div className="container-fluid bg-dark p-0 foot">
        <div className="row gx-0 d-none d-lg-flex">
            <div className="col-lg-7 px-5 text-start">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-map-marker-alt text-primary me-2"></small>
                    <small className="locname ml-1">Emaar 105 sector central plaza CPM 53 SCO 1st floor the chandigarh realtors </small>
                </div>
                
            </div>
            <div className="col-lg-5 px-5 text-end">
                <div className="h-100 d-inline-flex align-items-center me-4">
                    <small className="fa fa-phone-alt text-primary me-2"></small>
                    <small className="locname">+91 8950801205</small>
                </div>
  
            </div>
        </div>
    </div>
    <nav class="navbar fixed-top navbar-expand-lg navbar-light bg-light fixed">
    <Link  class="nav-link text-center"  to="/"><img src="/images/logo.png" class="img-responsive" alt="Cinque Terre"  />
    </Link>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item active">
          
        <Link  class="nav-link"  to="/">Home</Link>

          {/* <a href="/">Home <span class="sr-only">(current)</span></a> */}
        </li>
        <li class="nav-item">
        <Link  class="nav-link" to="/about">About</Link>
          {/* <a href="/about">About</a> */}
        </li>
        <li class="nav-item">
        <Link  class="nav-link"  to="/gallery">Gallery</Link>

          {/* <a class="nav-link" href="/gallery">Gallery</a> */}
        </li>
        <li class="nav-item">
          {/* <a class="nav-link" href="/contact"></a> */}
          <Link  class="nav-link"  to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
</>
  )
}

export default Navbar
