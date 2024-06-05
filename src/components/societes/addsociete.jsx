import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./addsociete.css";
import Swal from "sweetalert2";
import Footer from "../footer/footer";
const AddSociete = () => {
  const navigate = useNavigate();


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

 
  //add employee
  const [formData, setFormData] = useState({
    sname:'',
    semail:'',
    sadresse:'',
    sphone:'',
    secteur:'',
  });

 

   const showSuccessToast = ()  => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "success",
      title: "Société Ajouté avec Succée",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  }
   
  const showErrorToast = () => {
    console.log("eeee");
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "error",
      title: "Verifier email",
      width: "500px",
     // padding: "10px 20px",
      showCloseButton: false,
    });
  }
    const handleSubmit = async (e) => {
      console.log(formData);
      axios.post('http://localhost:3001/societe/createSociete', formData)

      .then((response) => {
        if(response.status===201){
           navigate("/home/societe")
           showSuccessToast()
        }else if(response.status === 400){
          showErrorToast()
        }

        console.log(response.status);

      })

      .catch((error) => showErrorToast());

  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div>
   <form onSubmit={handleSubmit}>
  <div className="addempcontainer">
    <div className="addempcontent rounded border">
      <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>
        Ajouter Société
      </h3>

      <form className="addempform" onSubmit={handleSubmit}>
        <div className="addempgroup">
          <label className="col Txt">Nom de société:</label>
          <input
            type="text"
            name="sname"
            value={formData.sname}
            onChange={handleChange}
            className="addemp form-control Txt"
            id="inputNom"
            placeholder="Entre nom de société"
            required
          />
        </div>

        <div className="addempgroup">
          <label className="col Txt">E-mail de société:</label>
          <input
            type="email"
            className="addemp form-control Txt"
            name="semail"
            value={formData.semail}
            onChange={handleChange}
            placeholder="Entrez e-mail de société"
            required
            autoComplete="off"
          />
        </div>

        <div className="addempgroup">
          <label className="col Txt">Adresse de société:</label>
          <input
            type="adresse"
            className="addemp form-control Txt"
            name="sadresse"
            value={formData.sadresse}
            onChange={handleChange}
            placeholder="Entrez l'adresse de société"
            required
            autoComplete="off"
          />
        </div>

        <div className="addempgroup">
          <label className="col Txt">Téléphone de société:</label>
          <input
            type="telephone"
            className="addemp form-control Txt"
            name="sphone"
            value={formData.sphone}
            onChange={handleChange}
            placeholder="Entrez le téléphone de la société"
            required
            autoComplete="off"
          />
        </div>

        <div className="addempgroup">
          <label className="col Txt">Secteur de société:</label>
          <input
            type="text"
            className="addemp form-control Txt"
            name="secteur"
            value={formData.secteur}
            onChange={handleChange}
            id="inputPoste"
            placeholder="Entrez le secteur de société"
            required
            autoComplete="off"
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
</form>

     <br/>
    <Footer/> 
    </div>
  );
};

export default AddSociete;
