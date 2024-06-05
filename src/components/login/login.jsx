import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imageArt from "../img/back1.png";
import Logo from "../img/Logo.png";
import { Link } from "react-router-dom";
import "./login.css";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "../../store";
import { FiEye, FiEyeOff } from "react-icons/fi";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
 
}
from 'mdb-react-ui-kit';

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4001/auth/login/",
        {
          email,
          password,
        }
      );
      const { token } = response.data;
      console.log('Response data:', response.data);

      if (token) {
        console.log("Logged in Successfully");
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("id", response.data.id);
        sessionStorage.setItem("name", response.data.name);
        sessionStorage.setItem("email", response.data.email);
        sessionStorage.setItem("role", response.data.role);
  
        dispatch(authActions.login());
        if (response.data.role === "user") {
          navigate("/home/employee");
        } else {
          navigate("/home");
        }
        window.location.reload();
      } else {
        setError("Login failed. Please try again.");
      }
    } catch (err) {
      if (err.response && err.response.data) {
        setError(err.response.data.error || "Login failed. Please try again.");
      } else {
        setError("Login failed. Please try again.");
      }
    }
  };

  const [isHoveredSignUp, setIsHoveredSignUp] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);

  const buttonStyle = {
    marginTop: "0",
    marginRight: "10px",
    borderRadius: "12px",
    color: "#6A0DAD", // Changement de couleur en violet
    border: "2px solid transparent",
    transition: "border 0.3s",
    fontWeight: "500",
    fontSize: "1rem",
  };

  const buttonHoverStyle = {
    border: "2px solid #6A0DAD", // Changement de couleur de bordure en violet
  };

  const cardNew = {
    width: "75%",
    paddingTop: "7%",
  };

  return (
    <div className="cardStyle">
      <nav className="navbar navbar-expand-lg navbar-light" style={{ top: 0 }}>
        <div className="BAR">
          <Link to="/" className="navbar-brand">
            <img
              src={Logo}
              style={{ height: "150%", marginLeft: "15%" }}
              alt="Logo"
            />
          </Link>{/*
          <div className="d-flex">
            <ul
              className="navbar-nav"
              style={{ display: "flex", flexDirection: "row" }}
            >
              <li className="nav">
                <Link
                  to="/choose"
                  className="nav-link btn btn-outline rounded-10"
                  style={{
                    ...buttonStyle,
                    ...(isHoveredSignUp ? buttonHoverStyle : {}),
                  }}
                  onMouseEnter={() => setIsHoveredSignUp(true)}
                  onMouseLeave={() => setIsHoveredSignUp(false)}
                >
                 Commencer
                </Link>
              </li>
              <li className="nav">
                <Link
                  to="/login"
                  className="nav-link btn btn-size-10 rounded-10"
                  style={{
                    ...buttonStyle,
                    ...(isHoveredLogin ? buttonHoverStyle : {}),
                  }}
                  onMouseEnter={() => setIsHoveredLogin(true)}
                  onMouseLeave={() => setIsHoveredLogin(false)}
                >
                S'inscrire
                </Link>
              </li>
            </ul>
          </div>*/}
        </div>
      </nav>
      {/*<div className="blurredCardStyle mx-auto p-2 rounded-4 px-4">
        <div>
          <img src={imageArt} alt="" className="art" />
        </div>
        <div style={cardNew}>
          <h2
            className="d-flex justify-content-center align-items-center"
            style={{ color: "#262626", fontWeight: "550" }}
          >
            Login
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <div
                className="mb-1"
                style={{ color: "#262626", fontWeight: "550" }}
              >
                <label className="formLabel" htmlFor="email">
                  Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  className="inputStyle form-control rounded-3"
                  required
                  style={{ fontWeight: "520" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <div
                className="mb-1"
                style={{
                  color: "#262626",
                  fontWeight: "550",
                  display: "flex",
                  gap: "60px",
                }}
              >
                <label className="formLabel" htmlFor="email">
                  Password
                </label>
                <div className="showpass">
                  <div className="eyeicon">
                    <button
                      className="passbut"
                      onClick={(event) => handleShowPassword(event)}
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                </div>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                style={{ fontWeight: "520" }}
                className="inputStyle form-control rounded-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p className="text-white">{error}</p>}
            <div className="d-flex justify-content-center">
              <button
                type="submit"
                className="btn w-50 rounded-pill"
                style={{
                  backgroundColor: "#007697",
                  color: "#FFF",
                  marginTop: "5%",
                }}
              >
                Login
              </button>
            </div>
          </form>
        </div>
              </div>*/}

<div

  className="log-form center"
>
  <h2>
    Bienvenue chez visto consulting RH <br/>  <br/> Connecter
  </h2>
  <form>
    <input
      placeholder="Adresse e-mail"
      title="mail"
      type="text"
    />
    <input
      placeholder="Mot de passe "
      title="password"
      type="password"
    />
    <button
      className="btn"
      type="submit"
    >
    Connecter
    </button>
    <a
      className="forgot"
      href="#"
    >
      Mot de passe  oublié ?
    </a>
  </form>
</div>
{/*
      <div className='p-3'>
      <MDBContainer fluid className='background-radial-gradient overflow-hidden cardNew'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

    <h1 className="my-5 display-3 fw-bold ls-tight px-3" style={{color: '#44006b'}}>
      
    Connexion
   <br />
      <span style={{color: '#44006b'}}>à la Plateforme</span>
    </h1>

    <p className='px-3' style={{color: '#000'}}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Eveniet, itaque accusantium odio, soluta, corrupti aliquam
      quibusdam tempora at cupiditate quis eum maiores libero
      veritatis? Dicta facilis sint aliquid ipsum atque?
    </p>

  </MDBCol>

  <MDBCol md='6' className='position-relative'>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass'>
      <MDBCardBody className='p-5'>
      <div className="mb-3">
              <div
                className="mb-1"
                style={{ color: "#262626", fontWeight: "550" }}
              >
                <label className="formLabel" htmlFor="email">
                  Adresse Email
                </label>
              </div>
              <div>
                <input
                  type="email"
                  autoComplete="off"
                  name="email"
                  className="inputStyle form-control rounded-3"
                  required
                  style={{ fontWeight: "520" }}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="mb-3">
              <div
                className="mb-1"
                style={{
                  color: "#262626",
                  fontWeight: "550",
                  display: "flex",
                  gap: "60px",
                }}
              >
                <label className="formLabel" htmlFor="email">
                Mot de passe
                </label>
                <div className="showpass">
                  <div className="eyeicon">
                    <button
                      className="passbut"
                      onClick={(event) => handleShowPassword(event)}
                    >
                      {showPassword ? <FiEye /> : <FiEyeOff />}
                    </button>
                  </div>
                </div>
              </div>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                style={{ fontWeight: "520" }}
                className="inputStyle form-control rounded-3"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
        
        <MDBBtn className='w-100 mb-4 text-center bg' size='md'>Se connecter</MDBBtn>
        <div className='d-flex justify-content-center '>
        <Link className='d-flex justify-content-center mb-2' style={{color: '#44006b'}} to="/forgotpass">Mot de passe Oublié !</Link>
        </div>
        <label className='d-flex justify-content-center mb-2' style={{ whiteSpace: 'pre' }}>Vous n'avez pas d'un compte ?   <Link to='/register' style={{color: '#44006b'}}>S'inscrire</Link></label>
      

       

      </MDBCardBody>
    </MDBCard>

  </MDBCol>

</MDBRow>

</MDBContainer>
</div>*/}
    </div>
  );
}

export default Login;
