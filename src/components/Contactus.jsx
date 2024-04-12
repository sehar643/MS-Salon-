import React from 'react'

const Contactus = () => {
  return (
   <div className="wide wow-animation" lang="en">

  <section className="section-page-title" style={{backgroundImage: 'url(https://www.shutterstock.com/image-photo/panoramic-view-professional-spa-massage-260nw-315377585.jpg)', backgroundSize: 'cover'}}>
    <div className="container">
      <h1 className="page-title">Contacts</h1>
    </div>
  </section>
  <section className="breadcrumbs-custom">
    <div className="container">
      <ul className="breadcrumbs-custom-path">
        <li><a href="index.html">Home</a></li>
        <li className="active">Contacts</li>
      </ul>
    </div>
  </section>
  {/* Mailform*/}
  <section className="section section-md">
    <div className="container">
      <div className="row row-50">
        <div className="col-lg-8">
          <h2>Contact us</h2>
          <div className="divider-lg" />
          <p>You can contact us any way that is convenient for you. We are available 24/7 via fax or email. <br className="d-none d-lg-inline" />You can also use a quick contact form below or visit our salon personally.</p>
          {/* RD Mailform*/}
          <form className="rd-mailform text-left rd-form" data-form-output="form-output-global" data-form-type="contact" method="post" action="bat/rd-mailform.php">
            <div className="row row-30">
              <div className="col-sm-6">
                <div className="form-wrap">
                  <label className="form-label" htmlFor="contact-name">First name</label>
                  <input className="form-input" id="contact-name" type="text" name="name" data-constraints="@Required" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-wrap">
                  <label className="form-label" htmlFor="contact-sec-name">Last name</label>
                  <input className="form-input" id="contact-sec-name" type="text" name="sec-name" data-constraints="@Required" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-wrap">
                  <label className="form-label" htmlFor="contact-phone">Phone</label>
                  <input className="form-input" id="contact-phone" type="text" name="phone" data-constraints="@Numeric @Required" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-wrap">
                  <label className="form-label" htmlFor="contact-email">E-Mail</label>
                  <input className="form-input" id="contact-email" type="email" name="email" data-constraints="@Email @Required" />
                </div>
              </div>
              <div className="col-12">
                <div className="form-wrap">
                  <label className="form-label" htmlFor="contact-message">Message</label>
                  <textarea className="form-input" id="contact-message" name="message" data-constraints="@Required" defaultValue={""} />
                </div>
              </div>
            </div>
            <div className="form-button group-sm text-left">
              <button className="button contact-btn" type="submit">Send message</button>
            </div>
          </form>
        </div>
        <div className="col-lg-4">
          <ul className="contact-list">
            <li> 
              <p className="contact-list-title">Address</p>
              <div className="contact-list-content"><span> <i className="fa fa-map-marker mr-3 " aria-hidden="true"> </i></span>
<a href="#">Washington, USA 6036 Richmond hwy., Alexandria, VA, 2230 </a></div>
            </li>
            <li>
              <p className="contact-list-title">Phones</p>
              <div className="contact-list-content"><span><i className="fa fa-phone mr-3 " aria-hidden="true"></i></span><a href="tel:#">+1 (409) 987–5874</a><span>, </span><a href="tel:#">+1(409) 987–5884 </a></div>
            </li>
            <li>
              <p className="contact-list-title">E-mail</p>
              <div className="contact-list-content"><span><i className="fa fa-envelope-o mr-3 icon1 " aria-hidden="true"></i></span><a href="mailto:#">info@demolink.org</a></div>
            </li>
            <li>
           
              <p className="contact-list-title" ><i className="fa fa-clock-o mr-3 icon1" aria-hidden="true"></i>Opening Hours</p>
              <div className="contact-list-content">
                <ul className="list-xs">
                  <li>Mon-Fri: 9 am – 6 pm</li>
                  <li>Saturday: 9 am – 4 pm</li>
                  <li>Sunday: Closed</li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</div>


  )
}

export default Contactus
