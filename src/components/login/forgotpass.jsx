import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import imageArt from "../img/back1.png";
import logo from "../img/Logo.png"; 
import img from "../img/home1-pic1.jpg"
import { Link } from "react-router-dom";
import "../firstpage/firstpage.css";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "../../store";

function Forgot() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/forgotpass", {
        email,
      })
      .then((res) => {
        console.log("login:" + res.data);
        if (res.data.Status == "Success") {
          if (res.data.role == "admin") {
            navigate("/home");
          } else {
            navigate("/");
          }
        }
      })
      .catch((err) => console.log(err));
  };

  const [isHoveredSignUp, setIsHoveredSignUp] = useState(false);
  const [isHoveredLogin, setIsHoveredLogin] = useState(false);

  const buttonStyle = {
    marginRight: "10px",
    borderRadius: "12px",
    color: "#000000",
    border: "2px solid transparent",
    transition: "border 0.3s",
    fontWeight: "500",
    fontSize: "1rem",
  };
  const buttonHoverStyle = {
    border: "2px solid #000000",
  };
  const cardNew = {
    width: "75%",
    paddingTop: "7%",
  };

  return (

  <div className="body ">
  <div className="container">
  <div className="row">
    <div className="col-6">

      <div className="screen">
        <div className="screen__content">
          <div className="social-icons">
            <img className="w-30 log" src={logo} />
          </div>
          <form className="login">
            <h6 className="txt col">Mot de passe oublié</h6>
            <div className="login__field">
              <i className="login__icon fas fa-user" />
              <input
                type="text"
                className="login__input"
                placeholder="Adresse Email"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
         
            <br />
            <Link to="/resetpass/:id/:token" className="lab">
             Réinitialiser le mot de passe ! 
       </Link>
       <button className="button login__submit" >
                 <span className="button__text "  onClick={(e)=>handleSubmit(e)}>Envoyer</span>
                 <i className="button__icon fa fa-chevron-right" />
               </button>
          </form>
        </div>
        <div className="screen__background">
          <span className="screen__background__shape screen__background__shape4" />
          <span className="screen__background__shape screen__background__shape3" />
          <span className="screen__background__shape screen__background__shape2" />
          <span className="screen__background__shape screen__background__shape1" />
        </div>
      </div>
    </div>

    <div className="col-6  ">
      <div className="screen1">
        <div className="screen__content1">
        
        
        </div>
        </div>
      </div>
    </div>
    
  </div>
</div>

  );
}

export default Forgot;
