import React, { useState } from "react";
import ImagePreview from "../../components/images/ImagePriveiw";
import "./Form.module.css";
import Card from "../../components/sharable/Card/Card";

const LoginForm = () => {
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
        <Card title="User Login">
          <div className="row">
            <div className="col-md-12 mb-3">
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

            <div className="col-md-12 col-sm-12 mb-3">
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
            <div className="text-center">
              <button
                type="button"
                className="button crimson-gr"
                onClick={submitForm}
              >
                Login
              </button>
            </div>
          </div>
        </Card>
      </form>

      {/* Custom JavaScript */}
      <script>{/* Include your custom JavaScript code here */}</script>
    </div>
  );
};

export default LoginForm;
