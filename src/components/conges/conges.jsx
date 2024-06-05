import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../ProtectRoute/ProtectedRoute.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Footer from "../footer/footer";
import arrier from "../img/arrier.png";
import group from "../img/Group126@2x.png";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';
 import './conges.css';

const Conges = () => {
  const [employees, setEmployee] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [date, setDate] = useState(new Date());

  //get employee
  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user`);
      if (response.data.userData.length > 0) {
        setAllEmployees(response.data.userData);
        setEmployee(response.data.userData);
      } else {
        console.log("No employees found or empty response.");
      }
    } catch (error) {
      console.error("Error");
    }
  };

  const navigate = useNavigate();

  useEffect(() => {
    fetchEmployee();
  }, [allEmployees]);

  const showSuccessToast = () => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "success",
      title: "Employée supprimé avec Succées",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  };

  const [contratData, setContratData] = useState({
    type: '',
    descriptionContrat: '',
    duree: '',
    pieceJointe: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContratData({ ...contratData, [name]: value });
  };

  const TypeDemandeList = [
    { id: 1, value: "Congé payé" },
    { id: 2, value: "Congé sans solde " },
    { id: 3, value: "Autorisation " },
    { id: 4, value: "Télétravail" },
    { id: 5, value: "Congé maladie" },
  ];

  //delete employee
  const deleteEmployee = async (employeeId) => {
    try {
      console.log(employeeId);
      // Send a delete request to the backend
      const response = await axios.delete(`http://localhost:3001/user/${employeeId}`);
      console.log(response.status);
      if (response.status === 200) {
        navigate("/home/employee");
        showSuccessToast();
      } else {
        alert(response.data.Error);
        toast.error("Error in deleting. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting employee:", error);
      toast.error("Error in deleting. Please try again.");
    }
  };

  // Check if employees is defined before mapping
  const employeesList = employees || [];

  return (
    <div>
      <div className="col-12 bg">
        <br />
        <div className="row">
          <div className="col-12 grid-margin stretch-card">
            <div className="card corona-gradient-card">
              <div className="card-body py-0 px-0 px-sm-3">
                <div className="row align-items-center">
                  <div className="col-4 col-sm-3 col-xl-2">
                    <img src={group} className="gradient-corona-img img-fluid" alt="Group" />
                  </div>
                  <div className="col-5 col-sm-7 col-xl-8 p-0 text-white">
                    <h4 className="mb-1 mb-sm-0">Bienvenue chez Visto Rh 🎉</h4>
                    <p className="mb-0 font-weight-normal d-none d-sm-block">
                      Chaque talent est valorisé. <br />
                      Chaque individu est encouragé à atteindre son plein potentiel professionnel.
                    </p>
                  </div>
                  <div className="col-3 col-sm-2 col-xl-2 pl-0 text-center">
                    <img src={arrier} className="gradient-corona-img img-fluid" alt="Arrier" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empcontainer">
          <ToastContainer />
        </div>
     {/* Calendar Component */}
     <div className="row">
          <div className=" grid-margin1 stretch-card">
            <div className="card corona-gradient-card1">
              <div className="card-body1 py-0 px-0 px-sm-3">
                <div className="col-12 ">
                  <Calendar   className="react-calenda1"   onChange={setDate} value={date} />
                </div>
              </div>
            </div>
          </div>
        </div>
       
<br/>
        <div className="d-flex justify-content-center align-items-center vh-50">
          <div className="col-md-6 grid-margin stretch-card">
            <div className="card">
              <div className="card-body">
                <h4 className="card-title">Demande de congé</h4>
                
                {/* Calendar Component */}
                
                <form action="#" method="POST">
                  <div className="form-group">
                    <label htmlFor="employes">Liste des employés :</label>
                    <select name="type" value={contratData.type} onChange={handleChange} className="form-select Txt">
                      {employees.map((c) => {
                        return <option key={c.id} value={c.name}>{c.name}</option>;
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="demande">Type de demande :</label>
                    <select name="type" value={contratData.type} onChange={handleChange} className="form-select Txt">
                      {TypeDemandeList.map((c) => {
                        return <option key={c.id} value={c.value}>{c.value}</option>;
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="date_debut">Date de début :</label>
                    <input
                      type="date"
                      className="addemp form-control Txt"
                      name="date_debut"
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="date_debut">Date de fin :</label>
                    <input
                      type="date"
                      className="addemp form-control Txt"
                      name="date_fin"
                      onChange={handleChange}
                      required
                      autoComplete="off"
                    />
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-outline-primary me-2">
                      Envoyer
                    </button>
                    <button type="reset" className="btn btn-outline-danger">
                      Annuler
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
      <Footer />
    </div>
  );
};

export default Conges;
