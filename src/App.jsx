import { useState } from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Hero from "./components/sections/Hero/Hero";
import About from "./components/sections/About/About";
import Projects from "./components/sections/Projects/Projects";
import Contacts from "./components/sections/Contacts/Contacts";

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <div className="container">
          <About />
          <Projects />
          <Contacts />
        </div>
      </main>
      <Footer />
    </>
  );
}
