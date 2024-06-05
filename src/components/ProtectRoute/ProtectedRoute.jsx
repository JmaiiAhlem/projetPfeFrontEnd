import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  MdPeople,
  MdDashboard,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import avatar from '../img/femme.png';
import {
  FaUserCircle,
  FaHome,
  FaCog
} from "react-icons/fa";

import { faBriefcase, faBuilding ,faCalendar,faGear,faTable,faUsers,faBars,faBell, 
  faEnvelope,faAngleDown,faEllipsisVertical, faGripHorizontal,faSignOutAlt,faFileContract, faHandPointUp} from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from "react-router-dom";


import "../ProtectRoute/ProtectedRoute.css";
import { useDispatch } from "react-redux/es/exports";
import { authActions } from "../../store";
import "react-toastify/dist/ReactToastify.css";
import Logo from "../img/Logo.png";
import logomini from "../img/logo -mini.png";
import logoBlan from "../img/logoMini.png";
import Avata from "../img/AhlemJmaii.jpg";
// import arrier from "../img/arrier.png";
// import group from "../img/Group126@2x.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FirstPage from "../firstpage/firstpage";


let id = sessionStorage.getItem("id");
const ProtectedRoute = ({ children }) => {
  const [show, setShow] = useState(true);
  const [name, setUserName] = useState("");
  const navigate = useNavigate();
  const [userData, setUserData] = useState(null);
  const [showDepartments, setShowDepartments] = useState(false);

  const toggleDepartments = () => {
    setShowDepartments(!showDepartments);
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const [dates, setDates] = useState([]); 
  const [searchTerm, setSearchTerm] = useState([]); 
   useEffect(() =>{
     fetch("https://jsonplaceholder.typicode.com/")
     .then ((reponse) => reponse.json())
     .then ((json) => setDates(json));
   },[]);
console.log(dates);
const handleSearchTerm = (e) =>{
let value = e.target.value; 
 setSearchTerm(value);
};

  const dispatch = useDispatch();
  const logout = () => {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');
    localStorage.removeItem('name');

    localStorage.removeItem('expirationTime');
    sessionStorage.clear();
    navigate('/')

  };
  const userMenu = [
  
    {
      title: "Sociétés",
      path: "/home/societes",
      icon: <i className="fas fa-university react-icon"></i>,
      onClick: () => navigate("/home/societes"),
      className: "txx",
    },
    {
      title: "Départements",
      path: "/home/category",
      icon: <i className="fas fa-building react-icon"></i>,
      onClick: () => navigate("/home/category"),
      className:"txx",
    },
    {
      title: "Employés",
      path: "/home/employee",
      icon: <i className="fas fa-users react-icon"></i>,
      onClick: () => navigate("/home/employe"),
      className:"txx",
    },
    {
      title: " Congés",
      path: "/home/conges",
      icon: <i className="fas fa-calendar-alt react-icon"></i>,
      onClick: () => navigate("/home/conges"),
      className:"txx",
    },
    {
      title:"Contrats",
      path: "/home",
      icon: <i className="fas fa-briefcase react-icon"></i>,
      onClick: () => navigate("/home"),
      className:"txx",
    },
    {
      title: "Profil",
      path: "/home",
      icon: <FaUserCircle className="react-icon" />,
      onClick: () => navigate("/home"),
      className: "txx",
    },
    {
      title: "Paramètre",
      path: "/home",
      icon: <FaCog className="react-icon" />,
      onClick: () => navigate("/home"),
      className: "txx",
    }
  ];
  


  const adminMenu = [
    {
      title: "Dashboard",
      path: "/home",
      icon: <MdDashboard className="react-icon" />,
     // onClick: () => navigate("/home"),
    },
    {
      title: "Utilisateurs",
      path: "/home/user",
      icon: <FaUserCircle className="react-icon" />,
      onClick: () => navigate("/home/user"),
    },
    {
      title: "Employés",
      path: "/home/employee",
      icon: <MdPeople className="react-icon" />,
      onClick: () => navigate("/home/employees"),
    },
    {
      title: "Catégorie",
      path: "/home/category",
      icon: <MdOutlineFormatListBulleted className="react-icon" />,
      onClick: () => navigate("/home/category"),
    },
    {
      title: "Profil",
      path: "/home/profile",
      icon: <FaUserCircle className="react-icon" />,
      onClick: () => navigate("/home/profile"),
    },
    {
      title: "Page d'accueil",
      path: "/",
      icon: <FaHome className="react-icon" />,
      onClick: logout,
    },
    {
      title: "type Contrat",
      path: "/home/typeContrat",
      icon: <MdDashboard className="react-icon" />,
      onClick: () => navigate("/home/typeContrat"),
    },
  ];
  const storedEmail = localStorage.getItem('userEmail');
  const storedName = localStorage.getItem('name');
  const storedRole = localStorage.getItem('userRole');



  const getFirstLetter = (str) => {
    return str.charAt(0).toUpperCase();
  };
  const expirationTime = localStorage.getItem('expirationTime');
  console.log(expirationTime);
  useEffect(()=>{
    const currentTimestamp = new Date().getTime();
    console.log(currentTimestamp > parseInt(expirationTime));
    if (expirationTime && currentTimestamp > parseInt(expirationTime)) {
      // Le temps d'expiration est dépassé, effacer les données du localStorage
      localStorage.removeItem('userEmail');
      localStorage.removeItem('userRole');
      localStorage.removeItem('expirationTime');
  }

  },[expirationTime])
console.log(storedEmail);
  if(storedEmail!==null) {
  return (
   
    <main className={show ? "space-toggle" : null}>
    <div className="container-scroller body1">
      <nav className="navbar p-0 fixed-top d-flex flex-row">
    <div className="navbar-brand-wrapper d-flex d-lg-none align-items-center justify-content-center">
      <a className="navbar-brand brand-logo-mini" href="index.html">
        <img className="w-100" src={logoBlan} alt="logo" />
      </a>
    </div>
    <div className="navbar-menu-wrapper flex-grow d-flex align-items-stretch">
      <button
        className="navbar-toggler navbar-toggler align-self-center"
        type="button"
        data-toggle="minimize"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      <ul className="navbar-nav w-100">
        <li className="nav-item w-100">
          <form className="nav-link mt-2 mt-md-0 d-none d-lg-flex search">
            <input
              type="text"
              className="form-control txt"
              placeholder="Rechercher"
              onChange={handleSearchTerm}
            />
            <div className="search
            ">
  {dates.filter((val) => {
    return val.title.includes(searchTerm); 
  }).map((val) => {
    return (
      <div className="search" key={val.id}> 
        {val.title}
      </div>
    );
  })}
</div>
          </form>
        </li>
      </ul>
      <ul className="navbar-nav navbar-nav-right">
        <li className="nav-item dropdown d-none d-lg-block">
          <a
            className="nav-link btn btn-success create-new-button"
            id="createbuttonDropdown"
            data-toggle="dropdown"
            aria-expanded="false"
            href="#"
          >
            + Créer un nouveau service{" "}
          </a>
          <div
            className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
            aria-labelledby="createbuttonDropdown"
          >
            <h6 className="p-3 mb-0">Services</h6>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-arrier rounded-circle">
                  <i className="mdi mdi-city text-primary" />
                  
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1">Sociétés</p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-arrier rounded-circle">
              
                  <FontAwesomeIcon icon={faTable}  className="text-info"/>
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1">Départements</p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-arrier rounded-circle">
                  <FontAwesomeIcon icon={faUsers}  className="text-danger"/>
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1">Employés</p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <p className="p-3 mb-0 text-center">Afficher tous les services</p>
          </div>
        </li>
        <li className="nav-item nav-settings d-none d-lg-block">
          <a className="nav-link" href="#">
            <i className="mdi mdi-view-grid" />
          </a>
        </li>
        <li className="nav-item dropdown border-left">
          <a
            className="nav-link count-indicator dropdown-toggle"
            id="messageDropdown"
            href="https://app.slack.com/client/T06HT13LMLH/C06HGSHF19S"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faEnvelope} />
            <span className="count bg-success" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
            aria-labelledby="messageDropdown"
          >
            <h6 className="p-3 mb-0">Messages</h6>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img
                  src="assets/images/faces/face4.jpg"
                  alt="image"
                  className="rounded-circle profile-pic"
                />
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1">
                  Mark send you a message
                </p>
                <p className="text-muted mb-0"> 1 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img
                  src="assets/images/faces/face2.jpg"
                  alt="image"
                  className="rounded-circle profile-pic"
                />
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1">
                  Cregh send you a message
                </p>
                <p className="text-muted mb-0"> 15 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <img
                  src="assets/images/faces/face3.jpg"
                  alt="image"
                  className="rounded-circle profile-pic"
                />
              </div>
              <div className="preview-item-content">
                <p className="preview-subject ellipsis mb-1">
                  Profile picture updated
                </p>
                <p className="text-muted mb-0"> 18 Minutes ago </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <p className="p-3 mb-0 text-center">4 new messages</p>
          </div>
        </li>
        <li className="nav-item dropdown border-left">
          <a
            className="nav-link count-indicator dropdown-toggle"
            id="notificationDropdown"
            href="#"
            data-toggle="dropdown"
          >
            <FontAwesomeIcon icon={faBell} />
            <span className="count bg-danger" />
          </a>
          <div
            className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
            aria-labelledby="notificationDropdown"
          >
            <h6 className="p-3 mb-0">Notifications</h6>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-arrier rounded-circle">
                  <i className="mdi mdi-calendar text-success" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject mb-1">Event today</p>
                <p className="text-muted ellipsis mb-0">
                  {" "}
                  Just a reminder that you have an event today{" "}
                </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-settings text-danger" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject mb-1">Paramètres</p>
                <p className="text-muted ellipsis mb-0">
Mettre à jour le tableau de bord </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item preview-item">
              <div className="preview-thumbnail">
                <div className="preview-icon bg-dark rounded-circle">
                  <i className="mdi mdi-link-variant text-warning" />
                </div>
              </div>
              <div className="preview-item-content">
                <p className="preview-subject mb-1">Launch Admin</p>
                <p className="text-muted ellipsis mb-0"> New admin wow! </p>
              </div>
            </a>
            <div className="dropdown-divider" />
            <p className="p-3 mb-0 text-center"> Afficher toutes les notifications</p>
          </div>
        </li>
       <li className="nav-item dropdown">
  <a
    className="nav-link"
    id="profileDropdown"
    href="#"
    data-bs-toggle="dropdown"
    aria-expanded="false"
  >
     <div className="navbar-profile">
      <img
        className="img-sm rounded-circle"
        src={Avata}
        alt=""
      />
      <a href="/home/adminProfile" className="mb-0 d-none d-sm-block navbar-profile-name text-muted1">
      {storedName}
      </a>
      <FontAwesomeIcon icon={faAngleDown} />
    </div>
  </a>
  <div
    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list"
    aria-labelledby="profileDropdown"
  >
    <h6 className="p-3 mb-0">Profil</h6>
    <div className="dropdown-divider" />
    <a className="dropdown-item preview-item">
      <div className="preview-thumbnail">
        <div className="preview-icon bg-dark rounded-circle">
          <FontAwesomeIcon icon={faGear}  className="text-primary"/>
        </div>
      </div>
      <div className="preview-item-content">
        <p className="preview-subject mb-1">Paramètres</p>
      </div>
    </a>
    <div className="dropdown-divider" />
    <a className="dropdown-item preview-item">
      <div className="preview-thumbnail">
        <div className="preview-icon bg-dark rounded-circle">
          <FontAwesomeIcon icon={faSignOutAlt} className="text-danger" />
        </div>
      </div>
      <div className="preview-item-content">
        <p className="preview-subject mb-1">Déconnecter</p>
      </div>
    </a>
    <div className="dropdown-divider" />
    <p className="p-3 mb-0 text-center">Réglages avancés</p>
  </div>
</li>

      </ul>
      <button
        className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
        type="button"
        data-toggle="offcanvas"
      >
        <span className="mdi mdi-format-line-spacing" />
      </button>
    </div>
  </nav>
    <nav className="sidebar sidebar-offcanvas" id="sidebar">
      <div className="sidebar-brand-wrapper d-none d-lg-flex align-items-center justify-content-center fixed-top">
        <a className="sidebar-brand brand-logo" href="/home">
          <img src={Logo} alt="logo" />
        </a>
        <a className="sidebar-brand brand-logo-mini" href="/home">
          <img className="w-80" src={logomini} alt="logo" />
        </a>
      </div>
      <ul className="nav">
        <div className="dropdown-divider0" />
        <li className="nav-item profile">
          <div className="profile-desc">
            <div className="profile-pic">
              <div className="count-indicator">
                <img
                  className="img-sm rounded-circle  "
                  src={Avata}
                  alt=""
                />
                <span className="count bg-success" />
              </div>
              <div className="profile-name">
                <h5   className="mb-0 font-weight-normal col " >{storedName}</h5>
                <span className="col">{storedRole}</span>
              </div>
            </div>
            <a href="#" id="profile-dropdown" data-toggle="dropdown">
              <FontAwesomeIcon icon={faEllipsisVertical} />
            </a>
            <div
              className="dropdown-menu dropdown-menu-right sidebar-dropdown preview-list"
              aria-labelledby="profile-dropdown"
            >
              <a href="#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                  
                    <FontAwesomeIcon icon={faGear}  className="text-primary"/>
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">
                    Paramètres du compte
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
              <a href="#" className="dropdown-item preview-item">
                <div className="preview-thumbnail">
                  <div className="preview-icon bg-dark rounded-circle">
                    <i className="mdi mdi-onepassword  text-info" />
                  </div>
                </div>
                <div className="preview-item-content">
                  <p className="preview-subject ellipsis mb-1 text-small">
                    Changer le mot de passe
                  </p>
                </div>
              </a>
              <div className="dropdown-divider" />
            </div>
          </div>
        </li>{" "}
        <div className="dropdown-divider0" />

        {storedRole === "admin"&& 
        <li className="nav-item menu-items active">
          <a className="nav-link" href="/home">
            <span className="menu-icon ">
            <FontAwesomeIcon icon={faGripHorizontal} className="text-jaune" />
        
            </span>
            <span className="menu-title">Dashboard RH</span>
          </a>
        </li>
  }
        <div className="dropdown-divider0" />
        {storedRole === "admin"&& 
        <li className="nav-item menu-items ">
          <a className="nav-link" onClick={toggleDepartments}>
            <span className="menu-icon ">
              <FontAwesomeIcon icon={faUsers} className="text-danger" />
            </span>
            <span className="menu-title">Gestion Effectifs</span>
            <span className="menu-arrow">
              <i className={`mdi mdi-chevron-right ${showDepartments ? 'open' : ''}`}></i>
            </span>
          </a>
          {showDepartments && (
            <ul className="sub-menu">
           <li className="nav-item menu-items ">
    <a className="nav-link" href="/home/societes">
      <span className="menu-icon">
        <FontAwesomeIcon icon={faBuilding} className="text-primary" />
      </span>
      <span className="menu-title">Sociétés</span>
    </a>
  </li>
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/category">
      <span className="menu-icon">
        <FontAwesomeIcon icon={faTable} className="text-info" />
      </span>
      <span className="menu-title">Départements</span>
    </a>
  </li>
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/employee">
      <span className="menu-icon">
        <FontAwesomeIcon icon={faUsers} className="text-danger" />
      </span>
      <span className="menu-title">Employés</span>
    </a>
  </li>
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/contrat">
      <span className="menu-icon text-jaune">
        <FontAwesomeIcon icon={faFileContract} />
      </span>
      <span className="menu-title"> Contrats</span>
    </a>
  </li>
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/typeContrat">
      <span className="menu-icon text-jaune">
        <FontAwesomeIcon icon={faFileContract} />
      </span>
      <span className="menu-title"> Type Contrats</span>
    </a>
  </li>
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/bank">
      <span className="menu-icon text-jaune">
        <FontAwesomeIcon icon={faFileContract} />
      </span>
      <span className="menu-title"> Banques</span>
    </a>
  </li>
            </ul>
          )}
        </li>
  }
      

        <div className="dropdown-divider0" />
        <li className="nav-item menu-items ">
          <a className="nav-link" onClick={toggleDepartments}>
          <span className="menu-icon">
              <FontAwesomeIcon icon={faCalendar}  className="text-success"/>
            </span>
            <span className="menu-title"> Congés et Autorisation</span>
            <span className="menu-arrow">
              <i className={`mdi mdi-chevron-right ${showDepartments ? 'open' : ''}`}></i>
            </span>
          </a>
          {showDepartments && (
            <ul className="sub-menu">
       <a className="nav-link" href="/home/conges">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faCalendar}  className="text-success"/>
            </span>
            <span className="menu-title">Demandes des congés</span>
          </a>
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/category">
      <span className="menu-icon">
        <FontAwesomeIcon icon={faTable} className="text-info" />
      </span>
      <span className="menu-title">Liste de Congés</span>
    </a>
  </li>
  {storedRole === "admin"&& 
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/employee">
      <span className="menu-icon">
        <FontAwesomeIcon icon={faUsers} className="text-danger" />
      </span>
      <span className="menu-title">Jours Féries</span>
    </a>
  </li>
  }
    {storedRole === "admin"&& 
  <li className="nav-item menu-items">
    <a className="nav-link" href="/home/contrat">
      <span className="menu-icon text-jaune">
        <FontAwesomeIcon icon={faFileContract} />
      </span>
      <span className="menu-title"> Type de Demande</span>
    </a>
  </li>
  }
            </ul>
          )}
        </li>


        {/* <li className="nav-item menu-items">
          <a className="nav-link" href="/home/conges">
            <span className="menu-icon">
              <FontAwesomeIcon icon={faCalendar}  className="text-success"/>
            </span>
            <span className="menu-title">Demandes des congés</span>
          </a>
        </li> */}
        <div className="dropdown-divider0" />
      
      <li className="nav-item menu-items">
        <a className="nav-link" href="/home/pointage">
          <span className="menu-icon">
            <FontAwesomeIcon icon={faHandPointUp}  className="text"/>
          </span>
          <span className="menu-title">Pointage</span>
        </a>
      </li>
        <div className="dropdown-divider0" />
        <li className="nav-item menu-items">
          <a
            className="nav-link"
            href="http://www.bootstrapdash.com/demo/corona-free/jquery/documentation/documentation.html"
          >
            <span className="menu-icon">

              <FontAwesomeIcon icon={faGear}  className="text-primary"/>
            </span>
            <span className="menu-title">Paraméters</span>
          </a>
        </li>
        <div className="dropdown-divider0" />
        <li className="nav-item menu-items">
          <button
            className="nav-link"
            onClick={logout}
          >
            <span className="menu-icon">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-danger" />
            </span>
            <span className="menu-title" >Déconnecter</span>
          </button>
        </li>
      </ul>
    </nav>

    <div className="main-panel">
    <div className="content">{children}</div>
 
</div>

    
  </div>
  </main>

  );
  }else {
    return(
      <FirstPage/>
    )
  }
};

export default ProtectedRoute;
