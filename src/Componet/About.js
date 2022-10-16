import React from 'react'

function About() {
  return (
    <div>

    
    <div className="container-fluid bg-light overflow-hidden my-5 px-lg-0">
        <div className="container about px-lg-0">
            <div className="row g-0 mx-lg-0">
                <div className="col-lg-6 ps-lg-0 wow fadeIn" data-wow-delay="0.1s" >
                    <div className="position-relative h-100">
                        <img className="position-absolute img-fluid w-100 h-100"  src="../images/flat.jpg"  alt="" />
                    </div>
                </div>
                <div className="col-lg-6 about-text py-5 wow fadeIn" data-wow-delay="0.5s">
                    <div className="p-lg-5 pe-lg-0">
                        <h6 className="text-primary">About Us</h6>
                        <h1 className="mb-4">The Chandigarh Realtors</h1>
                        <p>The chandigarh Realtors is a professionally managed real estate services, property brokerage and consulting company based out of mohali which provides a wide array of services down all the verticals which includes Commercial real estate sales ( Retail space, Anchor stores, Shops, Showrooms, Food Court, Office Space, Serviced Apartments, Cinema/Multiplex screens), Residential property sales( Apartments, Builder floors, Villas, Independent houses, Penthouses, Row houses, Luxury Condominiums), Affordable housing, Leasing services, Asset management Services and Strategic Consulting. We will always provide you with the best deals available anywhere, in order to allow you to learn your growth faster and to stay up-to- date more easily.</p>
                        {/* <a href="" className="btn btn-primary rounded-pill py-3 px-5 mt-3">Explore More</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </div>
  )
}

export default About
