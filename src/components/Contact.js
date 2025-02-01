import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="section-title text-center mb-4">Contact Us</h2>
        <form>
          <div className="row g-3">
            <div className="col-md-6">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input type="text" className="form-control" id="name" required />
            </div>
            <div className="col-md-6">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                required
              />
            </div>
            <div className="col-12">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                className="form-control"
                id="message"
                rows="4"
                required
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
