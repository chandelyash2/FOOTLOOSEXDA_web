import React from "react";
import Layout from "../Layout";
import Container from "../common/Container";
import { ButtonVariant, PrimaryButton } from "../common/Button/PrimaryButton";
import TopArrow from "../common/icons/TopArrow";
import { PopularDestination } from "./PopularDestination";
import { Heading } from "../common/Heading";
import { BlogList } from "./BlogList";
import { TravelWith } from "./TravelWith";

const img = "/img/home.png";
const Home = () => {
  return (
    <>
      <Layout>
        <div
          className="before:content-[''] before:bg-gradient before:absolute before:top-0 before:w-full before:h-full bg-no-repeat w-screen h-screen bg-cover"
          style={{ backgroundImage: `url(${img})` }}
        >
          <Container>
            <div className="absolute top-[33%] flex flex-col gap-8">
              <Heading>
                Explore your <br /> dream and{" "}
                <span className="text-secondary">favourite</span> <br />
                destination
              </Heading>
              <p className="max-w-[280px] text-base md:max-w-[471px] md:text-lg">
                We help you find wonderful trips and great vacation place and we
                will provide famous and popular tourist place all over the world{" "}
              </p>
              <PrimaryButton
                label="Lets Explore"
                link=""
                variant={ButtonVariant.primary}
              >
                <TopArrow />
              </PrimaryButton>
            </div>
          </Container>
        </div>
        <PopularDestination />
        <TravelWith />
        <BlogList />
      </Layout>
    </>
  );
};

export default Home;
