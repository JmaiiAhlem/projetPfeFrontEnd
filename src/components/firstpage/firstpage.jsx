import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import "./firstpage.css";
import logo from "../img/Logo.png"; 
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const FirstPage = () => {
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
  const [user, setUser] = useState(null);
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  const handleSubmit = () => {

    const newTask  = { email, password };
    console.log(newTask);
    axios.post('http://localhost:3001/user/connected', newTask)
      .then((response) => {
        console.log(response.status);
        if(response.status===200){
          console.log(newTask);

           navigate("/home")
           console.log (response.status);
           showSuccessToast()
           getUserByEmail(newTask.email)
        }else if(response.status === 409){
          showErrorToast("vous n'êtes pas encore verifié!! Veuillez contacter le Ressource Humaine")
        }

        console.log(response.status);

      })

      .catch((error) =>
        {
          console.log(error);
          if(error.response.status===404){
            showErrorToast("Verifier mot passe ou email");

          }else  if(error.response.status===409){
            showErrorToast("vous n'êtes pas encore verifié!! Veuillez contacter le Ressource Humaine");

          }
        })

  };
  const [error, setError] = useState('');

  const getUserByEmail = (email) => {
    axios.get(`http://localhost:3001/user/email?email=${email}`)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.existingUser);

          localStorage.setItem('userEmail', response.data.existingUser.email);
          localStorage.setItem('userRole', response.data.existingUser.role);
          localStorage.setItem('name', response.data.existingUser.name);
          const expirationTime = new Date().getTime() + 60 * 60 * 1000;
          const expirationTimestamp = parseInt(expirationTime);
    
    const expirationDate = new Date(expirationTimestamp).getTime();
          localStorage.setItem('expirationTime', expirationDate);


          setUser(response.data.existingUser);
        } else {
          setUser(null);
        }
      })
      .catch(error => {
        if (error.response) {
          setError(error.response.data.message || 'Error occurred');
        } else if (error.request) {
          setError('No response received');
        } else {
          setError('Request setup error');
        }
        setUser(null);
      });
  };
   const showErrorToast = (message) => {
    console.log("eeee");
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "error",
      title: message,
      width: "500px",
     // padding: "10px 20px",
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
            <form className="login">
              <h6 className="txt col">Connectez-vous à votre compte</h6>
              <div className="login__field">
              <i className="login__icon fas fa-envelope" />
                <input
                  type="text"
                  className="login__input"
                  placeholder="Adresse Email"
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </div>
              <div className="login__field">
      <i className="login__icon fas fa-lock" />
      <input
        type={passwordVisible ? "text" : "password"}
        className="login__input"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <i
        className="login__icon fas fa-eye"
        onClick={() => setPasswordVisible(!passwordVisible)}
        style={{ position: 'absolute', left: '210px', top: '50%', transform: 'translateY(-50%)' }}
      />
    </div>
            
              <Link to="/forgotpass" className="lab">
        Mot de passe oublié 
      </Link>
       <br/> 
      <p  className="lab">
             Vous n'avez pas de compte ? <Link to="/signup" className="lab1 tx"> <strong>INSCRIRE</strong>
      </Link>
      </p>
              <button className="button login__submit" type="button" onClick={handleSubmit}>
                <span className="button__text"   >Connecter</span>
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



export default FirstPage;
