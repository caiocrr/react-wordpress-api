import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./sections/Header/Header";
import Footer from "./sections/Footer/Footer";
import SectionA from "./sections/SectionA/SectionA";
import SectionB from "./sections/SectionB/SectionB";
import SectionC from "./sections/SectionC/SectionC";
import SectionD from "./sections/SectionD/SectionD";
import SectionE from "./sections/SectionE/SectionE";

function App() {
  return (
    <>
      <Header />
      <div style={{ paddingTop: "72px" }}>
        <SectionA />
        <SectionB />
        <SectionC />
        <SectionD />
        <SectionE />
      </div>
      <Footer />
    </>
  );
}

export default App;
