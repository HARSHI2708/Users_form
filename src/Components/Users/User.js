import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Button from "@mui/material/Button";
import { IconButton, Typography } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';

const User = () => {
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
  const { id } = useParams();

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    const res = await axios.get(`http://localhost:3003/users/${id}`);
    setUser(res.data);
  };

  return (
    <div className="container py-4">

<Link to={"/"} style={{ textDecoration: 'none', color: 'inherit' }}>
      <IconButton color="primary" aria-label="back to home">
        <ArrowCircleLeftIcon />
        <Typography variant="body1">Back to Home</Typography>
      </IconButton>
    </Link>
      
      
      <h1 className="display-4">User Id: {id}</h1>
      <hr />
      <ul className="list-group w-50">
        <li className="list-group-item">Firstname : {user.firstname}</li>
        <li className="list-group-item">Lastname : {user.lastname}</li>
        <li className="list-group-item">E-mail : {user.email}</li>
        <li className="list-group-item">Phone-No : {user.phone}</li>
        <li className="list-group-item">Address1 : {user.address1}</li>
        <li className="list-group-item">Address2 : {user.address2}</li>
        <li className="list-group-item">Country : {user.country}</li>
        <li className="list-group-item">State : {user.state}</li>
        <li className="list-group-item">Zip-code : {user.zipcode}</li>
      </ul>
    </div>
  );
};

export default User;
