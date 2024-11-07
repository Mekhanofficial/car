import React, { useState } from "react";
import HeaderPage from "../components/header";
import ct1 from "../pictures/ct1.avif";
import FooterPage from "../components/footer";

const CheckoutPage = ({ cartItems, totalAmount }) => {
  const [formData, setFormData] = useState({
    country: "",
    firstName: "",
    lastName: "",
    companyName: "",
    address: "",
    apartment: "",
    city: "",
    state: "",
    postcode: "",
    email: "",
    phone: "",
    createAccount: false,
    shipToDifferentAddress: false,
    orderNotes: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., call an API)
    console.log("Form submitted", formData);
  };

  return (
    <>
      <HeaderPage />
      <div className="wish">
        <img src={ct1} alt="Cart Banner" />
        <h1>Checkout</h1>
        <h2>
          <span>Home / </span>Checkout
        </h2>
      </div>
      <div className="checkout-page">
        <h2>Billing Details</h2>

        <form onSubmit={handleSubmit}>
          <div className="countrybutt">
            <label>Country *</label>
            <input
              type="text"
              name="country"
              value={formData.country}
              onChange={handleChange}
              required
            />
          </div>
          <div className="firstlast">
            <div className="name">
              <label>First Name *</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>

            <div className="name lastname">
              <label>Last Name *</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          <div className="countrybutt">
            <label>Company Name</label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleChange}
            />
          </div>

          <div className="countrybutt">
            <label>Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Street address"
            />
          </div>

          <div className="countrybutt">
            <input
              type="text"
              name="apartment"
              value={formData.apartment}
              onChange={handleChange}
              placeholder="Apartment, suite, unit etc. (optional)"
            />
          </div>

          <div className="countrybutt">
            <label>Town / City *</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              placeholder="Town / City *"
            />
          </div>

          <div className="firstlast">
            <div className="name">
              <label>State / County *</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>

            <div className="name lastname">
              <label>Postcode / Zip *</label>
              <input
                type="text"
                name="postcode"
                value={formData.postcode}
                onChange={handleChange}
                required
                placeholder="Postcode / Zip *"
              />
            </div>
          </div>

          <div className="firstlast">
            <div className="name">
              <label>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="name lastname">
              <label>Phone *</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="Phone *"
              />
            </div>
          </div>

          <div className="checkbox">
            <label>
              <input
                type="checkbox"
                name="createAccount"
                checked={formData.createAccount}
                onChange={handleChange}
              />
              Create an account?
            </label>
          </div>

          <div className="shipping">
            <label>
              Ship to a different address?
              <input
                type="checkbox"
                name="shipToDifferentAddress"
                checked={formData.shipToDifferentAddress}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="countrybutt2">
            <label>Order Notes</label>
            <textarea
              name="orderNotes"
              value={formData.orderNotes}
              onChange={handleChange}
              rows="3"
              placeholder="Notes about your order, e.g. special notes for delivery"
            />
          </div>

          {/* <h2>Order Summary</h2>  */}
          {/* <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price} x {item.quantity}
            </li>
          ))}
        </ul> */}
          {/* <h3>Total Amount: ${totalAmount}</h3> */}
          {/* <button type="submit">Place Order</button> */}
        </form>
      </div>
      <FooterPage />
    </>
  );
};

export default CheckoutPage;
