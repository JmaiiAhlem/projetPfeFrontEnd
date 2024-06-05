import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaUserCircle, FaUsers, FaBuilding, FaCalendarAlt, FaBriefcase, FaEdit, FaTrashAlt } from "react-icons/fa";
import "./sidenavbar.css";
import "./calendier.css";
import noData from "../img/nodata.png";
import {
  MdPeople,
  MdDashboard,
  MdOutlineFormatListBulleted,
} from "react-icons/md";
import { Link } from "react-router-dom";
import arrier from "../img/arrier.png"

import cand from "../img/time-and-calendar (3).png";
import build from "../img/appartement.png";
import teams from "../img/construction-dequipe (1).png";
import mission from "../img/recherche.png";

const SideNavbar = () => {
  const [userId, setUserId] = useState(null);
  const [employees, setEmployee] = useState([]);
  const [name, setUserName] = useState("");
  const [allEmployees, setAllEmployees] = useState(null);
  const [employeeTotal, setEmployeeTotal] = useState(0);
  const [categoryTotal, setCategoryTotal] = useState(0);


  const employeeCount = () => {
    axios
      .get(`http://localhost:4001/employee/employee_count`)
      .then((response) => {
        if (response.data.Status) {
          setEmployeeTotal(response.data.Result);
        } else {
          console.error("Failed to fetch employee count");
        }
      })
      .catch((error) => {
        console.error("Error");
      });
  };

  const capitalizeFirstLetter = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const fetchEmployee = async () => {
    try {
      const response = await axios.get(
        `http://localhost:4001/employees/employees`
      );
      if (response.data.employees && response.data.employees.length > 0) {
        setAllEmployees(response.data.employees);
        setEmployee(response.data.employees);
      } else {
        console.log("No employees found or empty response.");
      }
    } catch (error) {
      console.error("Error");
    }
  };

  const employeesList = employees || [];

  return (
    <div >
      <div data-v-8ecef792="" className="v-row v-row--no-gutters addempcontent rounded border">
  <div data-v-8ecef792="" className="col-xxl-7 col-sm-12 col-12">
    <div data-v-8ecef792="" className="v-card-item">
      {/**/}
      <div className="v-card-item__content">
        <div
          data-v-8ecef792=""
          className="v-card-title text-md-h5 text-primary1 colTxt"
        >
          {" "}
          Bienvenu chez Visto RH! 🎉{" "}
        </div>
      </div>
    </div>
    <div data-v-8ecef792="" className="v-card-text">
      <span data-v-8ecef792="">
      Chaque talent est valorisé. <br data-v-8ecef792="" /> Chaque parcours professionnel est soutenu.{" "}
      </span>
      <br data-v-8ecef792="" />
      <button
        data-v-8ecef792=""
        type="button"
        className="v-btn v-theme--light text-primary1 colTxt v-btn--density-default v-btn--size-small v-btn--variant-tonal mt-4 "
      >
        <span className="v-btn__overlay" />
        <span className="v-btn__underlay"></span>
        <span className="v-btn__content " data-no-activator="">
          {" "}
          Voir Votre Profil{" "}
        </span>
      </button>
    </div>
  </div>
  <div
    data-v-8ecef792=""
    className="col-xxl-5 col-sm-12 col-12 order-1 text-center"
  >
    <img
      data-v-8ecef792=""
      src={arrier}
      height={175}
      className="position-absolute0 john-illustration flip-in-rtl pl"
    />
  </div>
</div>
<br/>
<br/>

<div  data-v-8ecef792="" className="v-col-sm-6 order-sm-1 v-col-12 order-2">
<div className="col-xxl-8 col-sm-12 col-12">
  <div className="card11 card-500">
    <div className="card-body">
      <div className="schedule-calendar">
        <div
          id="customScheduleCal"
          className="fc fc-media-screen fc-direction-ltr fc-theme-standard"
        >
          <div className="fc-header-toolbar fc-toolbar fc-toolbar-ltr">
            <div className="fc-toolbar-chunk">
              <div className="fc-button-group">
                <button
                  className="fc-prev-button fc-button fc-button-primary"
                  type="button"
                  aria-label="prev"
                >
                  <span className="fc-icon fc-icon-chevron-left" />
                </button>
                <button
                  className="fc--button fc-button fc-button-primary"
                  type="button"
                ></button>
              </div>
              <div className="fc-button-group">
                <button
                  className="fc-next-button fc-button fc-button-primary"
                  type="button"
                  aria-label="next"
                >
                  <span className="fc-icon fc-icon-chevron-right" />
                </button>
                <button
                  className="fc--button fc-button fc-button-primary"
                  type="button"
                />
              </div>
              <div className="fc-button-group">
                <button
                  className="fc-today-button fc-button fc-button-primary"
                  type="button"
                >
                  today
                </button>
                <button
                  className="fc--button fc-button fc-button-primary"
                  type="button"
                />
              </div>
              <button
                className="fc-dayGridMonth-button fc-button fc-button-primary fc-button-active"
                type="button"
              >
                month
              </button>
            </div>
            <div className="fc-toolbar-chunk" />
            <div className="fc-toolbar-chunk">
              <h2 className="fc-toolbar-title">December 2021</h2>
            </div>
          </div>
          <div className="fc-view-harness fc-view-harness-passive">
            <div className="fc-daygrid fc-dayGridMonth-view fc-view">
              <table className="fc-scrollgrid ">
                <thead>
                  <tr className="fc-scrollgrid-section fc-scrollgrid-section-header ">
                    <td>
                      <div className="fc-scroller-harness">
                        <div
                          className="fc-scroller"
                          style={{ overflow: "visible" }}
                        >
                          <table
                            className="fc-col-header "
                            style={{ width: 735 }}
                          >
                            <colgroup />
                            <tbody>
                              <tr>
                                <th className="fc-col-header-cell fc-day fc-day-sun">
                                  <div className="fc-scrollgrid-sync-inner">
                                    <a className="fc-col-header-cell-cushion ">
                                      Sun
                                    </a>
                                  </div>
                                </th>
                                <th className="fc-col-header-cell fc-day fc-day-mon">
                                  <div className="fc-scrollgrid-sync-inner">
                                    <a className="fc-col-header-cell-cushion ">
                                      Mon
                                    </a>
                                  </div>
                                </th>
                                <th className="fc-col-header-cell fc-day fc-day-tue">
                                  <div className="fc-scrollgrid-sync-inner">
                                    <a className="fc-col-header-cell-cushion ">
                                      Tue
                                    </a>
                                  </div>
                                </th>
                                <th className="fc-col-header-cell fc-day fc-day-wed">
                                  <div className="fc-scrollgrid-sync-inner">
                                    <a className="fc-col-header-cell-cushion ">
                                      Wed
                                    </a>
                                  </div>
                                </th>
                                <th className="fc-col-header-cell fc-day fc-day-thu">
                                  <div className="fc-scrollgrid-sync-inner">
                                    <a className="fc-col-header-cell-cushion ">
                                      Thu
                                    </a>
                                  </div>
                                </th>
                                <th className="fc-col-header-cell fc-day fc-day-fri">
                                  <div className="fc-scrollgrid-sync-inner">
                                    <a className="fc-col-header-cell-cushion ">
                                      Fri
                                    </a>
                                  </div>
                                </th>
                                <th className="fc-col-header-cell fc-day fc-day-sat">
                                  <div className="fc-scrollgrid-sync-inner">
                                    <a className="fc-col-header-cell-cushion ">
                                      Sat
                                    </a>
                                  </div>
                                </th>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr className="fc-scrollgrid-section fc-scrollgrid-section-body ">
                    <td>
                      <div className="fc-scroller-harness">
                        <div
                          className="fc-scroller"
                          style={{ overflow: "visible" }}
                        >
                          <div
                            className="fc-daygrid-body fc-daygrid-body-unbalanced fc-daygrid-body-natural"
                            style={{ width: 735 }}
                          >
                            <table
                              className="fc-scrollgrid-sync-table"
                              style={{ width: 735 }}
                            >
                              <colgroup />
                              <tbody>
                                <tr>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other"
                                    data-date="2021-11-28"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-11-28","type":"day"}'
                                          tabIndex={0}
                                        >
                                          28
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other"
                                    data-date="2021-11-29"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-11-29","type":"day"}'
                                          tabIndex={0}
                                        >
                                          29
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-tue fc-day-past fc-day-other"
                                    data-date="2021-11-30"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-11-30","type":"day"}'
                                          tabIndex={0}
                                        >
                                          30
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                    data-date="2021-12-01"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-01","type":"day"}'
                                          tabIndex={0}
                                        >
                                          1
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                    data-date="2021-12-02"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-02","type":"day"}'
                                          tabIndex={0}
                                        >
                                          2
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                    data-date="2021-12-03"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-03","type":"day"}'
                                          tabIndex={0}
                                        >
                                          3
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(235, 51, 51)",
                                              backgroundColor:
                                                "rgb(235, 51, 51)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    5
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                    data-date="2021-12-04"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-04","type":"day"}'
                                          tabIndex={0}
                                        >
                                          4
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(20, 152, 101)",
                                              backgroundColor:
                                                "rgb(20, 152, 101)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    3
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                    data-date="2021-12-05"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-05","type":"day"}'
                                          tabIndex={0}
                                        >
                                          5
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past">
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    7
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                    data-date="2021-12-06"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-06","type":"day"}'
                                          tabIndex={0}
                                        >
                                          6
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                    data-date="2021-12-07"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-07","type":"day"}'
                                          tabIndex={0}
                                        >
                                          7
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                    data-date="2021-12-08"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-08","type":"day"}'
                                          tabIndex={0}
                                        >
                                          8
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past">
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    3
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                    data-date="2021-12-09"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-09","type":"day"}'
                                          tabIndex={0}
                                        >
                                          9
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                    data-date="2021-12-10"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-10","type":"day"}'
                                          tabIndex={0}
                                        >
                                          10
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(235, 51, 51)",
                                              backgroundColor:
                                                "rgb(235, 51, 51)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    9
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                    data-date="2021-12-11"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-11","type":"day"}'
                                          tabIndex={0}
                                        >
                                          11
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                    data-date="2021-12-12"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-12","type":"day"}'
                                          tabIndex={0}
                                        >
                                          12
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(20, 152, 101)",
                                              backgroundColor:
                                                "rgb(20, 152, 101)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    4
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                    data-date="2021-12-13"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-13","type":"day"}'
                                          tabIndex={0}
                                        >
                                          13
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                    data-date="2021-12-14"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-14","type":"day"}'
                                          tabIndex={0}
                                        >
                                          14
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                    data-date="2021-12-15"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-15","type":"day"}'
                                          tabIndex={0}
                                        >
                                          15
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(255, 196, 36)",
                                              backgroundColor:
                                                "rgb(255, 196, 36)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    7
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                    data-date="2021-12-16"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-16","type":"day"}'
                                          tabIndex={0}
                                        >
                                          16
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past">
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    2
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                    data-date="2021-12-17"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-17","type":"day"}'
                                          tabIndex={0}
                                        >
                                          17
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                    data-date="2021-12-18"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-18","type":"day"}'
                                          tabIndex={0}
                                        >
                                          18
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(235, 51, 51)",
                                              backgroundColor:
                                                "rgb(235, 51, 51)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    8
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                    data-date="2021-12-19"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-19","type":"day"}'
                                          tabIndex={0}
                                        >
                                          19
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                    data-date="2021-12-20"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-20","type":"day"}'
                                          tabIndex={0}
                                        >
                                          20
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                    data-date="2021-12-21"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-21","type":"day"}'
                                          tabIndex={0}
                                        >
                                          21
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(20, 152, 101)",
                                              backgroundColor:
                                                "rgb(20, 152, 101)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    6
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                    data-date="2021-12-22"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-22","type":"day"}'
                                          tabIndex={0}
                                        >
                                          22
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                    data-date="2021-12-23"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-23","type":"day"}'
                                          tabIndex={0}
                                        >
                                          23
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a
                                            className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past"
                                            style={{
                                              borderColor: "rgb(255, 196, 36)",
                                              backgroundColor:
                                                "rgb(255, 196, 36)"
                                            }}
                                          >
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    4
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                    data-date="2021-12-24"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-24","type":"day"}'
                                          tabIndex={0}
                                        >
                                          24
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sat fc-day-past"
                                    data-date="2021-12-25"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-25","type":"day"}'
                                          tabIndex={0}
                                        >
                                          25
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events">
                                        <div className="fc-daygrid-event-harness">
                                          <a className="fc-daygrid-event fc-daygrid-block-event fc-h-event fc-event fc-event-draggable fc-event-resizable fc-event-start fc-event-end fc-event-past">
                                            <div className="fc-event-main">
                                              <div className="fc-event-main-frame">
                                                <div className="fc-event-title-container">
                                                  <div className="fc-event-title fc-sticky">
                                                    7
                                                  </div>
                                                </div>
                                              </div>
                                            </div>
                                            <div className="fc-event-resizer fc-event-resizer-end" />
                                          </a>
                                        </div>
                                      </div>
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sun fc-day-past"
                                    data-date="2021-12-26"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-26","type":"day"}'
                                          tabIndex={0}
                                        >
                                          26
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-mon fc-day-past"
                                    data-date="2021-12-27"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-27","type":"day"}'
                                          tabIndex={0}
                                        >
                                          27
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-tue fc-day-past"
                                    data-date="2021-12-28"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-28","type":"day"}'
                                          tabIndex={0}
                                        >
                                          28
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-wed fc-day-past"
                                    data-date="2021-12-29"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-29","type":"day"}'
                                          tabIndex={0}
                                        >
                                          29
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-thu fc-day-past"
                                    data-date="2021-12-30"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-30","type":"day"}'
                                          tabIndex={0}
                                        >
                                          30
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-fri fc-day-past"
                                    data-date="2021-12-31"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2021-12-31","type":"day"}'
                                          tabIndex={0}
                                        >
                                          31
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sat fc-day-past fc-day-other"
                                    data-date="2022-01-01"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-01","type":"day"}'
                                          tabIndex={0}
                                        >
                                          1
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sun fc-day-past fc-day-other"
                                    data-date="2022-01-02"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-02","type":"day"}'
                                          tabIndex={0}
                                        >
                                          2
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-mon fc-day-past fc-day-other"
                                    data-date="2022-01-03"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-03","type":"day"}'
                                          tabIndex={0}
                                        >
                                          3
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-tue fc-day-past fc-day-other"
                                    data-date="2022-01-04"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-04","type":"day"}'
                                          tabIndex={0}
                                        >
                                          4
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-wed fc-day-past fc-day-other"
                                    data-date="2022-01-05"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-05","type":"day"}'
                                          tabIndex={0}
                                        >
                                          5
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-thu fc-day-past fc-day-other"
                                    data-date="2022-01-06"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-06","type":"day"}'
                                          tabIndex={0}
                                        >
                                          6
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-fri fc-day-past fc-day-other"
                                    data-date="2022-01-07"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-07","type":"day"}'
                                          tabIndex={0}
                                        >
                                          7
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg" />
                                    </div>
                                  </td>
                                  <td
                                    className="fc-daygrid-day fc-day fc-day-sat fc-day-past fc-day-other"
                                    data-date="2022-01-08"
                                  >
                                    <div className="fc-daygrid-day-frame fc-scrollgrid-sync-inner">
                                      <div className="fc-daygrid-day-top">
                                        <a
                                          className="fc-daygrid-day-number"
                                          data-navlink='{"date":"2022-01-08","type":"day"}'
                                          tabIndex={0}
                                        >
                                          8
                                        </a>
                                      </div>
                                      <div className="fc-daygrid-day-events" />
                                      <div className="fc-daygrid-day-bg">
                                        <div
                                          className="fc-daygrid-bg-harness"
                                          style={{ left: 0, right: 0 }}
                                        >
                                          <div className="fc-non-business" />
                                        </div>
                                      </div>
                                    </div>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>



       <div >
        <div className="container1">
          <h1 className="services-heading">Tous les services</h1> <br/>
          <div className="flex-container">
            <div className="custom-box">
              <div className="custom-heading">
                <Link to="/home/societes" className="tet-link">
                <h4 className="tet service-title">
                <i className="fas fa-university react-icon"></i>  <br/> Sociétés
                </h4>
                </Link>
              </div>
              <hr />
              <div className="flex-row">
                <h5>Total:</h5>
                <h5>{employeeTotal}</h5>
              </div>
            </div>
            <div className="custom-box">
              <div className="custom-heading">
              <Link to="/home/category" className="tet-link">
  <h4 className="tet">
  <i className="fas fa-building react-icon"></i> <br/> Départements
  </h4>
</Link>
              </div>
              <hr />
              <div className="flex-row">
                <h5>Total:</h5>
                <h5>{categoryTotal}</h5>
              </div>
            </div>
            <div className="custom-box">
              <div className="custom-heading">
                
                <Link to="/home/employee" className="tet-link">
                <h4 className="tet service-title">
                <i className="fas fa-users react-icon"></i> <br/> Employés
                </h4>
                </Link>
              </div>
              <hr />
              <div className="flex-row">
                <h5>Total:</h5>
                <h5>{employeeTotal}</h5>
              </div>
            </div>
           
            <div className="custom-box">
              <div className="custom-heading">
                <h4 className="tet">
                <i className="fas fa-calendar-alt react-icon"></i> <br/> Congés
                </h4>
              </div>
              <hr />
              <div className="flex-row">
                <h5>Total:</h5>
                <h5>{categoryTotal}</h5>
              </div>
            </div>
            <div className="custom-box">
              <div className="custom-heading">
                <h4 className="tet text-center">
                <i className="fas fa-briefcase react-icon"></i> <br/> Missions
                </h4>
              </div>
              <hr />
              <div className="flex-row">
                <h5>Total:</h5>
                <h5>{categoryTotal}</h5>
              </div>
            </div>
          </div>
 
          
        </div>
      </div> 
      
    </div>

    
  );
};

export default SideNavbar;
