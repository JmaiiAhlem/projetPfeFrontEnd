import React, { useState, useEffect } from "react";
import axios from "axios";
import SideNavbar from "../sidenavbar/sidenavbar";
import Footer  from "../footer/footer";

import "./home.css";
import { useNavigate,Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import arrier from "../img/arrier.png";
import group from "../img/Group126@2x.png";
import { ToastContainer, toast } from "react-toastify";

import { faBriefcase, faBuilding ,faCalendar,faGear,faTable,faUsers,faBars,faBell, 
  faEnvelope,faAngleDown,faEllipsisVertical, faGripHorizontal,faLogout, faSignOutAlt,faFileContract} from '@fortawesome/free-solid-svg-icons';
import Swal from "sweetalert2";

const Home = () => {
  const navigate = useNavigate();
  const [employeeCount, setEmployeeCount] = useState(0); 
  const [employees, setEmployee] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user`);
      if (response.data.userData.length > 0) {
        setAllEmployees(response.data.userData);
        setEmployee(response.data.userData);
        setEmployeeCount(response.data.userData.length); // Mettre à jour le compteur d'employés
      } else {
        console.log("No employees found or empty response.");
      }
    } catch (error) {
      console.error("Error");
    }
  };
  const deleteEmployee = async (employeeId) => {
    try {
      console.log(employeeId);
      // Envoyer une demande de suppression au backend
      const response = await axios.delete(`http://localhost:3001/user/${employeeId}`);
      console.log(response.status);
      if (response.status === 200) {
        navigate("/home/employee");
        showSuccessToast();
        setEmployeeCount(employeeCount - 1); // Mettre à jour le compteur d'employés//
        setEmployee(employees.filter((employee) => employee._id !== employeeId));
        setAllEmployees(allEmployees.filter((employee) => employee._id !== employeeId));
      } else {
        alert(response.data.Error);
        toast.error("Error in deleting. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Error in deleting. Please try again.");
    }
  };
  const showSuccessToast = () => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "success",
      title: "Employé supprimé avec succès",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  }
  useEffect(() => {
    fetchEmployee();
  }, []);
/////// count département ///
const [categoryCount, setCategoryeCount] = useState(0);
const [categories, setCategories] = useState([]);
const [allCategories, setAllCategories] = useState(null);
//get categories
const fetchCategories = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3001/category`
    );
    console.log(response.data.CategoryData);
    if (response.data.CategoryData && response.data.CategoryData.length > 0) {
      setCategories(response.data.CategoryData);
      setCategoryeCount(response.data.CategoryData.length);
    } else {
      console.log("No categories found or empty response.");
    }
  } catch (error) {
    console.error("Error");
  }
};
const deleteCategory = async (CategoryId) => {
  try {
    console.log(CategoryId);
    // Send a delete request to the backend
    const response = await axios.delete(
      `http://localhost:3001/category/${CategoryId}`
    );
      console.log(response.status);
    if (response.status === 200 ) {
      navigate("/home/category")
         showSuccessToast();
         setCategoryeCount(categoryCount - 1);
    } else {
      alert(response.data.Error);
      toast.error("Error in deleting. Please try again.");
    }
  } catch (error) {
    console.error("Error deleting departement:", error);
    toast.error("Error in deleting. Please try again.");
  }
};
useEffect(() => {
  fetchCategories();
}, [allCategories]);
////// count societe /////
const [societes, setSociete] = useState([]);
const [allSocietes, setAllSocietes] = useState([]);
const [societeCount, setSocieteCount] = useState(0);
const fetchSociete = async () => {
  try {
    const response = await axios.get(
      `http://localhost:3001/societe`
    );
    if (response.data.SocieteData.length > 0) {
      setAllSocietes(response.data.SocieteData);
      setSociete(response.data.SocieteData);
      setSocieteCount(response.data.SocieteData.length);
    } else {
      console.log("No Societes found or empty response.");
    }
  } catch (error) {
    console.error("Error fetching Societe data:", error);
  }
};
useEffect(() => {
  fetchSociete();
}, []);
const deleteSociete = async (SocieteId) => {
  try {
    console.log(SocieteId);
    const response = await axios.delete(
      `http://localhost:3001/societe/${SocieteId}`
    );
    console.log(response.status);
    if (response.status === 200) {
      navigate("/home/Societe");
      showSuccessToast();
      setSocieteCount(societeCount - 1);
      // search des societe par lettre
      setSociete(societes.filter((societe) => societe._id !== SocieteId));
      setAllSocietes(allSocietes.filter((societe) => societe._id !== SocieteId));
    } else {
      alert(response.data.Error);
      toast.error("Error in deleting. Please try again.");
    }
  } catch (error) {
    console.error("Error deleting Societe:", error);
    toast.error("Error in deleting. Please try again.");
  }
};

  return (
    <div>
       <div className="content-wrapper">
    <div className="row">
      <div className="col-12 grid-margin stretch-card">
        <div className="card corona-gradient-card">
          <div className="card-body py-0 px-0 px-sm-3">
          <div className="row align-items-center">
  <div className="col-4 col-sm-3 col-xl-2">
    <img
      src={group}
      className="gradient-corona-img img-fluid"
      alt="Group"
    />
  </div>
  <div className="col-5 col-sm-7 col-xl-8 p-0 text-white">
    <h4 className="mb-1 mb-sm-0">Bienvenue chez Visto Rh 🎉</h4>
    <p className="mb-0 font-weight-normal d-none d-sm-block">
      Chaque talent est valorisé. <br />
      Chaque individu est encouragé à atteindre son plein potentiel professionnel.
    </p>
  </div>
  <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
    <img
      src={arrier}
      className="gradient-corona-img img-fluid"
      alt="Arrier"
    />
  </div>
</div>

          </div>
        </div>
      </div>
    </div>
     <div className="col-12 card">
      {" "}
      <br />
      <h4 className="card-title col col-xl-3">Liste des services</h4>
      <br />
      <div className="row">
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                    <h4 className="text-primary  mb-0 font-weight-medium">
                      <strong> Total: {societeCount} </strong>
                    </h4>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-primary menu-icon ">
                  <FontAwesomeIcon icon={faBuilding}  className="text-primary"/>
                  </div>
                </div>
              </div>
              <a href="/home/societes" className="text-muted font-weight-normal">
                <h6>Sociétés</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                  <h4 className="text-primary  mb-0 font-weight-medium">
                      <strong> Total: {categoryCount} </strong>
                    </h4>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-violet">
                  <FontAwesomeIcon icon={faTable}  className="text-info"/>
                  </div>
                </div>
              </div>
              <a
                href="departements.html"
                className="text-muted font-weight-normal"
              >
                <h6>Départements</h6>
              </a>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                   
                    <h4 className="text-primary  mb-0 font-weight-medium">
                      <strong> Total: {employeeCount} </strong>
                    </h4>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-danger">
                    
                    <FontAwesomeIcon icon={faUsers}  className="text-danger"/>
                  </div>
                </div>
              </div>
              <Link to="/home/employee" className="text-muted font-weight-normal">
                <h6>Employés</h6>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                  <h4 className="text-primary  mb-0 font-weight-medium">
                      <strong> Total:0 </strong>
                    </h4>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-success ">
                    <span className="mdi mdi-calendar icon-item" />
                   
                    <FontAwesomeIcon icon={faCalendar}  className="text-success"/>
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">
                Demandes des congés
              </h6>
            </div>
          </div>
        </div>
        <div className="col-xl-3 col-sm-6 grid-margin stretch-card">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-9">
                  <div className="d-flex align-items-center align-self-start">
                  <h4 className="text-primary  mb-0 font-weight-medium">
                      <strong> Total: 0</strong>
                    </h4>
                  </div>
                </div>
                <div className="col-3">
                  <div className="icon icon-box-jaune ">
                  
                  <FontAwesomeIcon icon={faFileContract}   className="text-jaune"/>
                  </div>
                </div>
              </div>
              <h6 className="text-muted font-weight-normal">Contrats</h6>
            </div>
          </div>
        </div>
      </div>
    </div>{" "} 
    <br />
   <div className="col-12 card"> <br/>

            <h4 className="card-title">Les localisations</h4>
            <div className="row">
              <div className="col-md-5">
                <div className="table-responsive">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>
                          
                          <strong>Visto group Suisse:</strong> Avenue
                          Louis-Casai 81 Cointrin, 1216 Geneva
                        </td>
                      </tr>
                      <tr>
                        <td>
                     
                          <strong>Visto consulting Sousse:</strong>
                          Rue du 1er Juin 4060 Kalaa Kebira
                        </td>
                      </tr>
                      <tr>
                        <td>
                      
                          <strong>Dnext Intelligence Sousse:</strong> Rue du 1er
                          Juin 4060 Kalaa Kebira
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="col-md-7">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.2419544916866!2d6.101043687504882!3d46.22553290780686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c65ae922d600f%3A0x39215b887736bf10!2sVisto%20Group%20SA!5e0!3m2!1sfr!2stn!4v1715321466196!5m2!1sfr!2stn"
                  width="100%"
                  height={300}
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
          
        </div>
      </div>
    </div> 
    <br />
  </div>

      <Footer/>
      
    </div>
  );
};

export default Home;
