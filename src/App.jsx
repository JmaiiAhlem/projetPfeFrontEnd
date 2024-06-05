import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FirstPage from "./components/firstpage/firstpage";
import Forgot from "./components/login/forgotpass";
import Reset from "./components/login/resetpass";
import Home from "./components/home/home";
import Users from "./components/users/user";
import AddUsers from "./components/users/adduser";
import AddSocietes from "./components/societes/addsociete";
import Employees from "./components/employees/employees";
import AddEmployee from "./components/employees/addemployee";
import EditEmployee from "./components/employees/editemployee";
import Category from "./components/category/category";
import AddCategory from "./components/category/addcategory";
import React, { Component, useEffect } from "react";
import { useDispatch } from "react-redux/es/exports";
import ProtectedRoute from "./components/ProtectRoute/ProtectedRoute";
import Societes from "./components/societes/societes";
import Signup from "./components/signup/signup";
import Conges from "./components/conges/conges";
import Update from "./components/category/update";
import Search from "./components/search/search";
import EditSociete from "./components/societes/editsociete";
import Contrats from "./components/contrat/contrats";
import AddContrat from "./components/contrat/addcontrat";
import Pointage from "./components/Pointage/pointage"; 
import AdminProfile from "./components/profile/adminProfile";
import Verification from "./components/verification/verif";
import AddCategor from "./components/category/addCategor";
import EditContat from "./components/contrat/editcontrat";
import EditTypeContrat from "./components/type-contrat/editTypeContrat";
import TypeContrat from "./components/type-contrat/typeContrat";
import AddTypeContrat from "./components/type-contrat/addTypecontrat";
import EditBank from "./components/bank/editbank";
import Banks from "./components/bank/banks";
import AddBank from "./components/bank/addbank";
import DetailEmployee from "./components/employees/detailemploye";





function App() {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<FirstPage />}></Route>
        <Route path="/search" element={<Search />}></Route>

        <Route path="/login" element={<FirstPage />}></Route> 
        <Route path="/forgotpass" element={<Forgot />}></Route>
        <Route path="/resetpass/:id/:token" element={<Reset />}></Route>
        <Route path="/signup" element={<Signup />}></Route> 
        <Route
          path="/home"
         
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
          
        />
        <Route
          path="/home/pointage"
          element={
            <ProtectedRoute>
              <Pointage />
            </ProtectedRoute>
          }
        />

<Route
          path="/home/societe"
          element={
            <ProtectedRoute>
              <Societes />
            </ProtectedRoute>
          }
        />

<Route
          path="/home/conges"
          element={
            <ProtectedRoute>
              <Conges/>
            </ProtectedRoute>
          }
        />
<Route
          path="/home/societe/add"
          element={
            <ProtectedRoute>
              <AddSocietes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/verification"
          element={
            <ProtectedRoute>
              <Verification />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/societe/edit/:societeId"
          element={
            <ProtectedRoute>
              <EditSociete/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/user"
          element={
            <ProtectedRoute>
              <Users />
            </ProtectedRoute>
          }
        />
         <Route
          path="/home/contrat"
          element={
            <ProtectedRoute>
              <Contrats />
            </ProtectedRoute>
          }
        />
          <Route
          path="/home/contrat/add"
          element={
            <ProtectedRoute>
              <AddContrat/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/home/contrat/edit/:contratId"
          element={
            <ProtectedRoute>
              <EditContat/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/user/add"
          element={
            <ProtectedRoute>
              <AddUsers />
            </ProtectedRoute>
          }
        />
       <Route
          path="/home/employee"
          element={
            <ProtectedRoute>
              <Employees />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/employee/add"
          element={
            <ProtectedRoute>
              <AddEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/employee/edit/:employeeId"
          element={
            <ProtectedRoute>
              <EditEmployee />
            </ProtectedRoute>
          }
        />
         <Route
          path="/home/employee/:employeeId"
          element={
            <ProtectedRoute>
              <DetailEmployee />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/category"
          element={
            <ProtectedRoute>
              <Category />
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/category/add"
          element={
            <ProtectedRoute>
              <AddCategor/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/home/category/edit/:categoryId"
          element={
            <ProtectedRoute>
              <Update/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/home/typeContrat/add"
          element={
            <ProtectedRoute>
              <AddTypeContrat/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/home/typeContrat"
          element={
            <ProtectedRoute>
              <TypeContrat/>
            </ProtectedRoute>
          }
        />
         <Route
          path="/home/typeContrat/edit/:typeContratId"
          element={
            <ProtectedRoute>
              <EditTypeContrat/>
            </ProtectedRoute>
          }
        />
  <Route
          path="/home/bank/add"
          element={
            <ProtectedRoute>
              <AddBank/>
            </ProtectedRoute>
          }
        />
        <Route
          path="/home/bank"
          element={
            <ProtectedRoute>
              <Banks/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/home/bank/edit/:banqueId"
          element={
            <ProtectedRoute>
              <EditBank/>
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/home/adminProfile"
          element={
            <ProtectedRoute>
              <AdminProfile/>
            </ProtectedRoute>
          }
        />
<Route
path="/home/societes"
element={
  <ProtectedRoute>
    <Societes/>
  </ProtectedRoute>
}
/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
