import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import logo from "../img/Logo.png"; 
import "../firstpage/firstpage.css";

function Reset() {

  const navigate = useNavigate();
  const { id, token } = useParams();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [password, setPassword] = useState('');
  const newTask  = { password };
  
   const togglePasswordVisibility = () => {
     setPasswordVisible(!passwordVisible);
   };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:4001/resetpass/${id}/${token}`, {
        password,
      })
      .then((res) => {
        if (res.data.Status == "Success") {
          navigate("/login");
        }
      })
      .catch((err) => console.log(err));
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
          <h6 className="txt col">Réinitialiser le mot de  <br/>passe</h6> <br/>
          
         
        
             <div className="login__field">
      <i className="login__icon fas fa-lock" />
    <input
       type={passwordVisible ? "text" : "password"}
  className="login__input"
       placeholder="Nouveau mot de passe"
      value={password}
       onChange={(e) => setPassword(e.target.value)}
     />
     <i
       className="login__icon fas fa-eye"
        onClick={() => setPasswordVisible(!passwordVisible)}
         style={{ position: 'absolute', left: '210px', top: '50%', transform: 'translateY(-50%)' }}
       />
     </div>
             <br />
           
             <button className="button login__submit" >
                 <span className="button__text"  onClick={(e)=>handleSubmit(e)}>Mise à jour</span>
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

export default Reset;
