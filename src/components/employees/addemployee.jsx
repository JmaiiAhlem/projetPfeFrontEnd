import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./addemployee.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import Footer from "../footer/footer";

const AddEmployee = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };


  const [categories, setCategories] = useState([]);
  //get categories
  const fetchCategories = async () => {
    console.log("eeeeee");
    try {
      const response = await axios.get(
        `http://localhost:3001/category`
      );
      console.log(response.data.CategoryData);
      if (response.data.CategoryData && response.data.CategoryData.length > 0) {
        setCategories(response.data.CategoryData);
      } else {
        console.log("No categories found or empty response.");
      }
    } catch (error) {
      console.error("Error");
    }
  };
  console.log(categories);
  useEffect(() => {
    fetchCategories();
  }, []);

  const [contratsType,setContrats] = useState([]);
  const fetchContrats = async () => {
    console.log("eeeeee");
    try {
      const response = await axios.get(
        `http://localhost:3001/type`
      );
      console.log(response.data.ContratTypeData);
      if (response.data.ContratTypeData && response.data.ContratTypeData.length > 0) {
        setContrats(response.data.ContratTypeData);
      } else {
        console.log("No contrat type found or empty response.");
      }
    } catch (error) {
      console.error("Error");
    }

  };
   useEffect(() =>{
    fetchContrats();
   },[]);
  
  // Check if categories is defined before mapping
  const roleList =  [
    {
      id:1,
      value:"User"
    },
    {
      id:2,
      value:"Admin"
    }
  ];

  const etatList =  [
    {
      id:1,
      value:"Célibataire"
    },
    {
      id:2,
      value:"Marié(e)"
    },
    {
      id:3,
      value:"Divorcé(e)"
    },
    {
      id:4,
      value:"Veuf/Veuve"
    }
  ];
  //add employee
  const [employeeData, setemployeeData] = useState({
    name:'',
    // firstName:'',
    email:'',
    password:'',
    adresse:'',
    phone:'',
    datNais:'',
    etatCivil:'',
    role:'',
    category:'',
    fonction:'',
    typeContrat:'',
    dateDebut:'',
    rib:'',
    bankName:'',
    verif:true,
  });

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
      title: "Verifier mot passe ou email",
      width: "500px",
     // padding: "10px 20px",
      showCloseButton: false,
    });
  }

   const showSuccessToast = ()  => {
    const toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
    });
    toast.fire({
      icon: "success",
      title: "Employée Ajouté avec Succée",
      width: "600px",
      padding: "10px 20px",
      showCloseButton: true,
      customClass: {
        popup: `color-'success'`,
      },
    });
  }
   
    const handleSubmit = async (e) => {
      console.log(employeeData);
      axios.post('http://localhost:3001/user/createUser', employeeData)

      .then((response) => {
        if(response.status===201){
           navigate("/home/employee")
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
    setemployeeData({ ...employeeData, [name]: value });
  };
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0]; // Récupère le premier fichier sélectionné

    // Vérifie si un fichier a été sélectionné
    if (imageFile) {
      // Met à jour l'état avec le fichier image
      setemployeeData({
        ...employeeData,
      //  profileImage: imageFile
      });
    }
  };

  return (
  
    <form >
   <div className="addempcontainer">
  <div className="addempcontent rounded border">
    <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>
      Ajouter Employé
    </h3>
    <div className="addempform">
    
        </div>
    <form className="addempform" >
  <div className="row">
    <div className="col-md-4">
      <div className="addempgroup">
        <label className="col Txt">Nom & Prénom:</label>
        <input
          type="text"
          name="name"
          value={employeeData.name}
          onChange={handleChange}
          className="addemp form-control Txt"
          id="inputNom"
          placeholder="Entrez Nom & Prénom"
          required
        />
      </div>

      <div className="addempgroup">
        <label className="col Txt">Email:</label>
        <input
          type="email"
          className="addemp form-control Txt"
          name="email"
          value={employeeData.email}
          onChange={handleChange}
          placeholder="Entrez Email"
          required
          autoComplete="off"
        />
      </div>
      <div className="addempgroup" style={{ position: 'relative' }}>
        <label className="col Txt">Mot de passe:</label>
        <input
          type={showPassword ? "text" : "password"}
          className="addemp form-control Txt"
          name="password"
          value={employeeData.password}
          onChange={handleChange}
          placeholder="Entrez mot de passe"
          required
          style={{ paddingRight: '30px' }}
        />
        <span
          className="password-toggle-icon colr"
          onClick={() => setShowPassword(!showPassword)}
          style={{
            position: 'absolute',
            top: '65%',
            right: '30px',
            transform: 'translateY(-50%)',
            cursor: 'pointer',
          }}
        >
          {showPassword ? <FiEye /> : <FiEyeOff />}
        </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Adresse:</label>
        <input
          type="text"
          className="addemp form-control Txt"
          name="adresse"
          value={employeeData.adresse}
          onChange={handleChange}
          placeholder="Adresse"
          required
          autoComplete="off"
        />
      </div>
      </div>

    
    <div className="col-md-4">

      <div className="addempgroup">
        <label className="col Txt">Téléphone:</label>
        <input
          type="tel"
          className="addemp form-control Txt"
          name="phone"
          value={employeeData.phone}
          onChange={handleChange}
          placeholder="Téléphone"
          required
          autoComplete="off"
        />
      </div>
      <div className="addempgroup">
        <label className="col Txt">Date de naissance:</label>
        <input
          type="date"
          className="addemp form-control Txt"
          name="datNais"
          value={employeeData.datNais}
          onChange={handleChange}
          placeholder="Date de naissance"
          required
          autoComplete="off"
        />
      </div>
      <div className="addempgroup">
        <label className="col Txt">État civil:</label>
        <select name="etatCivil" value={employeeData.etatCivil} onChange={handleChange} className="form-select Txt">
        <option  disabled value="" hidden>
        Situation
      </option>
          {etatList.map((c) => (
            <option key={c.id} value={c.value}>{c.value}</option>
          ))}
        </select>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Rôle:</label>
        <select name="role" value={employeeData.role} onChange={handleChange} className="form-select Txt">
        <option  disabled value="" hidden>
        Sélectionnez un rôle
      </option>
          {roleList.map((c) => (
            <option key={c.id} value={c.value}>{c.value}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="col-md-4">

      <div className="addempgroup">
        <label className="col Txt">Département:</label>
        <select name="category" value={employeeData.category} onChange={handleChange} className="form-select Txt">
        <option  disabled value="" hidden>
        Département
      </option>
          {categories.map((c) => (
            <option key={c.id} value={c.cname}>{c.cname}</option>
          ))}
        </select>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Fonction :</label>
        <select name="fonction" value={employeeData.fonction} onChange={handleChange} className="form-select Txt">
        <option  disabled value="" hidden>
        Fonction
      </option>
          {categories.map((c) => (
            <option key={c.id} value={c.cname}>{c.cname}</option>
          ))}
        </select>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Type de contrat:</label>
        <select name="typeContrat" value={employeeData.typeContrat} onChange={handleChange} className="form-select Txt">
        <option  disabled value="" hidden>
        Type Contrat
      </option>
          {contratsType.map((c) => (
            <option key={c.id} value={c.type}>{c.type}</option>
          ))}
        </select>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Date début de contrat:</label>
        <input
          type="date"
          className="addemp form-control Txt"
          name="dateDebut"
          value={employeeData.datDebut}
          onChange={handleChange}
          placeholder="Date début de contrat"
          required
          autoComplete="off"
        />
      </div>
    </div>
  
    
    <div className="addempgroup">
        <label className="col Txt">Nom Banque:</label>
        <select name="bankName" value={employeeData.bankName} onChange={handleChange} className="form-select Txt">
        <option  disabled value="" hidden>
        Banque
      </option>
          {contratsType.map((c) => (
            <option key={c.id} value={c.type}>{c.type}</option>
          ))}
        </select>
      </div>

    <div className="addempgroup">
        <label className="col Txt">RIB:</label>
        <input
          type="text"
          className="addemp form-control Txt"
          name="rib"
          value={employeeData.rib}
          onChange={handleChange}
          placeholder="Rib"
          required
          autoComplete="off"
        />
      </div>



  </div>
  <br/>
  <div className="editempgroup">
    <button type="button" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
      Envoyer
    </button>
    <button type="reset" className="btn btn-outline-danger" onClick={() => navigate("/home/employee")}>
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

export default AddEmployee;
