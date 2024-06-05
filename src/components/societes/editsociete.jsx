import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../sidenavbar/sidenavbar.css";
import "./addsociete.css";
import "./editsociete.css";
import { FiEye, FiEyeOff } from "react-icons/fi";

const EditSociete= () => {
  const navigate = useNavigate();


  const { societeId } = useParams();

  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState(null);
  //get categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/category/category`
      );
      if (response.data.categories && response.data.categories.length > 0) {
        setAllCategories(response.data.categories);
        setCategories(response.data.categories);
      } else {
        console.log("No categories found or empty response.");
      }
    } catch (error) {
      console.error("Error");
    }
  };
  useEffect(() => {
    fetchCategories();
  }, [allCategories]);
  // Check if categories is defined before mapping
  const categoriesList = categories || [];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //add societe
  const [formData, setFormData] = useState({
    sname:'',
    semail:'',
    sadresse:'',
    sphone:'',
    secteur:'',
  });

  useEffect(() => {
    const fetchSocieteData = async () => {
      try {
        console.log(societeId);
        const response = await axios.get(
          `http://localhost:3001/societe/${societeId}`
        );
        console.log(response.data);
        setFormData(response.data.existingSociete);
      } catch (error) {
        console.error("Error fetching Societe data:", error);
      }
    };

    fetchSocieteData();
  }, [societeId]);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/societe/${societeId}`,
        formData
      );
      navigate("/home/Societe");
    } catch (error) {
      console.error("Error updating Societe:", error);
    }
  };

  return (
    <div>
      <div className="addempcontainer">
        <div className="addempcontent rounded border">
          <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Modifier Société</h3> <br/>
          <form className="addempform" onSubmit={handleSubmit}>
            <div className="addempgroup">
            <label className="col Txt">Nom de société:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                id="inputName"
                placeholder="Entrez le nom de société "
                required
                value={formData.sname}
                onChange={(e) => handleInputChange(e, "sname")}
              />
            </div>
            <div className="addempgroup">
            <label className="col Txt">E-mail de société:</label>
              <input
                type="email"
                className=" form-control Txt"
                id="inputEmail4"
                placeholder="Entrez e-mail de société"
                required
                value={formData.semail}
                onChange={(e) => handleInputChange(e, "semail")}
              />
            </div>
            <div className="addempgroup">
            <label className="col Txt">Adresse de société:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                id="inputAdresse"
                placeholder="Entrez adresse de société"
                required
                autoComplete="off"
                value={formData.sadresse}
                onChange={(e) => handleInputChange(e, "sadresse")}
              />
            </div>
            <div className="addempgroup">
            <label className="col Txt">Téléphone de société:</label>
              <input
                type="text"
                className="addemp form-control Txt"
                id="inputTelephone"
                placeholder="Entrez téléphone de société"
                required
                autoComplete="off"
                value={formData.sphone}
                onChange={(e) => handleInputChange(e, "sphone")}
              />
            </div>
             <div className="addempgroup">
             <label className="col Txt">Secteur de société:</label>
              <input
                type="text"
                className="addemp form-control Txt "
                id="inputPoste"
                placeholder=" Entrez le secteur de société"
                required
                autoComplete="off"
                value={formData.secteur}
                onChange={(e) => handleInputChange(e, "secteur")}
              />
            </div> 
           
            <div className="editempgroup">
  
  <button type="submit" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
                  Envoyer
                </button>
                
  
  <button type="reset" className="btn btn-outline-danger" onClick={() => navigate("/home/societe")}>
                Annuler
                </button>

</div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditSociete;
