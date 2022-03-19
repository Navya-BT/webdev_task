import React from "react";
// JSX
import Navbar from "./components/UI/Navbar/Navbar";
import BasicSlider from "./components/BasicSlider/BasicSlider";
import DataTable from "./components/DataTable/DataTable.js";
import ContactForm from "./components/ContactForm/ContactForm.js";

import Grid from '@mui/material/Grid';
import Footer from './components/Footer/Footer.js';
const app = () => {
  return (
    <div
      style={{
        color: "#FFF"
      }}
    >
      <Navbar />
      <BasicSlider />

      <DataTable/>
      <ContactForm/>
     
<Footer/>
        
    </div>
  );
};

export default app;
