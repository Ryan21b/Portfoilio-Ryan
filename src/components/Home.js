import React from "react";
import Navbar from "./Navbar";
import Header from "./Header";
import Particles from "react-particles-js";

const Home = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Particles
        params={{
          particles: {
            number: {
              value: 100,
            },
            opacity: {
              value: 10,
            },
          },
        }}
      />
    </>
  );
};
export default Home;
