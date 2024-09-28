function Footer() {
  return (
    <footer className=" bg-cls-dred footer bg-dark text-light py-4">
      <div className="container">
        <div className="row">
          <div className="col-sm-5">
            <h3 className="f-heading">Get In Touch</h3>
            <ul className="f-contact-details">
              {/* <!-- <li><b>Address:</b> No: 197, Kondavil Road, Kondavil, Jaffna 40000, Sri Lanka</li> --> */}
              <li>
                <b>Phone:</b> <a href="tel:+94777394446">(+94) 77 777 7777 </a>
              </li>
              <li>
                <b>Email:</b>
                <a href="mailto:info@mmtamil.com">info@test.com</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h3 className="f-heading">Quick Links</h3>
            <ul className="f-links">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
          <div className="col-sm-4">
            <h3 className="f-heading">Socialize With Us</h3>
            <ul className="social-links">
              <li>
                <a href="#">
                  <span>
                    <img
                      src="https://matrimonial.wnssolution.com/media/facebook.svg"
                      alt="Facebook"
                    />
                  </span>
                  Facebook
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="https://matrimonial.wnssolution.com/media/twitter.svg"
                      alt="Twitter"
                    />
                  </span>
                  Twitter
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="https://matrimonial.wnssolution.com/media/instagram.svg"
                      alt="Instagram"
                    />
                  </span>
                  Instagram
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="https://matrimonial.wnssolution.com/media/youtube.svg"
                      alt="Youtube"
                    />
                  </span>
                  Youtube
                </a>
              </li>
              <li>
                <a href="#">
                  <span>
                    <img
                      src="https://matrimonial.wnssolution.com/media/whatsapp.svg"
                      alt="WhatsApp"
                    />
                  </span>
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-12">
            <hr></hr>
            <p
              className="copyright-text text-center"
              style={{ marginRight: '40px' }}
            >
              Copyright © 2024
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;