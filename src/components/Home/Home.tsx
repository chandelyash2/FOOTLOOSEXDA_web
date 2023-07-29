import React from "react";
import Layout from "../Layout";

const img = "/img/home.png";
const Home = () => {
  return (
    <>
      <Layout>
        <div
          className="before:content-[''] before:bg-gradient before:absolute before:top-0 before:w-full before:h-full bg-no-repeat w-screen h-screen bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        >
          
        </div>
      </Layout>
    </>
  );
};

export default Home;
