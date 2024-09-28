import Card from "./sharable/Card/Card";

const ContactUs=()=>{
    return( 
      <div className="container">
      <div className="text-center">
        <h3>Contact Us</h3>
        <p>
          Have questions or feedback? Reach out to us using the form below:
        </p>
      </div>
      <div className="row">
        <div className="col-md-6">
          <Card>
            {/* <!-- Contact Form --> */}
            <form>
                <div className="mb-3">
                  <label for="name" className="form-label">
                    Your Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="email" className="form-label">
                    Your Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    required
                  />
                </div>

                <div className="mb-3">
                  <label for="message" className="form-label">
                    Your Message
                  </label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    required
                  ></textarea>
                </div>

                <button type="submit" className="button crimson-gr">
                  Submit
                </button>
              </form>
          </Card>
          
        </div>

        <div className="col-md-6">
          {/* <!-- Placeholder Image --> */}
          <img
            src="https://via.placeholder.com/600x450"
            alt="About Us Image"
            className="img-fluid"
          />
        </div>
      </div>
    </div>
    );
}

export default ContactUs;