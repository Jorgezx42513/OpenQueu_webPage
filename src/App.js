import React from "react";
import { ReactDOM } from "react";
import  { Dts_sect } from "./components/dts_sect";
import { Header } from "./components/header";
import  {Download} from './components/dowload_sect.jsx'
import {Intro} from './components/intro'
import {Contact} from './components/contact'
import {Footer} from './components/footer'
import {Header_alt} from './components/header_alt'

export default function App() {
  return (
    <>
      <Header/>
      <Intro/>
      <Download/>
      <Dts_sect/>
      <Contact/>
      <Footer/>
    </>   
  );
}


