import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import "./addemployee.css";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Swal from "sweetalert2";
import Footer from "../footer/footer";

const DetailEmployee = () => {
  const navigate = useNavigate();


  const { employeeId } = useParams();

  const [employeeData, setemployeeData] = useState();

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

    const handleSubmit = async (e) => {
     

  };

  const getUserByEmail = (email) => {
    axios.get(`http://localhost:3001/user/email?email=${email}`)
      .then(response => {
        if (response.status === 200) {
          console.log(response.data.existingUser);

          setemployeeData(response.data.existingUser);
        } else {
          setemployeeData(null);
        }
      })
      .catch((error) => showErrorToast());

  };
  useEffect(()=>{
    console.log(employeeData);
    getUserByEmail(employeeId)

  },[employeeId])

 
  return (
  <div>
   <div className="addempcontainer">
  <div className="addempcontent rounded border">
    <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>
      Details Employé
    </h3>
    <div className="addempform">
    
        </div>
  <div className="row">
    <div className="col-md-4">
      <div className="addempgroup">
        <label className="col Txt">Nom & Prénom:</label>
        <span
          
          className="addemp form-control Txt"
        >
          {employeeData?.name}
            </span>
      </div>

      <div className="addempgroup">
        <label className="col Txt">Email:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.email}
            </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Adresse:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.adresse}
            </span>
      </div>
      </div>

    
    <div className="col-md-4">

      <div className="addempgroup">
        <label className="col Txt">Téléphone:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.phone}
            </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Date de naissance:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.datNais}
            </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">État civil:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.etatCivil}
            </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Rôle:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.role}
            </span>
      </div>
    </div>
    <div className="col-md-4">

      <div className="addempgroup">
        <label className="col Txt">Département:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.category}
            </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Fonction :</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.fonction}
            </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Type de contrat:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.typeContrat}
            </span>
      </div>
      <div className="addempgroup">
        <label className="col Txt">Date début de contrat:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.dateDebut}
            </span>
      </div>
    </div>
  
    
    <div className="addempgroup">
        <label className="col Txt">Nom Banque:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.bankName}
            </span>
      </div>

    <div className="addempgroup">
        <label className="col Txt">RIB:</label>
        <span
          
          className="addemp form-control Txt"
        >{employeeData?.rib}
            </span>
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

  </div>
</div>
    <Footer/>
    </div>

  );
};

export default DetailEmployee;
