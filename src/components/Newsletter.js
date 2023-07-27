import React from "react";

const Newsletter = () => {
  return (
    <section className="container newsletter">
      <div className="newsletter-card">
        <h3 className="newsletter-title">Subscribe Our Newsletter</h3>
        <p className="newsletter-subtitle">Get the latest information</p>
        <form action="">
          <div className="form-group">
            <input
              type="email"
              className="form-control form-input"
              placeholder="Enter your email address"
            />
            <button className="btn btn-primary newsletter-button">Subscribe</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;
