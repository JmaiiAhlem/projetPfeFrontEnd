import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "../ProtectRoute/ProtectedRoute.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import Footer from "../footer/footer";
import arrier from "../img/arrier.png";
import group from "../img/Group126@2x.png";

const TypeContrat = () => {
  const [contrats, setContrats] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const contratsPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchContrat = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/type`);
        if (response.data.ContratTypeData.length > 0) {
          setContrats(response.data.ContratTypeData);
        } else {
          console.log("No type contrats found or empty response.");
        }
      } catch (error) {
        console.error("Error fetching contrats:", error);
      }
    };
    fetchContrat();
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
      title: "Contrat supprimé avec succès",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  };

  const deleteContrat = async (ContratId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/type/${ContratId}`);
      if (response.status === 200) {
        showSuccessToast();
        setContrats(contrats.filter((contrat) => contrat._id !== ContratId));
      } else {
        alert(response.data.Error);
        toast.error("Error in deleting. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting contrat:", error);
      toast.error("Error in deleting. Please try again.");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredContrats = contrats.filter((contrat) =>
    contrat.type.toLowerCase().includes(searchTerm.toLowerCase()) || 
    contrat.descriptionContrat.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastContrat = currentPage * contratsPerPage;
  const indexOfFirstContrat = indexOfLastContrat - contratsPerPage;
  const currentContrats = filteredContrats.slice(indexOfFirstContrat, indexOfLastContrat);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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

        <div className="empcontainer">
          <ToastContainer />
        </div>

        <div className="col-12 card"><br />
          <h3 className="card-title col col-xl-3">Liste des type  Contrats</h3><br />
          <div className="row">
            <div className="empcenter">
              <div className="empcustom-content">
                <div className="emptask-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/home/typeContrat/add" className="emp-btn btn-9 btn btn-primary" style={{ width: '200px' }}>
                    <FaPlus /> &nbsp;
                    <span>Ajouter type  Contrat</span>
                  </Link>
                  &nbsp;
                  <input
                    type="text"
                    placeholder="Rechercher un type de contrat..."
                    className="form-control search-input Txt"
                    style={{ width: '450px', marginLeft: '260px' }}
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>

          <br /><br /><br />
          {currentContrats.length > 0 ? (
            <table className="employee-table" style={{ fontSize: "0.9em", tableLayout: "fixed", width: "100%" }}>
              <thead style={{ borderBottom: "2px solid #ccc" }}>
                <tr>
                  <th style={{ borderRight: "1px solid #ccc", width: "13%", fontSize: "13px" }}> Nom Type de contrat</th>
                  <th style={{ borderRight: "1px solid #ccc", width: "13%", fontSize: "13px" }}>Description</th>
                  <th style={{ borderRight: "1px solid #ccc", width: "30%", fontSize: "13px" }}>Maximuim Permis</th>
                  <th colSpan={2} style={{ borderRight: "1px solid #ccc", textAlign: "center", width: "10%" }}>Actions</th>
                </tr>
              </thead>

              <tbody>
                {currentContrats.map((e) => (
                  <tr key={e._id}>
                    <td style={{ padding: "5px", width: "12%", fontSize: "13px" }}>{e.type}</td>
                    <td style={{ padding: "5px", width: "12%", fontSize: "13px" }}>{e.description}</td>
                    <td style={{ padding: "5px", fontSize: "13px", width: "20%" }}>{e.maximuimPermis + " mois"}</td>
                    <td className="employee-actions" style={{ padding: "5px" }}>
                      <Link to={`/home/contrat/edit/${e._id}`} className="customedit btn-sm me-2">
                        <FaEdit />
                      </Link>
                    </td>
                    <td className="employee-actions" style={{ padding: "5px" }}>
                      <button className="customdelete btn-sm" onClick={() => deleteContrat(e._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucun Contrat trouvé</p>
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
                {[...Array(Math.ceil(filteredContrats.length / contratsPerPage)).keys()].map(pageNumber => (
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
                  disabled={indexOfLastContrat >= filteredContrats.length}
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>

  
  );
};

export default TypeContrat;