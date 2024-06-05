// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "../sidenavbar/sidenavbar.css";
// import "./category.css";
// import "./addcategory.css";
// import { MdAdd, MdClose } from 'react-icons/md';

// const AddCategory = () => {
//   const navigate = useNavigate();
//   const [categoryName, setCategoryName] = useState("");
//   const [categoryDescription, setCategoryDescription] = useState("");


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         /*"http://localhost:4001/category/add_category",*/
//         "http://localhost:4001/api/category",
//         {
//           name: categoryName,
//           description: categoryDescription,
//         }
//       );
//       console.log(response.data);
//       navigate("/home/category");
//     } catch (error) {
//       console.error(error);
//       navigate("/home/category");
//     }
//   };
  

//   return (
//     <div>
//       <div className="addcatcontainer">
//         <div className="addcatcontent rounded border">
//           <h3 className="text-center" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: 'bold', color: '#233067', marginBottom: '20px' }}>Ajouter département</h3> <br/>
//           {/* <form className="addcatform" onSubmit={handleSubmit}>
//             <div className="addcatgroup">
            
//               <input
//                 type="text"
//                 className="addcat form-control"
//                 id="name"
//                 placeholder=" Nom de département"
//                 required
//                 value={categoryName}
//                 onChange={(e) => setCategoryName(e.target.value)}
//               />
//             </div>
//             <div className="addcatgroup">
            
//               <textarea
//                 id="description"
//                 className="addcat form-control custom-scrollbar"
//                 placeholder=" Description département"
//                 required
//                 value={categoryDescription}
//                 onChange={(e) => setCategoryDescription(e.target.value)}
//                 style={{ resize: "none" }}
//               />
//             </div>
//             <div className="editempgroup">
//   <button type="button" className="editemp-save" onClick={() => handleSubmit()}>
//   <i class="fas fa-save"></i>
//   </button>
//   <button type="submit" className="editemp-close" onClick={() => navigate("/home/employee")}>
//   <i class="fa fa-trash" aria-hidden="true"></i>
//   </button>
// </div>
//           </form> */}


// <form className="addempform" onSubmit={handleSubmit}>

// <div className="addempgroup" >
// <label className="col Txt">Nom département:</label>
// <input
//                 type="text"
//                 className="addcat form-control Txt"
//                 id="name"
//                 placeholder=" Nom de département"
//                 required
//                 value={categoryName}
//                 onChange={(e) => setCategoryName(e.target.value)}
//               />
// </div>
// <div className="addempgroup">
// <label className="col Txt">Description département:</label>
// <textarea
//                 id="description"
//                 className="addcat form-control custom-scrollbar Txt"
//                 placeholder=" Description département"
//                 required
//                 value={categoryDescription}
//                 onChange={(e) => setCategoryDescription(e.target.value)}
//                 style={{ resize: "none" }}
//               />
// </div>
// <div className="addempgroup">
// <label className="col Txt">Chef de département:</label>
//                     <select name="superviseur" value={categorie.supervieur} onChange={handleChange} className="form-select Txt">
//                       {employees.map((c) => {
//                         return <option key={c.id} value={c.name}>{c.name}</option>;
//                       })}
//                     </select>

// <input
//                 type="text"
//                 className="addcat form-control Txt"
//                 id="name"
//                 placeholder=" Chef de département"
//                 required
//                 value={categoryName}
//                 onChange={(e) => setCategoryName(e.target.value)}
//               />
//                     </div>

// {/* <div className="addempgroup"> 
//               <select name="category" value={formData.category} onChange={handleChange} className="form-select Txt">
//                 {categories.map((c) => {
//                     return <option key={c.id} value={c.cname}>{c.cname}</option>;
//                 })}
//               </select>
//             </div>  */}

// <div className="editempgroup">
//     <button type="submit" className="btn btn-outline-primary me-2" onClick={() => handleSubmit()}>
//       Envoyer
//     </button>
//     <button type="reset" className="btn btn-outline-danger" onClick={() => navigate("/home/category")}>
//       Annuler
//     </button>
//   </div>
// </form>


//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddCategory;
