
import React, { useState , useEffect} from 'react'
import { Link, Navigate } from "react-router-dom"


const Checkout = ({ CartItem }) => {
   
    const initialValues = { firstname: "", lastname: "", username: "", email: "", address:"", country: "", state: "",cardnumber: "", nameoncard: "", expiration: "", cvv: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setFormErrors(validate(formValues));
      setIsSubmit(true);
      
    };
  
    useEffect(() => {
      console.log(formErrors);
      if (Object.keys(formErrors).length === 0 && isSubmit) {
        console.log(formValues);
      }
    }, [formErrors]);
    const validate = (values) => {
      const errors = {};
      if (!values.firstname) {
        errors.firstname = "Name is required!";
      }
      if (!values.lastname) {
        errors.lastname = "LastName is required!";
      }
      if (!values.username) {
        errors.username = "username is required"
      }
      if (!values.email) {
        errors.email = "email is required";

     
    }
    return errors;
}
const cartSumbit=()=>{
    if(CartItem.length === 0){
        CartItem.length= ""
    }
    else{
        CartItem.length=0
    }
   
}
 

  const totalPrice = CartItem.reduce((price, item) => price + item.qty * item.price, 0)
   
    const itemList = (item) => {
      const productQty = item.price * item.qty
      return (
          <li className="list-group-item d-flex justify-content-between lh-sm">
              <div>
              
                  <h6 className="my-0">{item.name}</h6>
              </div>
              <span className="text-muted">${productQty}</span>
          </li>
          
      );
  }

    return (
        <>
            <div className="container my-5" >
            {Object.keys(formErrors).length === 0 && isSubmit ? ( <Navigate to='/success'>hello</Navigate>

             ) :<div className="row g-5">
                    <div style={{position:'absolute', left:900}} className="col-3 .col-md-2 order-md-right">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span className="text-primary">Your cart</span>
                            <span className="badge bg-primary rounded-pill">{}</span>
                        </h4>
                        <ul className="list-group mb-3">
                        {CartItem.map(itemList)}

                            <li className="list-group-item d-flex justify-content-between">
                                <span>Total (USD)</span>
                                <strong>${totalPrice}:00</strong>
                            </li>
                        </ul>
                      
                      

                        <form className="card p-2">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Promo code"/>
                                <button type="submit" className="btn btn-secondary">Redeem</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-80 col-lg-50">
                        <h4 className="mb-3">Billing address</h4>
                        <form className="needs-validation" onSubmit={handleSubmit} >
                            <div className="row g-12">
                                <div className="col-sm-800">
                                    <label htmlFor="firstName" className="form-label">First name</label>
                                    <input type="text" name='firstname' className="form-control" id="1" placeholder="enter name" value={formValues.firstname}
                                    onChange={handleChange}
                                    required="" />
                                    <div className="invalid-feedback">
                                        Valid first name is required.
                                    </div>
                                   
                                </div>
                                <p style={{color:"red"}}>{formErrors.firstname}</p>

                                <div className="col-sm-800">
                                    <label htmlFor="lastName" className="form-label">Last name</label>
                                    <input type="text" name='lastname' className="form-control" id="2" placeholder="" value={formValues.lastname}
                                    onChange={handleChange} required="" />
                                    <div className="invalid-feedback">
                                        Valid last name is required.
                                    </div>
                                </div>
                                <p style={{color:"red"}}>{formErrors.lastname}</p>

                                <div className="col-12">
                                    <label htmlFor="username" className="form-label">Username</label>
                                    <div className="input-group has-validation">
                                        <span className="input-group-text">@</span>
                                        <input type="text" name='username' className="form-control" id="3" value={formValues.username}
                                        onChange={handleChange} placeholder="Username" required="" />
                                        <div className="invalid-feedback">
                                            Your username is required.
                                        </div>
                                    </div>
                                </div>
                                        <p style={{color:"red"}}>{formErrors.username}</p>

                                <div className="col-12">
                                    <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                                    <input type="email" name='email' className="form-control" id="4" value={formValues.email}
                                    onChange={handleChange} placeholder="you@example.com" />
                                    <div className="invalid-feedback">
                                        Please enter a valid email address For shipping updates.
                                    </div>
                                </div>
                                <p style={{color:"red"}}>{formErrors.username}</p>

                                <div className="col-12">
                                    <label htmlFor="address" className="form-label">Address</label>
                                    <input type="text" name='address' className="form-control" id="5" placeholder="1234 Main St" value={formValues.address}
                                    onChange={handleChange} required="" />
                                    <div className="invalid-feedback">
                                        Please enter your shipping address.
                                    </div>
                                </div>

                                <div className="col-12">
                                    <label htmlFor="address2" className="form-label">Address 2 <span className="text-muted">(Optional)</span></label>
                                    <input type="text" name='adress2' className="form-control" id="6" placeholder="Apartment or suite" />
                                </div>

                                <div className="col-md-5">
                                    <label htmlFor="country" className="form-label">Country</label>
                                    <select value={formValues.country} onChange={handleChange} name='country' className="form-select" id="7"  required="select country">
                                        <option>Choose...</option>
                                        <option>United States</option>
                                        <option>India</option>

                                    </select>
                                    <div className="invalid-feedback">
                                        Please select a valid country.
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="state" className="form-label">State</label>
                                    <select value={formValues.state} onChange={handleChange} name='state' className="form-select" id="8" required="">
                                        <option>Choose...</option>
                                        <option>California</option>
                                        <option>Mumbai</option>
                                    </select>
                                    <div className="invalid-feedback">
                                        Please provide a valid state.
                                    </div>
                                </div>

                                <div className="col-md-3">
                                    <label htmlFor="zip" className="form-label">Zip</label>
                                    <input type="text" className="form-control" id="9" placeholder="" required="" />
                                    <div className="invalid-feedback">
                                        Zip code required.
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="10" />
                                <label className="form-check-label" htmlFor="same-address">Shipping address is the same as my billing address</label>
                            </div>

                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="11" />
                                <label className="form-check-label" htmlFor="save-info">Save this information htmlFor next time</label>
                            </div>

                            <hr className="my-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="my-3">
                                <div className="form-check">
                                    <input id="credit" name="paymentMethod" type="radio" className="form-check-input" checked="" required="" />
                                    <label className="form-check-label" htmlFor="credit">Credit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="debit"  name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="debit">Debit card</label>
                                </div>
                                <div className="form-check">
                                    <input id="paypal" name="paymentMethod" type="radio" className="form-check-input" required="" />
                                    <label className="form-check-label" htmlFor="paypal">PayPal</label>
                                </div>
                            </div>

                            <div className="row gy-26">
                                <div className="col-md-8">
                                    <label htmlFor="cc-name" className="form-label">Name on card</label>
                                    <input type="text" name='nameoncard' className="form-control" id="cc-name" placeholder="" value={formValues.nameoncard} onChange={handleChange} required="" />
                                    <small className="text-muted">Full name as displayed on card</small>
                                    <div className="invalid-feedback">
                                        Name on card is required
                                    </div>
                                </div>

                                <div className="col-md-8">
                                    <label htmlFor="cc-number" className="form-label">card number</label>
                                    <input type="text" name='cardnumber' className="form-control" id="cc-number" placeholder="" value={formValues.cardnumber} onChange={handleChange} required="" />
                                    <div className="invalid-feedback">
                                        Credit card number is required
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="cc-expiration" className="form-label">Expiration</label>
                                    <input type="text" name='expiration' className="form-control" id="cc-expiration" placeholder="  05/25" value={formValues.expiration} onChange={handleChange} required="" />
                                    <div className="invalid-feedback">
                                        Expiration date required
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <label htmlFor="cc-cvv" className="form-label">CVV</label>
                                    <input type="text" name='cvv' className="form-control" id="cc-cvv" placeholder="***" value={formValues.cvv} onChange={handleChange} required="" />
                                    <div className="invalid-feedback">
                                        Security code required
                                    </div>
                                </div>
                            </div>

                            <hr className="my-4" />
                           
                           
                        <button onClick={cartSumbit}  type="submit" className="w-50 btn btn-primary btn-lg">Proceed to Checkout</button>
                        </form>
                        

                    </div>
                </div>}
                
            </div>
        </>
    )
}


export default Checkout