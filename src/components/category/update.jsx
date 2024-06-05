import React, { useEffect, useState } from "react";
import "./update.css";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const Update = ({}) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const [employees, setEmployee] = useState([]);

  const [categoryData, setcategoryData] = useState({
      cname: '',
     description :'',
     superviseur : '',
    });
    const fetchEmployee = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/user`);
        if (response.data.userData.length > 0) {
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
  useEffect(() => {
      const fetchCategoryData = async () => {
        try {
          const response = await axios.get(
            `http://localhost:3001/category/${categoryId}`
          );
          console.log(response.data);
          setcategoryData(response.data.existingCategory
          );
        } catch (error) {
          console.error("Error fetching category data:", error);
        }
      };
  
      fetchCategoryData();
    }, [categoryId]);
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
      const response = await axios.put(  `http://localhost:3001/category/${categoryId}`,
      categoryData);
      console.log(response);
      if (response.status === 200) {
        navigate("/home/category");
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
    setcategoryData({ ...categoryData, [name]: value });
  };

  
  return (

<div>
<div className="addcatcontainer">
  <div className="addcatcontent rounded border">
    <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Modifier département</h3> <br/>
    


<form className="addempform" onSubmit={handleSubmit}>

<div className="addempgroup" >
<label className="col Txt">Nom département:</label>



<input
           type="text"
           name="cname"
            className="addcat form-control Txt"
          placeholder="Nom de département"
          required
          value={categoryData.cname}
           onChange={handleChange}
         />
        
</div>
<div className="addempgroup">
<label className="col Txt">Description département:</label>

         <textarea
          className="addcat form-control custom-scrollbar Txt"
           placeholder="Description de département "
           value={categoryData.description}
           name="description"

          onChange={handleChange}
        />
</div>
<div className="addempgroup">
<label className="col Txt">Chef de département:</label>
              <select name="superviseur" value={categoryData.superviseur} onChange={handleChange} className="form-select Txt">
                {employees.map((c) => {
                  return <option key={c.id} value={c.name}>{c.name}</option>;
                })}
              </select>

              </div>

{/* <div className="addempgroup"> 
        <select name="category" value={formData.category} onChange={handleChange} className="form-select Txt">
          {categories.map((c) => {
              return <option key={c.id} value={c.cname}>{c.cname}</option>;
          })}
        </select>
      </div>  */}

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
</div>
  );
};

export default Update;
