import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../societes/addsociete.css";
import Swal from "sweetalert2";
import Footer from "../footer/footer";

const AddBank = () => {
  const navigate = useNavigate();

  const [banqueData, setBanqueData] = useState({
    Bcode: '',
    Bname: '',
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
      title: "Banque Ajouté avec Succès",
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
      title: "Erreur lors de l'ajout du banque",
      width: "500px",
    });
  }

  const handleSubmit = async (e) => {
    try {
      const response = await axios.post('http://localhost:3001/bank/createBank', banqueData);
      if (response.status === 201) {
        navigate("/home/bank");
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
    setBanqueData({ ...banqueData, [name]: value });
  };


  return (
    <div>
      <div className="addempcontainer">
        <div className="addempcontent rounded border">
          <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Ajouter Banque</h3>
          <form className="addempform" >
            <div className="addempgroup">
              <label className="col Txt">Code Banque:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                name="Bcode"
                value={banqueData.Bcode}
                max={2}
                onChange={handleChange}

                placeholder="Enter Code du Banque"
                required
                autoComplete="off"
              />
            </div>
            <div className="addempgroup">
              <label className="col Txt">Nom Banque:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                name="Bname"
                value={banqueData.Bname}
                onChange={handleChange}
                placeholder="Entre Nom du Banque"
                required
                autoComplete="off"
              />
            </div>
  
            <div className="editempgroup">
              <button type="button" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
                Envoyer
              </button>
              <button type="reset" className="btn btn-outline-danger" onClick={() => navigate("/home/bank")}>
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

export default AddBank;
