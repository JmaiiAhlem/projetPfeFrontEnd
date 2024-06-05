import React, { useState } from 'react';
import ProfileForm from './profileForm';
// import './styles.css';
import './admin.css';
 import '../ProtectRoute/ProtectedRoute.css';

import Avata from "../img/AhlemJmaii.jpg";
import backgroundImage from '../img/background.png';

const AdminProfile = () => {
  const [adminInfo, setAdminInfo] = useState({
    personal: {
      firstName: 'Ahlem',
      lastName: 'Jmaii',
      email: 'ahlemj@visto-consulting.com',
      phone: '27568947',
      address: 'Hergla 4012 sousse',
      civilStatus:'Célibataire'
    },
    professional: {
      position: 'RH',
      department: 'Ressource humaine',
      fonction: 'Responsable rh ',
      startDate: '01-01-2021',
      skills: ['React Js', 'Nest Js', 'React native', 'Java'],
      type: 'CDD.'
    }
  });

  return (
      <div className="admin-profile card">
    
            <div>
    <div className="procontainer d-flex justify-content-center align-items-center vh-60" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="procontent rounded d-flex flex-column justify-content-center align-items-center" style={{ width: '100%',}}>
      <img
        className="img-sm rounded-circle"
        src={Avata}
        alt=""
      />
        <h5 className="mt-3 collr">Ahlem Jmaii : Responsable RH </h5>
      </div>
    </div>
    </div>
   
   
      <ProfileForm adminInfo={adminInfo} setAdminInfo={setAdminInfo} />
  

  <div className="row">
    <div className="col-12 col-md-6">
      <div className="profile-display">
        <h4 className="card-title"><strong>Informations personnelles</strong></h4>
        <table>
          <tbody>
            <tr>
              <td><strong>Nom :</strong></td>
              <td>{adminInfo.personal.firstName} </td>
            </tr>
            <tr>
              <td><strong> Prénom:</strong></td>
              <td> {adminInfo.personal.lastName}</td>
            </tr>
            <tr>
              <td><strong>Email:</strong></td>
              <td>{adminInfo.personal.email}</td>
            </tr>
            <tr>
              <td><strong>Téléphone:</strong></td>
              <td>{adminInfo.personal.phone}</td>
            </tr>
            <tr>
              <td><strong>Adresse:</strong></td>
              <td>{adminInfo.personal.address}</td>
            </tr>
            <tr>
              <td><strong>Etat civil:</strong></td>
              <td>{adminInfo.personal.civilStatus}</td>
            </tr>
          </tbody>
        </table>
        </div>
        </div>
        <div className="col-12 col-md-6">
        <div className="profile-display">
        <h4 className="card-title"><strong>Informations Professionnel</strong></h4>
        <table>
          <tbody>
            <tr>
              <td><strong>Role:</strong></td>
              <td>{adminInfo.professional.position}</td>
            </tr>
            <tr>
              <td><strong>Départment:</strong></td>
              <td>{adminInfo.professional.department}</td>
            </tr>
            <tr>
              <td><strong>Fonction :</strong></td>
              <td>{adminInfo.professional.fonction}</td>
            </tr>
            <tr>
              <td><strong>Type de contrat:</strong></td>
              <td>{adminInfo.professional.type}</td>
            </tr>
            <tr>
              <td><strong>Date de début:</strong></td>
              <td>{adminInfo.professional.startDate}</td>
            </tr>
            <tr>
              <td><strong>Compétences:</strong></td>
              <td>{adminInfo.professional.skills.join(', ')}</td>
            </tr>
          
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
 


    
  );
};

export default AdminProfile;
