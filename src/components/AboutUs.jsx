import React from 'react'

const AboutUs = () => {
  return (
  <div>
     <div className="section-page-title" style={{backgroundImage: 'url(https://www.shutterstock.com/image-photo/panoramic-view-professional-spa-massage-260nw-315377585.jpg)', backgroundSize: 'cover'}}>
  <div className="container">
    <h1 className="page-title">About Us</h1>
  </div>
</div>


<div className="breadcrumbs-custom">
  <div className="container">
    <ul className="breadcrumbs-custom-path">
      <li><a href="index.html">Home</a></li>
      <li className="active">About</li>
    </ul>
  </div>
</div>



<div className="section section-lg bg-default">
  <div className="container">
    <div className="row row-50 align-items-lg-center justify-content-xl-between">
      <div className="col-lg-6">
        <div className="block-xs">
          <h2>Who We Are</h2>
          <div className="divider-lg" />
          <p className="big text-gray-800">Cras ut vestibulum tortor. In in nisi sit amet metus varius pulvinar in vitae ipsum nec mi sollicitudin Fusce turpis massa,</p>
          <p>In ante sapien, dapibus luctus aliquet a, accumsan sit amet dolor. Mauris id facilisis dolor. Donec malesuada, est eu dignissim eleifend, est nulla dignissim nisl. Fusce turpis massa, mattis sit.</p>
        </div>
        <div className="row row-30">
          <div className="col-md-5">
            <div className="box-contact-info-with-icon">
              <h5 className='location-txt'>Opening Hours</h5>
              <ul className="list-xs">
                <li> <span className="text-gray-800">Monday-Friday: </span> 8:00am–8:00pm
                </li>
                <li><span className="text-gray-800">Saturday:</span> 8:00am–6:00pm
                </li>
                <li><span className="text-gray-800">Sunday: </span> Closed
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-5">
            <div className="box-contact-info-with-icon">
              <h5 className='location-txt'>Our Location</h5>
              <ul className="list-xs">
                <li><span className="text-gray-800">Address: </span> Washington, USA 6036 Richmond hwy.,  VA, 2230
                </li>
                <li><span className="text-gray-800">Offices: </span> 284-290
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-6">
        <div className="box-images box-images-variant-3">
          <div className="box-images-item" data-parallax-scroll="{&quot;y&quot;: -20,   &quot;smoothness&quot;: 30 }"><img src="https://livedemo00.template-help.com/wt_51673/images/overview-1-470x282.jpg" alt width={470} height={282} />
          </div>
          <div className="box-images-item box-images-without-border" data-parallax-scroll="{&quot;y&quot;: 40,  &quot;smoothness&quot;: 30 }"><img src="https://livedemo00.template-help.com/wt_51673/images/overview-2-470x282.jpg" alt width={470} height={282} />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>



<div className="section parallax-container"style={{backgroundImage: 'url(https://livedemo00.template-help.com/wt_51673/images/parallax-04-1920x1320.jpg)', backgroundSize: 'cover'}} >
  <div className="parallax-content section-lg context-dark text-center section-filter-dark">
    <div className="container">
      <h2>Video Presentation </h2>
      <div className="divider-lg" />
      <p className="block-lg">In this video, our staff members tell about their work at Glory, how they achieve the best results for their clients every day and more. Click the Play button below to watch this presentation.</p>
    </div>
    <div className="container">
      <div className="box-video-button" data-lightgallery="group"><a className="button-play" data-lightgallery="item" href="https://www.youtube.com/watch?v=m10Vl9TXpec"><span className="icon fa-play" /></a></div>
    </div>
  </div>
</div>



<div className="section section-md bg-default text-center">
  <div className="container">
    <h2>Our Professional Team</h2>
    <div className="divider-lg" />
    <p className="block-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Vestibulum bibendum elit cursus dapibus maximus. Maecenas sapien urna, cursus ut turpis non, gravida vehicula nisl. </p>
    <div className="row row-30">
      <div className="col-12">
<div className='container'>
            <div className='row'>
                <div className='col'>
                    <img src='./images/1.jpg'/>
                    <h4 className="team-title"><a href="#">Candice Marshall</a></h4>
              <p>Cosmetologist</p>
                </div>
                <div className='col'>
                    <img src='./images/2.jpg'/>
                    <h4 className="team-title"><a href="#">Candice Marshall</a></h4>
              <p>Cosmetologist</p>
                </div>
                <div className='col'>
                    <img src='./images/3.jpg'/>
                    <h4 className="team-title"><a href="#">Candice Marshall</a></h4>
              <p>Cosmetologist</p>
                </div>
            </div>
        </div>
      </div>
      <div className="col-12"><a className="button button-gray" href="#">View all team</a></div>
    </div>
  </div>
</div>




<div className="section section-lg bg-default">
  <div className="container">
    <div className="row row-50">
      <div className="col-lg-6">
        <div className="block-xs">
          <h2 className="heading-decorate">Testimonials<br className="d-inline" /><span className="divider" />of Our Clients</h2>
          <p className="big text-gray-800">Thanks to our clients’ regular reviews, testimonials, and comments we are able to improve our salon.</p>
          <p>Unlike other salons, we prefer to maintain a constant connection with our customers and receive feedback on every service, whether it’s a simple haircut or complex wedding makeup. If you’ve already visited Glory, feel free to contact us and send your testimonial.</p>
        </div>
      </div>
      <div className="col-lg-6">
       
            <img src='./images/a.jpeg'/>



      </div>
    </div>
  </div>
</div>


  </div> 

  )
}

export default AboutUs
