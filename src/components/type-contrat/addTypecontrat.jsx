import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../societes/addsociete.css";
import Swal from "sweetalert2";
import Footer from "../footer/footer";

const AddTypeContrat = () => {
  const navigate = useNavigate();

  const [contratData, setContratData] = useState({
    type: '',
    description: '',
    maximuimPermis: '',
  });

  const showSuccessToast = () => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",  
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "success",
      title: "Contrat Ajouté avec Succès",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
    });
  }

  const showErrorToast = () => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "error",
      title: "Erreur lors de l'ajout du contrat",
      width: "500px",
    });
  }

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:3001/type/createTypeContrat', contratData);
      if (response.status === 201) {
        navigate("/home/typeContrat");
        showSuccessToast();
      } else if (response.status === 400) {
        showErrorToast();
      }
    } catch (error) {
      showErrorToast();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContratData({ ...contratData, [name]: value });
  };


  return (
    <div>
      <div className="addempcontainer">
        <div className="addempcontent rounded border">
          <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Ajouter Contrat</h3>
          <form className="addempform" >
          <div className="addempgroup">
              <label className="col Txt">Nom Type Contrat:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                name="type"
                value={contratData.type}
                onChange={handleChange}
                placeholder="Enter nom  de type contrat"
                required
                autoComplete="off"
              />
            </div>
            <div className="addempgroup">
              <label className="col Txt">Description:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                name="description"
                value={contratData.description}
                onChange={handleChange}
                placeholder="Enter description de type contrat"
                required
                autoComplete="off"
              />
            </div>
            <div className="addempgroup">
              <label className="col Txt">Maximuim Permis:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                name="maximuimPermis"
                value={contratData.maximuimPermis}
                onChange={handleChange}
                placeholder="Entre durée de contrat (mois)"
                required
                autoComplete="off"
              />
            </div>
  
            <div className="editempgroup">
              <button type="button" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
                Envoyer
              </button>
              <button type="reset" className="btn btn-outline-danger" onClick={() => navigate("/home/")}>
                Annuler
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AddTypeContrat;
