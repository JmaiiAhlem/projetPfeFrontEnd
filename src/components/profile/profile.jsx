import React, { useState, useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import "../sidenavbar/sidenavbar.css";
import "./profile.css";
import backgroundImage from '../img/background.png';
import Avata from "../img/AhlemJmaii.jpg";

const Profile = () => {
  const [name, setUserName] = useState("");
  const [email, setUserEmail] = useState("");

  useEffect(() => {
    const storedName = sessionStorage.getItem("name");
    const storedEmail = sessionStorage.getItem("email");

    if (storedName) {
      setUserName(capitalizeFirstLetter(storedName));
    }
    if (storedEmail) {
      setUserEmail(storedEmail);
    }
  }, []);

  // Function to capitalize the first letter of a string
  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <div>
    <div className="procontainer d-flex justify-content-center align-items-center vh-60" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="procontent rounded d-flex flex-column justify-content-center align-items-center" style={{ width: '100%',}}>
      <img
        className="img-sm rounded-circle"
        src={Avata}
        alt=""
      />
        <h5 className="mt-3 collr">Ahlem Jmaii : Responsable RH </h5>
      </div>
    </div>
    </div>
  );
};

export default Profile;
