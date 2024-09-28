import React, { useState } from "react";
import ImagePreview from "../../components/images/ImagePriveiw";
import "./Form.module.css";
import Button from "../../components/sharable/Button/Button";
import Card from "../../components/sharable/Card/Card";

const RegistrationForm = () => {
  const [userData, setUserData] = useState({
    profileFor: "",
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    dob: "",
    gender: "",
    profileImage: null,
    comments: "",
  });

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    // Handle file input separately
    if (type === "file") {
      setUserData({
        ...userData,
        [name]: files[0],
      });
    } else {
      setUserData({
        ...userData,
        [name]: value,
      });
    }
  };

  const previewProfileImage = () => {
    const input = document.getElementById("profileImage");
    const preview = document.getElementById("profile-image-preview");
    const file = input.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      preview.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      preview.src = "";
    }
  };

  const storeData = () => {
    // Store data from the current step into the userData object
    const inputs = document.querySelectorAll(":visible input");

    inputs.forEach((input) => {
      if (input.type === "file") {
        // Handle file input separately (htmlFor image upload)
        if (input.files.length > 0) {
          setUserData({
            ...userData,
            [input.name]: input.files[0],
          });
        }
      } else {
        setUserData({
          ...userData,
          [input.name]: input.value,
        });
      }
    });
  };

  const submitForm = () => {
    // Store data from the current step before submitting the form
    storeData();

    // Implement form submission logic here
    // You can use AJAX or any other method to send data to the server

    // Example using fetch API
    fetch("your-server-endpoint", {
      method: "POST",
      body: userData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle the response from the server
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const currentDate = new Date().toISOString().split("T")[0];

  return (
    <div className="container mt-5 mb-5 bg-grad">
      <form className="msform">
        {/* <!-- progressbar --> */}
        <ul className="form-progressbar">
          <li className="active">Account Setup</li>
          <li className={currentStep > 1 ? "active" : ""}>
            Personal Information
          </li>
          <li className={currentStep > 2 ? "active" : ""}>
            Additional Information
          </li>
        </ul>
        {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <Card title="Personal Information" sub_title="This is step 1">
              <div className="row">
                {/* Add your form inputs here */}
                
                <div className="col-md-6 col-sm-12 mb-1">
                  <label className="form-label form-require">First Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                    name="first_name"
                    placeholder="Enter Contact First Name"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12 mb-1">
                  <label htmlFor="fullName" className="form-label form-require">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    name="lastName"
                    placeholder="Enter Contact Last Name"
                    required
                  />
                </div>
                <div className="col-md-12 mb-1">
                  <label htmlFor="email" className="form-label form-require">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Enter Contact Email Address"
                    required
                  />
                </div>

                <div className="col-md-6 col-sm-12 mb-1">
                  <label htmlFor="password" className="form-label form-require">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    placeholder="Enter Contact Password"
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12 mb-1">
                  <label
                    htmlFor="confirmPassword"
                    className="form-label form-require"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="confirmPassword"
                    name="confirmPassword"
                    placeholder="Enter Contact Confirm Password"
                    required
                  />
                </div>
                <div className="text-center my-2">
                  <Button className="crimson-gr me-2" name="Next" onClick={nextStep} />
                </div>
              </div>
            </Card>
          )}

          {/* Step 2: Additional Information */}
          {currentStep === 2 && (
            <Card title="Additional Information" sub_title="This is step 2">
              <div className="row">
                <div className="mb-1">
                  <label className="form-label form-require">Profile For</label>
                  <select
                    className="form-select"
                    id="profileFor"
                    name="profileFor"
                    required
                  >
                    <option value="self">Self</option>
                    <option value="son">Son</option>
                    <option value="daughter">Daughter</option>
                    <option value="relative">Relative</option>
                    <option value="Friend">Friend</option>
                    {/* <!-- Add more options as needed --> */}
                  </select>
                </div>
                <div className="col-md-6 col-sm-12 mb-1">
                  <label htmlFor="dob" className="form-label form-require">
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    name="dob"
                    max={currentDate}
                    required
                  />
                </div>
                <div className="col-md-6 col-sm-12 mb-1">
                  <label htmlFor="gender" className="form-label form-require">
                    Gender
                  </label>
                  <select
                    className="form-select"
                    id="gender"
                    name="gender"
                    required
                  >
                    <option value="" disabled selected>
                      Select Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="col-md-12">
                  <label htmlFor="contact" className="form-label form-require">
                    Contact Number
                  </label>
                  <input
                    type="number"
                    id="contact"
                    name="contact"
                    placeholder="Enter Contact Number"
                    className="form-control"
                  />
                </div>
              </div>
              <div className="text-center my-3">
              <Button className="lavender-gr" name="Previous" onClick={prevStep} />
                <Button className="crimson-gr me-2" name="Next" onClick={nextStep} />
              </div>
            </Card>
          )}

          {/* Step 3: Final Details */}
          {currentStep === 3 && (
            <Card title="Final Details" sub_title="This is step 3">
              <div className="row">
                <div className="col-md-12 mb-1 text-center">
                  <ImagePreview />
                </div>

                <div className="col-md-12 col-sm-12 mb-1">
                  <label
                    htmlfor="educational_qualification"
                    className="form-label form-require"
                  >
                    Educational Qualification
                  </label>
                  <select
                    class="form-select"
                    id="educational_qualification"
                    name="educational_qualification"
                  >
                    <option value="Doctorate Degree">
                      Select Educational Qualification
                    </option>
                    <option value="Doctorate Degree">Doctorate Degree</option>
                    <option value="Master Degree">Master Degree</option>
                    <option value="Bachelor Degree">Bachelor Degree</option>
                    <option value="Higher Diploma">Higher Diploma</option>
                    <option value="Diploma">Diploma</option>
                    <option value="Advanced Level (A/L)">
                      Advanced Level (A/L)
                    </option>
                    <option value="Ordinary Level (O/L)">
                      Ordinary Level (O/L)
                    </option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-md-12 col-sm-12 mb-1">
                  <label
                    htmlfor="career_detail"
                    className="form-label form-require"
                  >
                    Career Details
                  </label>
                  <select
                    className="form-select"
                    id="career_detail"
                    name="career_detail"
                  >
                    <option value="">Select Career Details</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Accountant">Accountant</option>
                    <option value="Manager">Manager</option>
                    <option value="Surveyor">Surveyor</option>
                    <option value="Quantity Surveyor">Quantity Surveyor</option>
                    <option value="Technical Officer">Technical Officer</option>
                    <option value="Bank Staff">Bank Staff</option>
                    <option value="Office Staff">Office Staff</option>
                    <option value="Draughtsman">Draughtsman</option>
                    <option value="Development Officer">
                      Development Officer
                    </option>
                    <option value="Management Assistant">
                      Management Assistant
                    </option>
                    <option value="Teacher">Teacher</option>
                    <option value="Nurse">Nurse</option>
                    <option value="Technician">Technician</option>
                    <option value="Beautician">Beautician</option>
                    <option value="Business">Business</option>
                    <option value="Farmer">Farmer</option>
                    <option value="Worker">Worker</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Driver">Driver</option>

                    <option value="No Work">No Work</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className="text-center my-3">
              
              <Button className="lavender-gr" name="Previous" onClick={prevStep} />
              
              <Button className="crimson-gr" name="Submit" onClick={submitForm} />
              </div>
            </Card>
          )}
      </form>

      {/* Custom JavaScript */}
      <script>{/* Include your custom JavaScript code here */}</script>
    </div>
  );
};

export default RegistrationForm;
