import { Link } from "react-router-dom";
import "./Main.module.css";
import ContactUs from "../../components/ContactUs";

function Main() {
  return (
    <main>
      {/* <!-- Home Section --> */}
      <section id="home" className="bg-light py-4">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <h1>Welcome to Matrimony</h1>
              <p>Find your perfect match with us</p>
              <Link to="/register" className="button crimson-gr">
                Get Started
              </Link>
            </div>
            <div className="col-md-6">
              {/* <!-- Placeholder Image --> */}
              <img
                src="https://via.placeholder.com/600x400"
                alt="Matrimony Image"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Success Stories Section --> */}
      {/* <section id="success" className="bg-light py-5">
        <div className="container">
          <h3>Success Stories</h3>
          <p>Read about couples who found love on Matrimony</p>
        </div>
      </section> */}

      {/* <!-- About Us Section --> */}
      <section id="about" className="container mt-3">
        <div className="row">
          <div className="col-md-6">
            {/* <!-- Placeholder Image --> */}
            <img
              src="https://via.placeholder.com/600x400"
              alt="About Us Image"
              className="img-fluid"
            />
          </div>
          <div className="col-md-6">
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              euismod sem vel mauris bibendum, sit amet vulputate libero
              tincidunt. Duis euismod sem at libero consequat, nec vehicula
              turpis pellentesque.
            </p>
          </div>
        </div>
        {/* <!-- Add more content about your platform --> */}
      </section>

      {/* <!-- Contact Us Section --> */}
      <section id="contact" className="bg-light py-5 mt-3">
        <ContactUs />
      </section>

      {/* <!-- How It Works Section --> */}
      <section id="howItWorks" className="container mt-5 how-it-works-main">
        <div className="text-center mb-4">
          <h3>How It Works</h3>
        </div>

        <div className="row mt-4">
          {/* <!-- Step 1: Register --> */}
          <div className="col-md-4">
            <div className="card text-center" style={{backgroundColor: "#ffd700"}}>
              <div className="card-body">
                <div className="text-end">
                  <span className="badge bg-secondary">1</span>
                </div>
                <figure>
                  <img
                    src="./icons/register.svg"
                    alt="Register Icon"
                    className="mb-3"
                    width="50"
                  />
                </figure>
                <h5 className="card-title">Register</h5>
                <p className="card-text">
                  Create your account with us by registering.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Step 2: Find your Match --> */}
          <div className="col-md-4">
            <div className="card text-center" style={{backgroundColor: "#ff6347"}}>
              <div className="card-body">
                <div className="text-end">
                  <span className="badge bg-secondary">2</span>
                </div>
                <figure>
                  <img
                    src="./icons/find-match.svg"
                    alt="Match Icon"
                    className="mb-3"
                    width="50"
                  />
                </figure>
                <h5 className="card-title">Find your Match</h5>
                <p className="card-text">
                  Explore and find potential matches based on your preferences.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Step 3: Send Interest --> */}
          <div className="col-md-4">
            <div className="card text-center" style={{backgroundColor: "#eb8787"}}>
              <div className="card-body">
                <div className="text-end">
                  <span className="badge bg-secondary">3</span>
                </div>
                <figure>
                  <img
                    src="./icons/send-interest.svg"
                    alt="Interest Icon"
                    className="mb-3"
                    width="50"
                  />
                </figure>

                <h5 className="card-title">Send Interest</h5>
                <p className="card-text">
                  Show your interest in profiles that catch your attention.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          {/* <!-- Step 4: Get Profile Information --> */}
          <div className="col-md-4">
            <div className="card text-center" style={{backgroundColor: "#fbf398"}}>
              <div className="card-body">
                <div className="text-end">
                  <span className="badge bg-secondary">4</span>
                </div>
                <figure>
                  <img
                    src="./icons/profile-information.svg"
                    alt="Profile Icon"
                    className="mb-3"
                    width="50"
                  />
                </figure>

                <h5 className="card-title">Get Profile Information</h5>
                <p className="card-text">
                  Access detailed information about potential matches.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Step 5: Start Meetups --> */}
          <div className="col-md-4">
            <div className="card text-center" style={{backgroundColor: "#ffa07a"}}>
              <div className="card-body">
                <div className="text-end">
                  <span className="badge bg-secondary">5</span>
                </div>
                <figure>
                  <img
                    src="./icons/start-meeting.svg"
                    alt="Meetups Icon"
                    className="mb-3"
                    width="50"
                  />
                </figure>
                <h5 className="card-title">Start Meetups</h5>
                <p className="card-text">
                  Initiate meetups with individuals to know each other better.
                </p>
              </div>
            </div>
          </div>
          {/* <!-- Step 6: Getting Marriage --> */}
          <div className="col-md-4">
            <div className="card text-center" style={{backgroundColor: "#ffdab9"}}>
              <div className="card-body">
                <div className="text-end">
                  <span className="badge bg-secondary">6</span>
                </div>
                <figure>
                  <img
                    src="./icons/getting-marriage.svg"
                    alt="Marriage Icon"
                    className="mb-3"
                    width="50"
                  />
                </figure>

                <h5 className="card-title">Getting Marriage</h5>
                <p className="card-text">
                  Embark on the journey towards a meaningful and lasting
                  marriage.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- FAQ Section --> */}
      <section className="faq-section mt-1 mb-2">
        <div className="container">
          <div className="row">
            {/* <!-- ***** FAQ Start ***** --> */}
            <div className="col-md-12">
              <div className="faq-title text-center pb-3">
                <h3>FAQ</h3>
              </div>
            </div>
            <div className="col-md-12">
              <div className="faq" id="accordion">
                <div className="card">
                  <div className="card-header" id="faqHeading-1">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapse-1"
                        aria-expanded="true"
                        aria-controls="faqCollapse-1"
                      >
                        <span className="badge">1</span>What is Lorem Ipsum?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-1"
                    className="collapse"
                    aria-labelledby="faqHeading-1"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-2">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapse-2"
                        aria-expanded="false"
                        aria-controls="faqCollapse-2"
                      >
                        <span className="badge">2</span> Where does it come
                        from?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-2"
                    className="collapse"
                    aria-labelledby="faqHeading-2"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Contrary to popular belief, Lorem Ipsum is not simply
                        random text. It has roots in a piece of classical Latin
                        literature from 45 BC, making it over 2000 years old.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-3">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapse-3"
                        aria-expanded="false"
                        aria-controls="faqCollapse-3"
                      >
                        <span className="badge">3</span>Why do we use it?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-3"
                    className="collapse"
                    aria-labelledby="faqHeading-3"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using 'Content here, content
                        here.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-4">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapse-4"
                        aria-expanded="false"
                        aria-controls="faqCollapse-4"
                      >
                        <span className="badge">4</span> Where can I get some?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-4"
                    className="collapse"
                    aria-labelledby="faqHeading-4"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don't look even slightly believable.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-5">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapse-5"
                        aria-expanded="false"
                        aria-controls="faqCollapse-5"
                      >
                        <span className="badge">5</span> What is Lorem Ipsum?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-5"
                    className="collapse"
                    aria-labelledby="faqHeading-5"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        It has survived not only five centuries, but also the
                        leap into electronic typesetting, remaining essentially
                        unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-6">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapse-6"
                        aria-expanded="false"
                        aria-controls="faqCollapse-6"
                      >
                        <span className="badge">6</span> Where does it come
                        from?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-6"
                    className="collapse"
                    aria-labelledby="faqHeading-6"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        The standard chunk of Lorem Ipsum used since the 1500s
                        is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum"
                        by Cicero are also reproduced in their exact original
                        form, accompanied by English versions from the 1914
                        translation by H. Rackham.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="card-header" id="faqHeading-7">
                    <div className="mb-0">
                      <h5
                        className="faq-title"
                        data-bs-toggle="collapse"
                        data-bs-target="#faqCollapse-7"
                        aria-expanded="false"
                        aria-controls="faqCollapse-7"
                      >
                        <span className="badge">7</span> Why do we use it?
                      </h5>
                    </div>
                  </div>
                  <div
                    id="faqCollapse-7"
                    className="collapse"
                    aria-labelledby="faqHeading-7"
                    data-parent="#accordion"
                  >
                    <div className="card-body">
                      <p>
                        Many desktop publishing packages and web page editors
                        now use Lorem Ipsum as their default model text, and a
                        search for 'lorem ipsum' will uncover many web sites
                        still in their infancy. Various versions have evolved
                        over the years, sometimes by accident, sometimes on
                        purpose (injected humour and the like).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Recently Registered Profiles Section --> */}
      <section id="recentProfiles" className="container mt-5 text-center">
        <h3>Recently Registered Profiles</h3>
        <div
          id="recentProfilesCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner text-center mt-4">
            {/* <!-- Profile 1 --> */}
            <div className="carousel-item active">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>

                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Profile 2 --> */}
            <div className="carousel-item">
              <div className="row">
                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
                <div className="col-md-3">
                  <img
                    src="./icons/demo_user.png"
                    className="card-img-top"
                    alt="Profile Image"
                  />
                  <div className="card-body">
                    <h5 className="card-title">Profile Name 2</h5>
                    <p className="card-text">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Add more profiles as needed --> */}
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#recentProfilesCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#recentProfilesCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* <!-- Reviews Section --> */}
      <section id="reviews" className="bg-light py-5 mt-5">
        <div className="container">
          <div className="text-center mb-4">
            <h3 style={{marginRight: "80px"}}>Reviews</h3>
          </div>

          <div
            id="reviewsCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              {/* <!-- Review 1 --> */}
              <div className="carousel-item active">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card reviewCard">
                      <div className="card-body">
                        <p className="card-text">
                          "Duis euismod sem at libero consequat, nec vehicula
                          turpis pellentesque."
                        </p>
                        <footer className="blockquote-footer">
                          Review by <cite title="Source Title">User 2</cite>
                        </footer>
                        <img
                          src="./icons/5-star.png"
                          alt=""
                          width="50px"
                          height="auto"
                          className="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card reviewCard">
                      <div className="card-body">
                        <p className="card-text">
                          "Duis euismod sem at libero consequat, nec vehicula
                          turpis pellentesque."
                        </p>
                        <footer className="blockquote-footer">
                          Review by <cite title="Source Title">User 2</cite>
                        </footer>
                        <img
                          src="./icons/5-star.png"
                          alt=""
                          width="50px"
                          height="auto"
                          className="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card reviewCard">
                      <div className="card-body">
                        <p className="card-text">
                          "Duis euismod sem at libero consequat, nec vehicula
                          turpis pellentesque."
                        </p>
                        <footer className="blockquote-footer">
                          Review by <cite title="Source Title">User 2</cite>
                        </footer>
                        <img
                          src="./icons/5-star.png"
                          alt=""
                          width="50px"
                          height="auto"
                          className="rating"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Review 2 --> */}
              <div className="carousel-item">
                <div className="row">
                  <div className="col-md-4">
                    <div className="card reviewCard">
                      <div className="card-body">
                        <p className="card-text">
                          "Duis euismod sem at libero consequat, nec vehicula
                          turpis pellentesque."
                        </p>
                        <footer className="blockquote-footer">
                          Review by <cite title="Source Title">User 2</cite>
                        </footer>
                        <img
                          src="./icons/5-star.png"
                          alt=""
                          width="50px"
                          height="auto"
                          className="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card reviewCard">
                      <div className="card-body">
                        <p className="card-text">
                          "Duis euismod sem at libero consequat, nec vehicula
                          turpis pellentesque."
                        </p>
                        <footer className="blockquote-footer">
                          Review by <cite title="Source Title">User 2</cite>
                        </footer>
                        <img
                          src="./icons/5-star.png"
                          alt=""
                          width="50px"
                          height="auto"
                          className="rating"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="card reviewCard">
                      <div className="card-body">
                        <p className="card-text">
                          "Duis euismod sem at libero consequat, nec vehicula
                          turpis pellentesque."
                        </p>
                        <footer className="blockquote-footer">
                          Review by <cite title="Source Title">User 2</cite>
                        </footer>
                        <img
                          src="./icons/5-star.png"
                          alt=""
                          width="50px"
                          height="auto"
                          className="rating"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- Add more reviews as needed --> */}
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#reviewsCarousel"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
