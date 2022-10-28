import React from 'react'
import { useSelector } from 'react-redux'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


const CheckOut = () => {
  const state =useSelector((state)=>state.HandelCart)
  var total=0;
  const listItem=(item)=>{
    total  = total + item.price;
   return (
    <li className="list-group-item d-flex justify-content-between lh-sm">
    <div>
      <h6 className="my-0">{item.title}</h6>
    </div>
    <span className="text-muted">${item.price}</span>
  </li>
    )
  }
  return (
      <>
      <Navbar/>
    <div className='container mt-5'>
    <div className="row g-5">
    <div className="col-md-5 col-lg-4 order-md-last">
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-warning">Your cart</span>
        <span className="badge bg-warning text-success rounded-pill">{state.length}</span>
      </h4>
      <ul className="list-group mb-3">
      {state.map(listItem)}
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>${total}</strong>
        </li>
      </ul>

      <form className="card p-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Promo code"/>
          <button type="submit" className="btn btn-secondary">Redeem</button>
        </div>
      </form>
    </div>
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" novalidate="">
        <div className="row g-3">
          <div className="col-sm-6">
            <label forHtml="firstName" className="Htmlm-label">First name</label>
            <input type="text" className="form-control" id="firstName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label for="lastName" className="form-label">Last name</label>
            <input type="text" className="form-control" id="lastName" placeholder="" value="" required=""/>
            <div className="invalid-feedback">
              Valid last name is required.
            </div>
          </div>

          <div className="col-12">
            <label for="username" className="form-label">Username</label>
            <div className="input-group has-validation">
              <span className="input-group-text">@</span>
              <input type="text" className="form-control" id="username" placeholder="Username" required=""/>
            <div className="invalid-feedback">
                Your username is required.
              </div>
            </div>
          </div>

          <div className="col-12">
            <label for="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
            <input type="email" className="form-control" id="email" placeholder="you@example.com"/>
            <div className="invalid-feedback">
              Please enter a valid email address for shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label for="address" className="form-label">Address</label>
            <input type="text" className="form-control" id="address" placeholder="1234 Main St" required=""/>
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label for="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
            <input type="text" className="form-control" id="address2" placeholder="Apartment or suite"/>
          </div>

          <div className="col-md-5">
            <label for="country" className="form-label">Country</label>
            <select className="form-select" id="country" required="">
              <option value="">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4">
            <label for="state" className="form-label">State</label>
            <select className="form-select" id="state" required="">
              <option value="">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-3">
            <label for="zip" className="form-label">Zip</label>
            <input type="text" className="form-control" id="zip" placeholder="" required=""/>
            <div className="invalid-feedback">
              Zip code required.
            </div>
          </div>
        </div>

        <hr className="my-4"/>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="same-address"/>
          <label className="form-check-label" for="same-address">Shipping address is the same as my billing address</label>
        </div>

        <div className="form-check">
          <input type="checkbox" className="form-check-input" id="save-info"/>
          <label className="form-check-label" for="save-info">Save this information for next time</label>
        </div>

        <hr className="my-4"/>

        <h4 className="mb-3">Payment</h4>

        <div className="my-3">
          <div className="form-check">
            <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required=""/>
            <label className="form-check-label" for="credit">Credit card/Debit card</label>
          </div>
          <div className="form-check">
            <input id="debit" name="paymentMethod" type="radio" className="form-check-input" required=""/>
            <label className="form-check-label" for="debit">UPI/Net Banking</label>
          </div>
          <div className="form-check">
            <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required=""/>
            <label className="form-check-label" for="paypal">Cash on Delivery</label>
          </div>
        </div>

        <div className="row gy-3">
          <div className="col-md-6">
            <label for="cc-name" className="form-label">Name on card</label>
            <input type="text" className="form-control" id="cc-name" placeholder="" required=""/>
            <small className="text-muted">Full name as displayed on card</small>
            <div className="invalid-feedback">
              Name on card is required
            </div>
          </div>

          <div className="col-md-6">
            <label for="cc-number" className="form-label">Credit card number</label>
            <input type="text" className="form-control" id="cc-number" placeholder="" required=""/>
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>

          <div className="col-md-3">
            <label for="cc-expiration" className="form-label">Expiration</label>
            <input type="text" className="form-control" id="cc-expiration" placeholder="" required=""/>
            <div className="invalid-feedback">
              Expiration date required
            </div>
          </div>

          <div className="col-md-3">
            <label for="cc-cvv" className="form-label">CVV</label>
            <input type="text" className="form-control" id="cc-cvv" placeholder="" required=""/>
            <div className="invalid-feedback">
              Security code required
            </div>
          </div>
        </div>

        <hr className="my-4"/>

        <button className="w-100 bg-warning text-success fw-bolder btn-lg" type="submit">Continue to checkout</button>
      </form>
    </div>
  </div>
  </div>
  <br/>
  <br/>
  <Footer/>
  </>
  )
}

export default CheckOut