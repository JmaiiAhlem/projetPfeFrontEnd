import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Footer from "../footer/footer";

const EditTypeContrat = ({  }) => {
    const navigate = useNavigate();
    const { contratId } = useParams();

    const [contratData, setContratData] = useState({
        type: '',
      descriptionContrat: '',
      duree: '',
    });
    useEffect(() => {
        const fetchContratData = async () => {
          try {
            const response = await axios.get(
              `http://localhost:3001/type-contrat/${contratId}`
            );
            console.log(response.data);
            setContratData(response.data.ContratData);
          } catch (error) {
            console.error("Error fetching employee data:", error);
          }
        };
    
        fetchContratData();
      }, [contratId]);
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
      e.preventDefault();
      try {
        const response = await axios.put(  `http://localhost:3001/contrat/${contratId}`,
        contratData);
        if (response.status === 201) {
          navigate("/home/contrat");
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
  
    const contratList = [
      { id: 1, value: "CIVP 1" },
      { id: 2, value: "CIVP 2" },
      { id: 3, value: "CDD" },
      { id: 4, value: "CDI" }
    ];
  
    return (
      <div>
        <div className="addempcontainer">
          <div className="addempcontent rounded border">
            <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Ajouter Contrat</h3>
            <form className="addempform" onSubmit={handleSubmit}>
              <div className="addempgroup">
                <label className="col Txt">Type de contrat:</label>
                <select
                  name="typec"
                  //value={contratData.type}
                  onChange={handleChange}
                  className="form-select Txt"
                >
                  {contratList.map((c) => (
                    <option key={c.id} value={c.value}>
                      {c.value}
                    </option>
                  ))}
                </select>
              </div>
              <div className="addempgroup">
                <label className="col Txt">Description contrat:</label>
                <input
                  type="text"
                  className="addemp form-control Txt"
                  name="descriptionContrat"
                  value={contratData.descriptionContrat}
                  onChange={handleChange}
                  placeholder="Enter description de contrat"
                  required
                  autoComplete="off"
                />
              </div>
              <div className="addempgroup">
                <label className="col Txt">Durée contrat:</label>
                <input
                  type="text"
                  className="addemp form-control Txt"
                  name="duree"
                  value={contratData.duree}
                  onChange={handleChange}
                  placeholder="Entre durée de contrat (mois)"
                  required
                  autoComplete="off"
                />
              </div>
    
              <div className="editempgroup">
                <button type="submit" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
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

export default EditTypeContrat;
