import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../footer/footer";

const EditBank = ({  }) => {
    const navigate = useNavigate();
    const { banqueId } = useParams();

    const [banqueData, setBanqueData] = useState({
        Bname: '',
      Bcode: '',
    });
    useEffect(() => {
        const fetchBanqueData = async () => {
          try {
            console.log(banqueId);
            const response = await axios.get(
              `http://localhost:3001/bank/${banqueId}`
            );
            console.log(response.data);
            setBanqueData(response.data.existingBank
            );
          } catch (error) {
            console.error("Error fetching employee data:", error);
          }
        };
    
        fetchBanqueData();
      }, [banqueId]);
    const showSuccessToast = () => {
      const toast = Swal.mixin({
        toast: true,
        position: "top-end",  
        showConfirmButton: false,
        timer: 3000,
      });
      toast.fire({
        icon: "success",
        title: "Banque modifié avec Succès",
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
        title: "Erreur lors de la modification de banque",
        width: "500px",
      });
    }
  
    const handleSubmit = async (e) => {
      try {
        const response = await axios.put(  `http://localhost:3001/bank/${banqueId}`,
        banqueData);
        if (response.status === 200) {
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
            <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Modifier Banque</h3>
            <form className="addempform" >

              <div className="addempgroup">
                <label className="col Txt">Code Banque:</label>
                <input
                  type="text"
                  className="addemp form-control Txt"
                  name="Bcode"
                  value={banqueData.Bcode}
                  onChange={handleChange}
                 // placeholder="Enter description de contrat"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="addempgroup">
                <label className="col Txt">Nom de Banque:</label>
                <input
                  type="text"
                  className="addemp form-control Txt"
                  name="duree"
                  value={banqueData.Bname}
                  onChange={handleChange}
                  //placeholder="Entre durée de contrat (mois)"
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

export default EditBank;
