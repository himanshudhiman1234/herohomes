import React from 'react'

function Gallery() {
  return (
    <div>
        
    <div className="container-xxl py-5">
        <div className="container">
            <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" >
                <h6 className="text-primary">Site Plan</h6>
                <h1 className="mb-4">Master Plan</h1>
            </div>
            <div class="row">
              <div class="col-md-12">
                <img src="../images/layout.jpg" class="img-fluid" />
              </div>
            </div>
        </div>
    </div>
      <div class="container">
  <h2><b>Our  Gallery/</b>
   Gallery</h2>
  
  <div id="carousel-example-2" class="carousel slide carousel-fade" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carousel-example-2" data-slide-to="0" class="active"></li>
      <li data-target="#carousel-example-2" data-slide-to="1"></li>
      <li data-target="#carousel-example-2" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner" role="listbox">
      <div class="carousel-item active">
        <div class="view">
          <img class="d-block w-100" src="../images/mohal.jpg" 
            alt="First slide" />
          <div class="mask rgba-black-light"></div>
        </div>
        <div class="carousel-caption">
        </div>
      </div>
      <div class="carousel-item">
        <div class="view">
          <img class="d-block w-100" src="../images/hlo.jpg"
            alt="Second slide" />
          <div class="mask rgba-black-strong"></div>
        </div>
        <div class="carousel-caption">
       
        </div>
      </div>
      <div class="carousel-item">
        <div class="view">
          <img class="d-block w-100" src="../images/herohomes.jpg"
            alt="Third slide" />
          <div class="mask rgba-black-slight"></div>
        </div>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-example-2" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carousel-example-2" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
   
</div>
    </div>
  )
}

export default Gallery
