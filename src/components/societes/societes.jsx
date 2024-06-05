import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import noData from "../img/nodata.png";
import "./societes.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import arrier from "../img/arrier.png";
import group from "../img/Group126@2x.png";
import Footer from "../footer/footer";

const Societes = () => {
  const [societes, setSociete] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const societesPerPage = 10;

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSociete = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/societe`);
        if (response.data.SocieteData.length > 0) {
          setSociete(response.data.SocieteData);
        } else {
          console.log("No Societes found or empty response.");
        }
      } catch (error) {
        console.error("Error fetching Societe data:", error);
      }
    };
    fetchSociete();
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
      title: "Société supprimée avec succès",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  };

  const deleteSociete = async (SocieteId) => {
    try {
      console.log(SocieteId);
      const response = await axios.delete(`http://localhost:3001/societe/${SocieteId}`);
      console.log(response.status);
      if (response.status === 200) {
        navigate("/home/Societe");
        showSuccessToast();
        setSociete(societes.filter((societe) => societe._id !== SocieteId));
      } else {
        alert(response.data.Error);
        toast.error("Erreur lors de la suppression. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Error deleting Societe:", error);
      toast.error("Erreur lors de la suppression. Veuillez réessayer.");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page on search
  };

  const filteredSocietes = societes.filter((societe) =>
    societe.sname.toLowerCase().includes(searchTerm.toLowerCase()) || 
    societe.semail.toLowerCase().includes(searchTerm.toLowerCase()) ||
    societe.secteur.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const indexOfLastSociete = currentPage * societesPerPage;
  const indexOfFirstSociete = indexOfLastSociete - societesPerPage;
  const currentSocietes = filteredSocietes.slice(indexOfFirstSociete, indexOfLastSociete);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="bg">
        <div className="col-12"><br />
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
            <br />
            <h3 className="card-title col col-xl-3">Liste des Sociétés</h3>
            <p className="card-title col col-xl-3">Nombre de sociétés : {filteredSocietes.length}</p>
            <br />
            <div className="row">
              <div className="empcenter">
                <div className="empcustom-content">
                  <div className="emptask-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                    <Link to="/home/societe/add" className="emp-btn btn-9 btn btn-primary" style={{ width: '200px' }}>
                      <FaPlus /> &nbsp;
                      <span>Ajouter Société</span>
                    </Link>
                    &nbsp;
                    <input
                      type="text"
                      placeholder="Rechercher une société..."
                      className="form-control search-input Txt"
                      style={{ width: '450px', marginLeft: '260px' }}
                      value={searchTerm}
                      onChange={handleSearch}
                    />
                  </div>
                </div>
              </div>
            </div>
            {currentSocietes.length > 0 ? (
              <table className="societes-table">
                <thead>
                  <tr>
                    <th>Nom Société</th>
                    <th>Email</th>
                    <th>Adresse</th>
                    <th>Téléphone</th>
                    <th>Secteur</th>
                    <th colSpan={2}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentSocietes.map((e) => (
                    <tr key={e._id}>
                      <td>{e.sname}</td>
                      <td>{e.semail}</td>
                      <td>{e.sadresse}</td>
                      <td>{e.sphone}</td>
                      <td>{e.secteur}</td>
                      <td className="societe-actions">
                        <Link to={`/home/societe/edit/${e._id}`} className="customedit btn-sm me-2">
                          <FaEdit />
                        </Link>
                      </td>
                      <td className="societe-actions">
                        <button className="customdelete btn-sm" onClick={() => deleteSociete(e._id)}>
                          <FaTrash />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <p>Aucune société trouvée</p>
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
                  {[...Array(Math.ceil(filteredSocietes.length / societesPerPage)).keys()].map(pageNumber => (
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
                    disabled={indexOfLastSociete >= filteredSocietes.length}
                  >
                    Suivant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Footer />
    </div>
  );
};

export default Societes;