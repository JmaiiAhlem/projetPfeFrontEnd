import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "../firstpage/firstpage.css";
import "./signup.css";
import logo from "../img/Logo.png"; 
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup= () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
 const [passwordVisible, setPasswordVisible] = useState(false);
 const [password, setPassword] = useState('');
 const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    role:'user',
    category:'',
    verif:false
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    console.log(formData);
    axios.post('http://localhost:3001/user/createUser', formData)

    .then((response) => {
      if(response.status===201){
         navigate("/home/verification")
         showSuccessToast()
      }else if(response.status === 409){
        showErrorToast()
      }
      console.log(response.status);
    })
    .catch((error) => showErrorToast());

};
   const showErrorToast = () => {
    console.log("eeee");
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "error",
      title: "Compte déja crée",
      width: "500px",
      showCloseButton: false,
    });
  }

   const showSuccessToast = ()  => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "success",
      title: "Vous êtes Connecté",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  }
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
            <form className="signup">
              <h6 className="txt col">Créer  un compte</h6>
              <div className="login__field">
                <i className="login__icon fas fa-user" />
                <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="login__input"
          id="inputNom"
          placeholder="Entrez Nom"
          required
        />
              </div>
              <div className="login__field">
                <i className="login__icon fas fa-envelope" />
                <input
                  type="text"
                  name="email"
                  className="login__input"
                  placeholder="Adresse Email"
                  value={formData.email}
                  onChange={handleChange} 
                                  />
              </div>
              <div className="login__field">
      <i className="login__icon fas fa-lock" />
      <input
        type={passwordVisible ? "text" : "password"}
        name="password"

        className="login__input"
        placeholder="Mot de passe"
        value={formData.password}
          onChange={handleChange} 
      />
      <i
        className="login__icon fas fa-eye"
        onClick={() => setPasswordVisible(!passwordVisible)}
        style={{ position: 'absolute', left: '210px', top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
            
              <Link to="/forgotpass" className="lab">
        Mot de passe oublié ?
      </Link>
       <br/> 
      <p  className="lab">
             Vous avez un compte! <Link to="/" className="lab1 tx"> <strong>CONNECTER</strong>
      </Link>
      </p>
              <button className="button login__submit" type ="submit" onClick={(e)=>handleSubmit(e)}>
                <span className="button__text"   >Envoyer</span>
                <i className="button__icon fa fa-chevron-right"  />
              </button> <br/>
            
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
};



export default Signup;
