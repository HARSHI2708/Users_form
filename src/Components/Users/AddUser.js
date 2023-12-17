import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const AddUser = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    zipcode:"",
  });

  const [errors, setErrors] = useState({});

  const { firstname, lastname, email, phone, address1,address2 ,country, state,zipcode} = user;
  
  const validateEmail = (email) => {
    // Basic email validation regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    // Validate phone number: country code + 10 digits
    return /^\+\d{1,3}\d{10}$/.test(phone);
  };

  const validateZipcode = (zipcode) => {
    // Validate Zip-code: 5 digits
    return /^\d{5}$/.test(zipcode);
  };

  const validateForm = () => {
    const newErrors = {};

    if (firstname.trim() === "" || firstname.length < 5) {
      errors.firstname = "First name must be at least 5 characters";
    }  else {
      newErrors.firstname = "";
    }
    

    if (lastname.trim() === "" || lastname.length < 5) {
      errors.lastname = "Last name must be at least 5 characters";
    } else {
      newErrors.lastname = "";
    }

    if (!validateEmail(email)) {
      errors.email = "Enter a valid email address";
    } else {
      newErrors.email = "";
    }

    if (!validatePhone(phone)) {
      errors.phone = "Enter a valid phone number with country code";
    } else {
      newErrors.phone = "";
    }

    if (!validateZipcode(zipcode)) {
      errors.zipcode = "Enter a valid 5-digit zipcode";
    } else {
      newErrors.zipcode = "";
    }

    if (address1.trim() === "") {
      newErrors.address1 = "Address1 cannot be blank";
    } else {
      newErrors.address1 = "";
    }
  
    if (address2.trim() === "") {
      newErrors.address2 = "Address2 cannot be blank";
    } else {
      newErrors.address2 = "";
    }
  
    if (state.trim() === "") {
      newErrors.state = "State cannot be blank";
    } else {
      newErrors.state = "";
    }
  
    if (country.trim() === "") {
      newErrors.country = "Country cannot be blank";
    } else {
      newErrors.country = "";
    }

    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };


  const onInputChange = (e) => {
    // console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        await axios.post("http://localhost:3003/users", user);
        navigate("/");
      } catch (error) {
        // Handle error if axios post fails
        console.error("Error while submitting:", error);
      }
    }
  };

  return (
    <Box >
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add a User</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            <TextField
              label="First Name"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your First Name"
              name="firstname"
              value={firstname}
              onChange={(e) => onInputChange(e)}
              error={!!errors.firstname}
              helperText={errors.firstname}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Last Name"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Last Name"
              name="lastname"
              value={lastname}
              onChange={(e) => onInputChange(e)}
              error={!!errors.lastname}
              helperText={errors.lastname}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="E-mail"
              type="email"
              className="form-control form-control-lg"
              placeholder="Enter Your E-mail Address"
              name="email"
              value={email}
              onChange={(e) => onInputChange(e)}
              error={!!errors.validateEmail}
              helperText={errors.validateEmail}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Phone No"
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Phone Number"
              name="phone"
              value={phone}
              onChange={(e) => onInputChange(e)}
              error={!!errors.validatePhone}
              helperText={errors.validatePhone}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Address1"
              multiline
              rows={2}
              type="text"
              className="form-control form-control-lg"
              placeholder="Address-1"
              name="address1"
              value={address1}
              onChange={(e) => onInputChange(e)}
              error={!!errors.address1}
              helperText={errors.address1}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Address2"
              multiline
              rows={2}
              type="text"
              className="form-control form-control-lg"
              placeholder="Address-2"
              name="address2"
              value={address2}
              onChange={(e) => onInputChange(e)}
              error={!!errors.address2}
              helperText={errors.address2}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="State"
              type="text"
              className="form-control form-control-lg"
              placeholder="State"
              name="state"
              value={state}
              onChange={(e) => onInputChange(e)}
              error={!!errors.state}
              helperText={errors.state}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Country"
              type="text"
              className="form-control form-control-lg"
              placeholder="Country"
              name="country"
              value={country}
              onChange={(e) => onInputChange(e)}
              error={!!errors.country}
              helperText={errors.country}
            />
          </div>
          <br />
          <div className="form-group">
            <TextField
              label="Zip-code"
              type="text"
              className="form-control form-control-lg"
              placeholder="Zip-code"
              name="zipcode"
              value={zipcode}
              onChange={(e) => onInputChange(e)}
              error={!!errors.validateZipcode}
              helperText={errors.validateZipcode}
            />
          </div>
          <br />
          <button className="btn btn-success btn-block">Submit</button>
        </form>
      </div>
    </div>
    </Box>
  );
};

export default AddUser;
