import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <div className="row" id='row'>
    <div className="col p-0 ">
      <div className="card-body bg-secondary text-white text-center ">
        <h5 className="card-title text-black-50 text-center">About</h5>
        <ul className="list-group ">
          <li id='hover' className="list-group-item bg-secondary text-white text-center ">
            Contact Us
          </li>
          <li id='hover' className="list-group-item bg-secondary text-white text-center ">
            About Us
          </li>
          <li id='hover' className="list-group-item bg-secondary text-white text-center">
            Our Stories
          </li>
        </ul>
        <hr />
        <i className="fa fa-address-card me-2" aria-hidden="true"></i>
        <i className="fa fa-user-circle me-2" aria-hidden="true"></i>
        <i className="fa fa-book" aria-hidden="true"></i>
      </div>
    </div>
    <div className="col p-0">
      <div className="card-body bg-secondary text-white text-center ">
        <h5 className="card-title text-black-50 text-center ">Help</h5>
        <ul className="list-group">
          <li id='hover' className="list-group-item bg-secondary text-white text-center">
            Payment
          </li>
          <li id='hover' className="list-group-item bg-secondary text-white text-center">
            Shipping
          </li>
          <li id='hover' className="list-group-item bg-secondary text-white text-center">
            Cancellation & Return
          </li>
        </ul>
        <hr/>
        <i className="fa fa-credit-card-alt me-2" aria-hidden="true"></i> 
        <i className="fa fa-truck me-2" aria-hidden="true"></i>
        <i className="fa fa-reply" aria-hidden="true"></i>
      </div>
    </div>
    <div className="col p-0">
      <div className="card-body bg-secondary text-white text-center">
        <h5 className="card-title text-black-50 text-center ">Social</h5>
        <ul className="list-group">
          <li id='hover' className="list-group-item bg-secondary text-white text-center">
            Instagram
          </li>
          <li id='hover' className="list-group-item bg-secondary text-white text-center">
            Twiter
          </li>
          <li id='hover' className="list-group-item bg-secondary text-white text-center">
            Facebook
          </li>
        </ul>
        <hr />
        <i className="fa fa-instagram me-2" aria-hidden="true"></i>
        <i className="fa fa-twitter-square  me-2" aria-hidden="true"></i>
        <i className="fa fa-facebook-square" aria-hidden="true"></i>
      </div>
    </div>
  </div>
  )
}

export default Footer;