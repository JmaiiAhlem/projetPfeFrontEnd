import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const HomeRH = () => {
  const navigate = useNavigate();

  return (
    <div>
      <SideNavbar />
    </div>
  );
};

export default HomeRH;