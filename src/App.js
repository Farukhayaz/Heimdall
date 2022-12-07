import React from "react";
import Navbar from "./components/navbar";
import Member from "./pages/member";
import Section1 from "./pages/section1";
import Section2 from "./pages/section2";
import Section3 from "./pages/section3";
import Section4 from "./pages/section4";
import Slider from "./pages/slider";
import Slider2 from "./pages/slider2";
import Slider3 from "./pages/slider3";


export default function App() {
  return (
    <>
      <Navbar />

      {/* <Slider3 /> */}
      <Member />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
    </>
  )
}

