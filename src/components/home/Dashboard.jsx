import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap';
import {Bar, Doughnut} from 'react-chartjs-2';
import DatePicker from "react-datepicker";
import Logo from "../img/Logo.png";
import "./dashboard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp, faArrowDown,faUserPlus } from '@fortawesome/free-solid-svg-icons';

import Avatar from 'react-avatar';
const handleClick = () => {

};
const handleEdit = () => {};
const handleDelete = () => {};

class Dashboard extends Component {

  render () {
    return (
<div className="employees-list">
    <main className="content-area">
      <section className="content-container">
        <div className="content-header">
          <div className="search-bar-parent">
            <div className="search-bar">
              <div className="header"></div>
              <div className="content-title">
                <div className="title-area">
                  <div className="title-container1">
                    <h1 className="title9">Employees</h1>
                    <div className="grid-layout">
                    <div className="grid-icon">
  <div className="grid-symbol">
    <i className="fas fa-th-large"></i> {/* Icône de vue en grille */}
  </div>
  <div className="title10">Card View</div>
</div>
                    </div>
                  </div>
                </div>
                <div className="sorting-options">
                  <div className="sort">
                    <div className="field" />
                    <div className="email1">
Trier par</div>
                    <div className="sorting-dropdowns">
                      <div className="chevron-down1">
                      <div >
  <FontAwesomeIcon icon={faArrowDown} /> 
</div>
                      </div>
                    </div>
                  </div>
                  <div className="select">
                    <div className="field1" />
                    <div className="email2">Désignation</div>
                    <div className="chevron-down-wrapper">
                    <div >
  <FontAwesomeIcon icon={faArrowDown} /> 
</div>
                    </div>
                  </div>
                  {/* <div className="button1">
                  <div className="sorting-separator-parent">
  <div className="sorting-separator">
    <i className="fas fa-file-import"></i> 
  </div>
  <div className="sorting-labels">Import</div>
</div>
                  </div> */}
                  <button className="button2" onClick={handleClick}>
  <div className="frame-parent">
    <div className="wrapper">
    <div className="div1">
  <FontAwesomeIcon icon={faUserPlus} />
</div>
    </div>
    <div className="text2">Ajouter employé</div>
  </div>
</button>
                </div>
              </div>
            </div>
            <div className="header1">
  <div className="background5" />
  {/* Les titres existants */}
  <div className="column-titles1">
    <div className="column-titles">
      <div className="header-title">
        <div className="column-header-content">
          <div className="title11">Nom & Prénom</div>
          <div className="sorting-indicators">
            <div >
              <FontAwesomeIcon icon={faArrowUp} /> 
              <FontAwesomeIcon icon={faArrowDown} /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="column-titles5">
    <div className="header-title5">Email</div>
  </div>
  <div className="column-titles5">
    <div className="header-title6">Téléphone</div>
  </div>
  <div className="column-titles1">
    <div className="header-title1">Fonction</div>
  </div>
  <div className="column-titles1">
    <div className="header-title1">Role</div>
  </div>
  <div className="column-titles2">
    <div className="header-title2">Département</div>
  </div>
  <div className="column-titles7">
    <div className="header-title7">Actions</div>
  </div>
</div>

          </div>
        </div>
        <div className="jobs">
          <div className="background7" />
          <div className="employee1">
            <div className="frame-group">
              <div className="frame-container">
                <div className="checkboxuncheck-wrapper">
                  <input className="checkboxuncheck" type="checkbox" />
                </div>
                
                <div className="candidate1">
  <Avatar
    className="portrait-of-serious-confident-icon1"
    name="Chester Wiza"
    size="35"
    round={true}
  />
  <div className="employee-name-container1">
    <div className="name2">Chester Wiza</div>
  </div>
</div>

              </div>
              <div className="contact-email-container">
                <div className="email4">
  <div className="location-indicator">
    
  </div>
  <div className="envelope1">
    <i className="fas fa-envelope"></i> wiza1234@example.com
  </div>
</div>
                </div>
                <div className="contact-options">
                  <div className="contact-info">
                    <div className="phone-number-container">
                    <div className="phone2">
  <div className="phone-icon-container">
    <div className="phone3">
      <i className="fas fa-phone"></i> {/* Icône de téléphone */}
    </div>
  </div>
  <div className="number1">(555) 123-4567</div>
</div>
                    </div>
                  </div>
                </div>
         
            <div className="position-wrapper">
                <div className="position1">
                  <div className="job-title-container">
                    <div className="department2">Full Stack Developer</div>
                  </div>
                </div>
              </div>
              <div className="department-wrapper">
                  <div className="department3">Employé</div>
                </div>
                <div className="department-wrapper">
                  <div className="department3">IT</div>
                </div>
                <div className="department-wrapper" style={{ display: "flex" }}>
  <div className="icon-container">
    <i className="fas fa-edit edit-icon" onClick={handleEdit}></i>
  </div>  &nbsp;
  <div className="icon-container">
    <i className="fas fa-trash-alt delete-icon" onClick={handleDelete}></i>
  </div>
</div>
              </div>
          </div>
          
          
          <div className="line8">
            <div className="line9" />
          </div>
          <div className="employee5">
            <div className="frame-parent10">
              <div className="checkboxlight-uicheck-container">
                <input
                  className="checkboxlight-uicheck2"
                  defaultChecked="{true}"
                  type="checkbox"
                />
              </div>
              <div className="candidate5">
              <Avatar
    className="portrait-of-serious-confident-icon1"
    name="Graham Rice"
    size="35"
    round={true}
  />
                <div className="name-wrapper1">
                  <div className="name6">Graham Rice</div>
                </div>
              </div>
            </div>
            <div className="position-wrapper2">
              <div className="position5">
                <div className="text-wrapper1">
                  <div className="text9">C++ Game Developer</div>
                </div>
              </div>
            </div>
            <div className="department-wrapper2">
              <div className="department7">Department</div>
            </div>
            <div className="emploeestatusactive-frame">
              <button className="emploeestatusactive3">
                <div className="background12" />
                <div className="text10">Active</div>
              </button>
            </div>
            <div className="location-date1">
              <div className="date5">
                <div className="location5">Jan, 29 2023</div>
              </div>
            </div>
            <div className="email-and-phone">
              <div className="contact-email">
                <div className="email8">
                  <div className="email-icon1">
                    <div className="location-dot5">
                      <p className="p10"></p>
                    </div>
                  </div>
                  <div className="envelope5">graham-ric@example.com</div>
                </div>
                <div className="phone10">
                  <div className="contact-action">
                    <div className="phone11">
                      <p className="p11"></p>
                    </div>
                  </div>
                  <div className="number5">(123) 554-7612</div>
                </div>
              </div>
            </div>
            <div className="page-number">
              <img
                className="options-icon5"
                loading="lazy"
                alt=""
                src="./public/options-5.svg"
              />
            </div>
          </div>
          <div className="line10">
            <div className="line11" />
          </div>
          <div className="employee7">
            <div className="frame-parent14">
              <div className="frame-parent15">
                <div className="checkboxuncheck-wrapper1">
                  <input className="checkboxuncheck3" type="checkbox" />
                </div>
                <div className="candidate7">
                <Avatar
    className="portrait-of-serious-confident-icon1"
    name="Kallie Towne"
    size="35"
    round={true}
  />
                  <div className="name-wrapper3">
                    <div className="name8">Kallie Towne</div>
                  </div>
                </div>
              </div>
              <div className="position-wrapper4">
                <div className="position7">
                  <div className="text-wrapper3">
                    <div className="text13">Graphic Designer</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="employee-inner7">
              <div className="frame-parent16">
                <div className="department-wrapper4">
                  <div className="department9">Sales &amp; Marketing</div>
                </div>
                <div className="emploee-statusstatusrightte-wrapper">
                  <div className="emploee-statusstatusrightte">
                    <div className="background14" />
                    <div className="text14">Terminated</div>
                  </div>
                </div>
                <div className="date-wrapper2">
                  <div className="date7">
                    <div className="location7">Jan, 10 2022</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="employee-inner8">
              <div className="frame-parent17">
                <div className="email-wrapper2">
                  <div className="email10">
                    <div className="location-indicator2">
                      <div className="location-dot7">
                        <p className="p14"></p>
                      </div>
                    </div>
                    <div className="envelope7">towne2209@example.com</div>
                  </div>
                </div>
                <div className="phone-wrapper4">
                  <div className="phone14">
                    <div className="phone-wrapper5">
                      <div className="phone15">
                        <p className="p15"></p>
                      </div>
                    </div>
                    <div className="number7">(143) 453-8733</div>
                  </div>
                </div>
                <img
                  className="options-icon7"
                  loading="lazy"
                  alt=""
                  src="./public/options-7.svg"
                />
              </div>
            </div>
          </div>
          <div className="line14">
            <div className="line15" />
          </div>
          <div className="period-selector">
            <div className="previous-parent">
              <div className="previous">
                <div className="background15" />
                <div className="arrow-left">
                <i className="fas fa-arrow-left"></i> 
</div>
              </div>
              <div className="page">
                <div className="background16" />
                <div className="number8">1</div>
              </div>
              <div className="next">
                <div className="background17" />
                <div className="arrow-right">
  <i className="fas fa-arrow-right"></i> 
</div>
              </div>
            </div>
            <div className="selection-menu">
              <div className="menu-title">
                <div className="duration">Show 1 to 8 f 50 entries</div>
              </div>
              <div className="picker">
                <div className="background18" />
                <div className="period">Show 8</div>
                <div className="selector-container">
                <div >
  <FontAwesomeIcon icon={faArrowDown} /> 
</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
    );
  }
}

export default Dashboard;