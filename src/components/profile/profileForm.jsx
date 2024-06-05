import React from 'react';

const ProfileForm = ({ adminInfo, setAdminInfo }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    const [category, key] = name.split('.');

    setAdminInfo((prevState) => ({
      ...prevState,
      [category]: {
        ...prevState[category],
        [key]: value
      }
    }));
  };

  return (
<form className="profile-form card col-12"> <br/>
      <h3 className="card-title col col-xl-3">Modifier Profile</h3>
      <div className="row">
        <div className="col-6">
          <h4 className="card-title col "> <strong> Informations personnelles</strong></h4>
          <label className="col Txt">
            Nom:
            <input
              className="addemp form-control Txt"
              type="text"
              name="personal.firstName"
              value={adminInfo.personal.firstName}
              onChange={handleChange}
            />
          </label>
          <label className="col Txt">
            Prénom:
            <input
              className="addemp form-control Txt"
              type="text"
              name="personal.lastName"
              value={adminInfo.personal.lastName}
              onChange={handleChange}
            />
          </label>
          <label className="col Txt">
            Email:
            <input
              className="addemp form-control Txt"
              type="email"
              name="personal.email"
              value={adminInfo.personal.email}
              onChange={handleChange}
            />
          </label>
          <label className="col Txt">
            Téléphone:
            <input
              className="addemp form-control Txt"
              type="text"
              name="personal.phone"
              value={adminInfo.personal.phone}
              onChange={handleChange}
            />
          </label>
          <label className="col Txt">
            Adresse:
            <input
              className="addemp form-control Txt"
              type="text"
              name="personal.address"
              value={adminInfo.personal.address}
              onChange={handleChange}
            />
          </label>
          <label className="col Txt">
  Etat civil:
  <select
    className="form-select Txt"
    name="personal.civilStatus"
    value={adminInfo.personal.civilStatus}
    onChange={handleChange}
  >
    <option value="Célibataire">Célibataire</option>
    <option value="Marié(e)">Marié(e)</option>
    <option value="Divorcé(e)">Divorcé(e)</option>
    <option value="Veuf/Veuve">Veuf/Veuve</option>
  </select>
</label>
        </div>
        <div className="col-6">
  <h4 className="card-title col"><strong>Informations Professionnel</strong></h4>

  <label className="col Txt">
    Rôle:
    <select
      className="form-select Txt"
      name="professional.position"
      value={adminInfo.professional.position}
      disabled
    >
      <option value="PDG">PDG</option>
      <option value="Manager">Manager</option>
      <option value="Rh">RH</option>
      <option value="Chef d'équipe">Chef d'équipe</option>
      <option value="Employé">Employé</option>
    </select>
  </label>
          
  <label className="col Txt">
    Département:
    <select
      className="form-select Txt"
      name="professional.department"
      value={adminInfo.professional.department}
      disabled
    >
      <option value="IT">IT</option>
      <option value="Commercial">Commercial</option>
      <option value="Rh">Ressource Humaine</option>
      <option value="Marketing">Marketing</option>
    </select>
  </label>
  
  <label className="col Txt">
    Fonction:
    <select
      className="form-select Txt"
      name="professional.fonction"
      value={adminInfo.professional.fonction}
      disabled
    >
      <option value="Développeur front">Développeur front</option>
      <option value="Développeur back">Développeur back</option>
      <option value="Développeur Full-stack">Développeur Full-stack</option>
      <option value="Ingénieur Devops">Ingénieur Devops</option>
      <option value="Développeur mobile">Développeur mobile</option>
      <option value="Développeur Data">Développeur Data</option>
      <option value="Responsable rh">Responsable rh</option>
      <option value="Assistant de direction">Assistant de direction</option>
    </select>
  </label>
  
  <label className="col Txt">
    Type de contrat:
    <select
      className="form-select Txt"
      name="professional.type"
      value={adminInfo.professional.type}
      disabled
    >
      <option value="CIVP1">CIVP 1</option>
      <option value="CIVP2">CIVP 2</option>
      <option value="CDD">CDD</option>
      <option value="CDI">CDI</option>
    </select>
  </label>
  
  <label className="col Txt">
    Date de début de contrat:
    <input
      className="addemp form-control Txt"
      type="date"
      name="professional.startDate"
      value={adminInfo.professional.startDate}
      disabled
    />
  </label>
  
  <label className="col Txt">
    Compétences:
    <input
      className="addemp form-control Txt"
      type="text"
      name="professional.skills"
      value={adminInfo.professional.skills.join(', ')}
      disabled
    />
  </label>
</div>

      </div>
    </form>
  );
};

export default ProfileForm;
