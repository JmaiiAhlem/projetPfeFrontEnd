import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./employee.css";
import "../ProtectRoute/ProtectedRoute.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { FaEdit, FaTrash, FaPlus, FaEyeSlash, FaRegEye } from 'react-icons/fa';
import Footer from "../footer/footer";
import arrier from "../img/arrier.png";
import group from "../img/Group126@2x.png";

const Employees = () => {
  const [employees, setEmployee] = useState([]);
  const [allEmployees, setAllEmployees] = useState([]);
  const [employeeCount, setEmployeeCount] = useState(0); 
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [employeesPerPage] = useState(10);

  const indexOfLastEmployee = currentPage * employeesPerPage;
  const indexOfFirstEmployee = indexOfLastEmployee - employeesPerPage;
  const currentEmployees = allEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user`);
      if (response.data.userData.length > 0) {
        setAllEmployees(response.data.userData);
        setEmployee(response.data.userData);
        setEmployeeCount(response.data.userData.length);
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
  }, []);

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

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const deleteEmployee = async (employeeId) => {
    try {
      console.log(employeeId);
      const response = await axios.delete(`http://localhost:3001/user/${employeeId}`);
      console.log(response.status);
      if (response.status === 200) {
        navigate("/home/employee");
        showSuccessToast();
        setEmployeeCount(employeeCount - 1);
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

  const filteredEmployees = allEmployees.filter((employee) =>
    employee.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    employee.email.toLowerCase().includes(searchTerm.toLowerCase()) || 
    employee.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const currentFilteredEmployees = filteredEmployees.slice(indexOfFirstEmployee, indexOfLastEmployee);

  return (
    <div>
      <div className="col-12 bg"><br />
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
      

        <div className="col-12 card">
          <br />
          <h3 className="card-title col col-xl-3">Liste des Employés</h3>
          <p className="card-title col col-xl-3">Nombre d'employés : {employeeCount}</p>
          <br />
          <div className="row">
            <div className="empcenter">
              <div className="empcustom-content">
                <div className="emptask-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/home/employee/add" className="emp-btn btn-9 btn btn-primary" style={{ width: '200px', marginTop:'-125%' }}>
                    <FaPlus /> &nbsp;
                    <span>Ajouter Employé</span>
                  </Link>
                  &nbsp;
                  <input
                    type="text"
                    placeholder="Rechercher un employé..."
                    className="form-control search-input Txt"
                    style={{ width: '450px', marginLeft: '260px', marginTop:'-60%' }}
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>

          {currentFilteredEmployees.length > 0 ? (
            <table className="employee-table">
              <thead>
                <tr>
                  <th>Nom & Prénom</th>
                  <th>Email</th>
                  <th>Adresse</th>
                  <th>Téléphone</th>
                  <th>Date naissance</th>
                  <th>État civil</th>

                  <th>Département</th>
                  <th>Fonction</th>
                  <th colSpan={3}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentFilteredEmployees.map((e) => (
                  <tr key={e._id}>
                    <td>{e.name}</td>
                    <td>{e.email}</td>
                    <td>{e.adresse}</td>
                    <td>{e.phone}</td>
                    <td>{e.datNais}</td>
                    <td>{e.etatCivil}</td>
                    <td>{e.category}</td>
                    <td>{e.fonction}</td>
                    <td className="employee-actions">
                      <Link to={`/home/employee/edit/${e._id}`} className="customedit btn-sm me-2">
                        <FaEdit />
                      </Link>
                    </td>
                    <td className="employee-actions">
                      <button className="customdelete btn-sm" onClick={() => deleteEmployee(e._id)}>
                        <FaTrash />
                      </button>
                    </td>
                    <td className="employee-actions">
                      <button className="customDetails btn-sm" onClick={() => navigate("/home/employee/"+e.email)}>
                        <FaRegEye />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucun employé trouvé</p>
          )}
          <div className="col-12 d-flex justify-content-end">
            <div>
              <br />
              <div className="pagination-container">
                <button
                  className="btn btn-primary"
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  Précédent
                </button>
                {[...Array(Math.ceil(filteredEmployees.length / employeesPerPage)).keys()].map(pageNumber => (
                  <button
                    key={pageNumber + 1}
                    className="btn btn-primary"
                    onClick={() => paginate(pageNumber + 1)}
                    disabled={currentPage === pageNumber + 1}
                  >
                    {pageNumber + 1}
                  </button>
                ))}
                <button
                  className="btn btn-primary"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastEmployee >= filteredEmployees.length}
                >
                  Suivant
                </button>
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

export default Employees;