import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./addcategory.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import Footer from "../footer/footer";
import Employees from "../employees/employees";

const AddCategor = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [allEmployees, setAllEmployees] = useState([]);
  const [employees, setEmployee] = useState([]);

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(`http://localhost:3001/user`);
      if (response.data.userData.length > 0) {
        setAllEmployees(response.data.userData);
        setEmployee(response.data.userData);
      } else {
        console.log("No employees found or empty response.");
      }
    } catch (error) {
      console.error("Error");
    }
  };


  useEffect(() => {
    fetchEmployee();
  }, []);

  //add category
  const [categoryData, setcategoryData] = useState({
  cname: '',
   description :'',
   superviseur : '',
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
      title: "Département Ajouté avec Succée",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
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
      title: "Verifier nom ",
      width: "500px",
     // padding: "10px 20px",
      showCloseButton: false,
    });
  }
    const handleSubmit = async (e) => {
 axios.post('http://localhost:3001/category', categoryData)
      .then((response) => {
        if(response.status===201){
           navigate("/home/category")
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
    console.log(value,name);
    setcategoryData({ ...categoryData, [name]: value });
  };
  // const handleImageChange = (event) => {
  //   const imageFile = event.target.files[0]; // Récupère le premier fichier sélectionné

  //   // Vérifie si un fichier a été sélectionné
  //   if (imageFile) {
  //     // Met à jour l'état avec le fichier image
  //     setcategoryData({
  //       ...categoryData,
  //       profileImage: imageFile
  //     });
  //   }
  // };

  return (
  
    <form >
   <div className="addempcontainer">
  <div className="addempcontent rounded border">
    <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>
      Ajouter Département
    </h3>

    <form className="addempform" >
  <div className="row">
    <div className="col-md-12">
      <div className="addempgroup">
        <label className="col Txt">Nom département:</label>
        <input
          type="text"
          name="cname"
          value={categoryData.cname}
          onChange={handleChange}
          className="addemp form-control Txt"
          id="inputNom"
          placeholder="Entrez nom de département"
          required
        />
      </div>

      <div className="addempgroup">
        <label className="col Txt">Decription:</label>
        <input
          type="text"
          className="addemp form-control Txt"
          name="description"
          value={categoryData.description }
          onChange={handleChange}
          placeholder="Entrez description "
          required
          autoComplete="off"
        />
      </div>
      <div className="addempgroup">
  <label className="col Txt">Chef de département:</label>
  <select 
    name="superviseur" 
    value={categoryData.superviseur} 
    onChange={handleChange} 
    className="form-select Txt"
    required
  >
    {employees.map((employee) => (
      <option key={employee.id} value={employee.name}>{employee.name}</option>
    ))}
  </select>
</div>

      </div>

  </div>
  <br/>
  <div className="editempgroup">
    <button type="button" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
      Envoyer
    </button>
    <button type="reset" className="btn btn-outline-danger" onClick={() => navigate("/home/category")}>
      Annuler
    </button>
  </div>
</form>


  </div>
</div>
    <Footer/>
    </form>


  );
};

export default AddCategor;
