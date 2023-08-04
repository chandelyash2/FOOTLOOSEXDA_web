import React from "react";
import Container from "../common/Container";
import { Heading } from "../common/Heading";
import { SecondaryButton } from "../common/Button/SecondarButton";
import { ButtonVariant } from "../common/Button/PrimaryButton";
import { BlogCard } from "../common/BlogCard";

export const BlogList = () => {
  return (
    <div className=" bg-[#F0FBFA]">
      <Container>
        <div className="flex justify-between items-center">
          <Heading className="text-primary">
            Hodo The Wanderer <span className="text-secondary">Blog</span>
          </Heading>
          <SecondaryButton label="View All" variant={ButtonVariant.primary} />
        </div>
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid lg:grid-cols-3 gap-12 my-10 ">
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </div>
      </Container>
    </div>
  );
};
