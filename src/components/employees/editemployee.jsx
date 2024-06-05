import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "../sidenavbar/sidenavbar.css";
import "./addemployee.css";
import "./editemployee.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Footer from "../footer/footer";

const EditEmployee = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };
  const [employeeData, setEmployeeData] = useState({
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
    fonction:'',  // E55dmmli hadhiii 
    typeContrat:'',
    datDebut:'',
    verif:true,
  });

  const { employeeId } = useParams();

  const [categories, setCategories] = useState([]);
  const [allCategories, setAllCategories] = useState(null);
  //get categories
  const fetchCategories = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/category`
      );
      console.log(response);
      if (response.data.CategoryData && response.data.CategoryData.length > 0) {
        setCategories(response.data.CategoryData);
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
  const roleList =  [
    {
      id:1,
      value:"user"
    },
    {
      id:2,
      value:"admin"
    }
  ];
  const categoriesList =[
    {
      id:1,
      value:"IT",
      className:"Txt"
    },
    {
      id:2,
      value:"Commercial"
    },
    {
      id:3,
      value:"Marketing"
    },
    {
      id:4,
      value:"RH"
    },
    {
      id:5,
      value:"Finance"
    }
  ];
 
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };
  

  useEffect(() => {
    const fetchEmployeeData = async () => {
      try {
        console.log(employeeId);
        const response = await axios.get(
          `http://localhost:3001/user/${employeeId}`
        );
        console.log(response.data);
        setEmployeeData(response.data.existingUser);
      } catch (error) {
        console.error("Error fetching employee data:", error);
      }
    };

    fetchEmployeeData();
  }, [employeeId]);

  const handleInputChange = (e, fieldName) => {
    const { value } = e.target;
    setEmployeeData((prevData) => ({
      ...prevData,
      [fieldName]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `http://localhost:3001/user/${employeeId}`,
        employeeData
      );
      navigate("/home/employee");
    } catch (error) {
      console.error("Error updating employee:", error);
    }
  };
  const [contratData, setContratData] = useState({
    type:'',
    descriptionContrat:'',
    duree:'',
    
  });
  
  const [contrats,setContrats] = useState([]);
  const fetchContrats = async () => {};
  console.log(contrats);
   useEffect(() =>{
    fetchContrats();
   },[]);

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
  return (
    <div>
      <div className="addempcontainer">
        <div className="addempcontent rounded border">
          <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Modifier Employé</h3> <br/>
        
   <form className="addempform" onSubmit={handleSubmit}>
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
          placeholder="Entrez Nom"
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
        <select name="etat civil" value={employeeData.etatCivil} onChange={handleChange} className="form-select Txt">
          {etatList.map((c) => (
            <option key={c.id} value={c.value}>{c.value}</option>
          ))}
        </select>
      </div>   <div className="addempgroup">
        <label className="col Txt">Rôle:</label>
        <select name="role" value={employeeData.role} onChange={handleChange} className="form-select Txt">
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
          {categories.map((c) => (
            <option key={c.id} value={c.cname}>{c.cname}</option>
          ))}
        </select>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Fonction :</label>
        <select name="fonction" value={employeeData.category} onChange={handleChange} className="form-select Txt">
          {categories.map((c) => (
            <option key={c.id} value={c.cname}>{c.cname}</option>
          ))}
        </select>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Type de contrat:</label>
        <select name="type" value={contratData.typeContrat} onChange={handleChange} className="form-select Txt">
          {contrats.map((c) => (
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
          placeholder="Date debut de contrat"
          required
          autoComplete="off"
        />
      </div>
    </div>
  </div>
  <br/>
  <div className="editempgroup">
    <button type="submit" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
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
    </div>
  );
};

export default EditEmployee;
