import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaPlus } from 'react-icons/fa';
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import Footer from "../footer/footer";
import arrier from "../img/arrier.png";
import group from "../img/Group126@2x.png";
import "./category.css";

const Category = () => {
  const [categories, setCategories] = useState([]);
  const [categoryCount, setCategoryCount] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(10);

  const fetchCategories = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/category`);
      if (response.data.CategoryData && response.data.CategoryData.length > 0) {
        setCategories(response.data.CategoryData);
        setCategoryCount(response.data.CategoryData.length);
      } else {
        console.log("No categories found or empty response.");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
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
      title: "Département supprimé avec succès",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  };

  const deleteCategory = async (CategoryId) => {
    try {
      const response = await axios.delete(`http://localhost:3001/category/${CategoryId}`);
      if (response.status === 200) {
        showSuccessToast();
        setCategories(categories.filter((category) => category._id !== CategoryId));
        setCategoryCount(categoryCount - 1);
      } else {
        toast.error("Error in deleting. Please try again.");
      }
    } catch (error) {
      console.error("Error deleting category:", error);
      toast.error("Error in deleting. Please try again.");
    }
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredCategories = categories.filter((category) =>
    category.cname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Logic for displaying current categories
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = filteredCategories.slice(indexOfFirstCategory, indexOfLastCategory);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

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
        <div className="col-12 card">
          <br />
          <h3 className="card-title col col-xl-3">Liste des départements</h3>
          <p className="card-title col col-xl-3">Nombre des départements : {categoryCount}</p>
          <br />
          <div className="row">
            <div className="empcenter">
              <div className="empcustom-content">
                <div className="emptask-container" style={{ justifyContent: 'space-between', alignItems: 'center' }}>
                  <Link to="/home/category/add" className="emp-btn btn-9 btn btn-primary" style={{ width: '200px', marginTop: '-125%' }}>
                    <FaPlus /> &nbsp;
                    <span>Ajouter Département</span>
                  </Link>
                  &nbsp;
                  <input
                    type="text"
                    placeholder="Rechercher un département..."
                    className="form-control search-input Txt"
                    style={{ width: '450px', marginLeft: '260px', marginTop: '-60%' }}
                    value={searchTerm}
                    onChange={handleSearch}
                  />
                </div>
              </div>
            </div>
          </div>
          {currentCategories.length > 0 ? (
            <table className="employee-table">
              <thead style={{ borderBottom: "2px solid #ccc" }}>
                <tr>
                  <th style={{ borderRight: "1px solid #ccc" }}>Nom Département</th>
                  <th style={{ borderRight: "1px solid #ccc" }}>Description département</th>
                  <th style={{ borderRight: "1px solid #ccc" }}>Chef de département</th>
                  <th colSpan={2} style={{ borderRight: "1px solid #ccc", textAlign: "center" }}>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentCategories.map((e) => (
                  <tr key={e._id}>
                    <td>{e.cname}</td>
                    <td>{e.description}</td>
                    <td>{e.superviseur}</td>
                    <td className="employee-actions">
                      <Link to={`/home/category/edit/${e._id}`} className="customedit btn-sm me-2">
                        <FaEdit />
                      </Link>
                    </td>
                    <td className="employee-actions" style={{ padding: "5px" }}>
                      <button className="customdelete btn-sm" onClick={() => deleteCategory(e._id)}>
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>Aucune donnée disponible.</p>
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
                {[...Array(Math.ceil(filteredCategories.length / categoriesPerPage)).keys()].map((number) => (
                  <button
                    key={number + 1}
                    className={`btn btn-primary ${currentPage === number + 1 ? 'active' : ''}`}
                    onClick={() => paginate(number + 1)}
                  >
                    {number + 1}
                  </button>
                ))}
                <button
                  className="btn btn-primary"
                  onClick={() => paginate(currentPage + 1)}
                  disabled={indexOfLastCategory >= filteredCategories.length}
                >
                  Suivant
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Category;